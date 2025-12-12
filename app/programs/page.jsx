"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <section className="relative flex flex-col items-center py-20">
        {/* Background gradient seperti gambar */}
        <div className="absolute top-0 left-0 w-full h-[320px] bg-gradient-to-b from-yellow-300 to-white"></div>

        {/* Logo Spark 31 */}
        <div className="relative mt-10">
          <Image
            src="/spark.png"         
            alt="Spark 31 Logo"
            width={350}
            height={200}
            className="mx-auto drop-shadow"
          />
        </div>

        {/* Mood PNG */}
        <div className="relative mt-4">
          <Image
            src="/mood.png"          // ganti pakai nama PNG kamu
            alt="What kind of mood are you up to?"
            width={280}
            height={80}
            className="mx-auto"
          />
        </div>

        {/* 2 Card */}
        <div className="relative mt-8">
          <div className="w-[360px] sm:w-[420px] md:w-[500px] mx-auto rounded-xl p-6 bg-gradient-to-b from-yellow-200 to-yellow-400 shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="h-28 bg-white border border-red-300 rounded-lg shadow-sm"></div>

              {/* Card 2 */}
              <div className="h-28 bg-white border border-red-300 rounded-lg shadow-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
