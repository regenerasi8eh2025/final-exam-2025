import { NextResponse } from "next/server";
import icy from "icy";
import { PassThrough } from "stream";

export const runtime = "nodejs"; // ensure Node runtime (not edge) so we can use TCP sockets

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const streamUrl = searchParams.get('url');
  
  // Use provided URL or fallback to default
  const RADIO_URL = streamUrl || "https://s2.free-shoutcast.com/stream/18068/;stream.mp3";

  return new Promise((resolve) => {
    // Set a timeout to detect stalled connections
    const connectionTimeout = setTimeout(() => {
      console.error("Stream connection timeout");
      if (!isResolved) {
        isResolved = true;
        resolve(new Response("Connection timeout", { status: 504 }));
      }
    }, 30000); // 30 second timeout

    let isResolved = false;
    let icyRequest = null;

    // Use icy to make request so it can handle shoutcast/ICY responses
    icyRequest = icy
      .get(RADIO_URL, (res) => {
        clearTimeout(connectionTimeout);

        // Check response status code
        if (res.statusCode !== 200) {
          console.error(`Stream returned status ${res.statusCode}`);
          if (!isResolved) {
            isResolved = true;
            resolve(new Response("Stream unavailable", { status: 502 }));
          }
          return;
        }

        // res is a Node stream (IncomingMessage) with audio data in the body
        const pass = new PassThrough();
        
        // Add error handling to the PassThrough stream
        pass.on("error", (error) => {
          console.error("PassThrough stream error:", error);
        });

        res.pipe(pass);

        // Monitor for stalled data - if no data received for 30 seconds, log warning
        let lastDataTime = Date.now();
        const stallCheck = setInterval(() => {
          const timeSinceLastData = Date.now() - lastDataTime;
          if (timeSinceLastData > 30000) {
            console.warn("Stream appears to be stalled - no data received in 30 seconds");
            clearInterval(stallCheck);
          }
        }, 10000);

        res.on("data", () => {
          lastDataTime = Date.now();
        });

        res.on("end", () => {
          clearInterval(stallCheck);
          console.log("Stream ended");
        });

        res.on("error", (error) => {
          clearInterval(stallCheck);
          console.error("Source stream error:", error);
        });

        // Build response once headers received
        const response = new NextResponse(pass, {
          status: 200,
          headers: {
            "Content-Type": "audio/mpeg",
            "Cache-Control": "no-store",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Headers": "Range",
            "Connection": "keep-alive",
            "Transfer-Encoding": "chunked",
          },
        });

        if (!isResolved) {
          isResolved = true;
          resolve(response);
        }
      })
      .on("error", (error) => {
        clearTimeout(connectionTimeout);
        console.error("Stream proxy error:", error);
        if (!isResolved) {
          isResolved = true;
          resolve(new Response("Upstream error", { status: 502 }));
        }
      });

    // Add abort handling
    if (request.signal) {
      request.signal.addEventListener("abort", () => {
        clearTimeout(connectionTimeout);
        if (icyRequest) {
          icyRequest.abort();
        }
      });
    }
  });
}
