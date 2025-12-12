"use client";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import ButtonPrimary from "@/app/components/ButtonPrimary";
import FooterSection from "@/app/components/FooterSection";
import React, { useEffect, useRef, useState } from "react";
import Quiz from "@/app/components/quiz";
import '@/app/globals.css'

export default function AboutPage() {
  const [mode, setMode] = useState("star"); // 'star' | 'snow'
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalMember, setModalMember] = useState(null);

  // Countdown Box
  function CountdownBox() {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
      const targetDate = new Date();
      targetDate.setFullYear(targetDate.getFullYear() + 1);

      const timer = setInterval(() => {
        const now = Date.now();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d : ${hours}h : ${minutes}m : ${seconds}s`);
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    return (
      <>
        <div className="countdown">
          <div className="countdowntext">
            <h2>Spark31 </h2>
            <h4>What's possibly waiting for us?</h4>
          </div>

          <div className="actualcountdown">
            <h2>{timeLeft}</h2>
          </div>
        </div>

        <style jsx>{`
          .countdown {
            font-family: Georgia, serif;
            border-radius: 20px;
            color: black;
            margin: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            padding: 20px;
            height: 200px;
            margin-bottom: 25px;
            display: flex;
            background-color: rgba(255, 153, 4, 0.1);
          }

          .countdowntext {
            width: 30%;
          }

          .countdowntext h2 {
            font-size: 40px;
            padding: 15px;
          }

          .countdowntext h4 {
            font-size: 16px;
            padding: 15px;
            padding-top: 5px;
          }

          .actualcountdown {
            width: 60%;
            margin: 20px;
          }

          .actualcountdown h2 {
            font-size: 70px;
            text-align: right;
          }
        `}</style>
      </>
    );
  }

  // Config Music Rain
  const NOTE_COUNT = 18;
  const positions = [
    6, 15, 24, 33, 43, 52, 62, 72, 82, 12, 28, 44, 58, 70, 88, 38, 48, 68,
  ];
  const durations = [
    9, 7, 10, 8, 11, 9, 7.5, 10.5, 8.5, 9.5, 8.2, 11.2, 9.8, 7.8, 10.8, 9.1,
    8.9, 11.5,
  ];
  const delays = [
    0, 1, 2, 0.5, 1.5, 2.5, 0.8, 1.8, 2.8, 3.2, 3.8, 4.1, 1.2, 2.2, 0.4, 2.9,
    3.5, 4.5,
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Muhammad Al Ghifari FTTM 25",
      role: "Train Div Technic",
      insta: "https://www.instagram.com/gipz_07",
    },
    {
      id: 2,
      name: "Agnes Anindya STEI-R",
      role: "Train Div Technic",
      insta: "https://www.instagram.com/agnesanindyaa",
    },
    {
      id: 3,
      name: "Kayla Putri Nafisha FTTM 25",
      role: "Train Div Technic",
      insta: "https://www.instagram.com/kaylaanafisha",
    },
    {
      id: 4,
      name: "Aldi Kuniawan SAAPK 25",
      role: "Train Div Technic",
      insta: "https://www.instagram.com/aldikrwnn_",
    },
    {
      id: 5,
      name: "Nevin Pradityo Darminsyah SBM 25",
      role: "Train Div Technic",
      insta: "https://www.instagram.com/",
    },
    {
      id: 6,
      name: "Lingga Dwi Areta FTI 25",
      role: "Train Div Technic",
      insta: "https://www.instagram.com/liloveeo",
    },
    {
      id: 7,
      name: "Muhammad Atallah STEI-K 25",
      role: "Train Div Technic",
      insta: "https://www.instagram.com/atarmdhn",
    },
    {
      id: 8,
      name: "Agnes Jeannes Handoko Khoe SF 25",
      role: "Train Div Technic",
      insta: "https://www.instagram.com/",
    },
    {
      id: 9,
      name: "Herry Syaputra Nafisha FITB 25",
      role: "Train Div Technic",
      insta: "https://www.instagram.com/herryrefa_",
    },
    {
      id: 10,
      name: "Fathan Akbar FTTM 25",
      role: "Train Div Technic",
      insta: "https://www.instagram.com/tanbarbar_",
    },
    {
      id: 11,
      name: "Anwar Arofa Ghani Sholahudin FITB 25",
      role: "Train Div Technic",
      insta: "https://www.instagram.com/",
    },
    {
      id: 12,
      name: "Fachri Tsaqif Aiman FTSL 25",
      role: "Train Div Technic",
      insta: "https://www.instagram.com/fachritsaqif.28",
    },
    {
      id: 13,
      name: "Khawarij Khiyarudami FTTM 25",
      role: "Train Div Technic",
      insta: "https://www.instagram.com/khawarizmii2",
    },
    {
      id: 14,
      name: "Haekal Fikri Yusuf SAPPK 25",
      role: "Train Div Technic",
      insta: "https://www.instagram.com/haekalyusuf",
    },
    {
      id: 15,
      name: "Athaurrahman Adrianto 25",
      role: "Train Div Technic",
      insta: "https://www.instagram.com/atharrhmn",
    },

  ];
  const musicNoteRules = Array.from({ length: NOTE_COUNT })
    .map((_, i) => {
      const left = positions[i % positions.length];
      const dur = durations[i % durations.length];
      const delay = delays[i % delays.length];
      return `.music-rain .note:nth-child(${i + 1}){ left:${left}%; animation: fall ${dur}s linear ${delay}s infinite; }`;
    })
    .join("\n");

  useEffect(() => {
    const id = "bg-canvas";
    let canvas = document.getElementById(id);
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.id = id;
      canvas.style.position = "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = "-1";
      document.body.appendChild(canvas);
    }
    const ctx = canvas.getContext("2d");
    let raf = null;
    let ratio = window.devicePixelRatio || 1;
    let w = 0,
      h = 0;
    let particles = [];
    let shooting = [];

    function resize() {
      ratio = window.devicePixelRatio || 1;
      w = canvas.width = Math.max(1, Math.floor(window.innerWidth * ratio));
      h = canvas.height = Math.max(1, Math.floor(window.innerHeight * ratio));
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      initParticles();
    }

    function initParticles() {
      particles = [];
      const particleCount = mode === "star" ? 220 : 240;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r:
            (Math.random() * (mode === "star" ? 1.5 : 2.5) +
              (mode === "star" ? 0.4 : 1)) *
            ratio,
          tw: Math.random() * Math.PI * 2,
          speed:
            Math.random() * (mode === "star" ? 0.02 : 0.9) +
            (mode === "star" ? 0.005 : 0.2),
          drift: Math.random() * 0.6 - 0.3,
          angle: Math.random() * Math.PI * 2,
          opacity: 1,
        });
      }
    }

    function createShooting() {
      if (Math.random() > 0.985 && shooting.length < 3 && mode === "star") {
        shooting.push({
          x: Math.random() * w * 0.6 + w * 0.2,
          y: Math.random() * h * 0.3,
          length: Math.random() * 80 * ratio + 40 * ratio,
          speed: Math.random() * 6 * ratio + 4 * ratio,
          angle: (Math.random() * Math.PI) / 4 + Math.PI / 6,
          opacity: 1,
        });
      }
    }

    function step() {
      ctx.clearRect(0, 0, w, h);
      const scroll =
        window.pageYOffset || document.documentElement.scrollTop || 0;
      const par = scroll * 0.03;

      if (mode === "star") {
        for (let p of particles) {
          p.tw += p.speed;
          const t = Math.sin(p.tw) * 0.4 + 0.6;
          ctx.fillStyle = `rgba(15,23,42,${t})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y + par * 0.2, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
        for (let i = shooting.length - 1; i >= 0; i--) {
          const s = shooting[i];
          ctx.strokeStyle = `rgba(15,23,42,${s.opacity})`;
          ctx.lineWidth = 2 * ratio;
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          const ex = s.x + Math.cos(s.angle) * s.length;
          const ey = s.y + Math.sin(s.angle) * s.length;
          ctx.lineTo(ex, ey);
          ctx.stroke();
          s.x += Math.cos(s.angle) * s.speed;
          s.y += Math.sin(s.angle) * s.speed;
          s.opacity -= 0.01;
          if (s.opacity <= 0) shooting.splice(i, 1);
        }
        createShooting();
      } else {
        for (let p of particles) {
          p.angle += 0.01;
          p.y += p.speed;
          p.x += Math.sin(p.angle) * p.drift * 1.4;
          if (p.y > h + 5) {
            p.y = -10;
            p.x = Math.random() * w;
          }
          if (p.x > w + 5) p.x = -5;
          if (p.x < -5) p.x = w + 5;
          ctx.beginPath();
          ctx.fillStyle = `rgba(100,116,139,0.5)`;
          ctx.arc(p.x, p.y + par * 0.2, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(step);
    }

    resize();
    window.addEventListener("resize", resize);
    step();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [mode]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") setCurrentIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight")
        setCurrentIndex((i) => Math.min(teamMembers.length - 1, i + 1));
      if (e.key === "Escape") setModalMember(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [teamMembers.length]);

  useEffect(() => {
    let paused = false;
    const el = carouselRef.current;
    const intv = setInterval(() => {
      if (!paused) {
        setCurrentIndex((i) => (i + 1) % teamMembers.length);
      }
    }, 4200);
    const onEnter = () => {
      paused = true;
    };
    const onLeave = () => {
      paused = false;
    };
    el?.addEventListener("mouseenter", onEnter);
    el?.addEventListener("mouseleave", onLeave);
    return () => {
      clearInterval(intv);
      el?.removeEventListener("mouseenter", onEnter);
      el?.removeEventListener("mouseleave", onLeave);
    };
  }, [teamMembers.length]);

  useEffect(() => {
    const tr = trackRef.current;
    if (!tr) return;
    const card = tr.querySelector(".card");
    const gap = 18;
    const cardWidth = card ? card.getBoundingClientRect().width + gap : 258;
    const x = -currentIndex * cardWidth;
    tr.style.transform = `translateX(${x}px)`;
  }, [currentIndex]);

  function openMember(m) {
    setModalMember(m);
  }
  function scrollToTeam() {
    const el = document.getElementById("team-heading");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // CSS OUR CREW HISTORY
  const css = `
    body { background: transparent !important; }
    :root { --maxW:1200px; --muted:#6b7280; --accent:#ff7a4a; --card:#fff; }
    
    /* Music Rain */
    .music-rain{ position:absolute; inset:0; pointer-events:none; z-index:0; overflow:hidden; }
    .music-rain .note{ position:absolute; top:-20px; transform-origin:center; opacity:0; font-size:18px; text-shadow:0 8px 16px rgba(15,23,42,0.1); }
    .music-rain .note::before{ content:"♪"; color:rgba(255, 255, 255, 0.5); }
    .music-rain .note:nth-child(2n)::before{ content:"♫"; font-size:22px; color:rgba(255, 255, 255, 0.6); }
    ${musicNoteRules}
    @keyframes fall{
      0%{ transform:translateY(0) rotate(-8deg); opacity:0; }
      10%{ opacity:1; }
      85%{ opacity:1; }
      100%{ transform:translateY(500px) rotate(12deg); opacity:0; } 
    }

    /* Background Toggle UI */
    .bg-toggle{ background:rgba(255,255,255,0.8); padding:8px; border-radius:10px; border:1px solid rgba(0,0,0,0.06); box-shadow:0 6px 18px rgba(15,23,42,0.06); }
    .bg-toggle button{ border:none; background:transparent; cursor:pointer; padding:8px 12px; border-radius:8px; }

    /* Carousel */
    .team-wrap{ margin-top:28px; background:transparent; }
    .carousel{ position:relative; overflow:hidden; border-radius:12px; }
    .carousel-track{ display:flex; gap:18px; will-change:transform; transition:transform 420ms cubic-bezier(.2,.9,.2,1); padding:18px; }
    .card{ flex:0 0 240px; background:var(--card); border-radius:12px; padding:12px; box-shadow:0 8px 30px rgba(15,23,42,0.06); text-align:center; transition: transform 0.3s ease; }
    .card:hover { transform: translateY(-5px); }
    .card img{ width:180px; height:180px; object-fit:cover; border-radius:14px; display:block; margin:6px auto; }
    .card h4{ margin:8px 0 4px; font-size:16px; font-weight:bold; }
    .card p.role{ color:var(--muted); margin:0; font-size:13px; }
    .btn-icon{ background:white; border:1px solid #eee; padding:8px 12px; border-radius:8px; cursor:pointer; }
    .btn-small{ padding: 6px 14px; border: 1px solid #eee; border-radius: 6px; background: white; cursor: pointer; font-size: 12px; font-weight:600; color: #4b5563; }

    /* Modal */
    .member-modal{ position:fixed; inset:0; display:flex; align-items:center; justify-content:center; z-index:9999; }
    .member-backdrop{ position:absolute; inset:0; background:rgba(6,10,15,0.6); backdrop-filter: blur(2px); }
    .member-panel{ position:relative; background:white; border-radius:12px; padding:24px; width:min(880px,94%); max-height:90vh; overflow:auto; z-index:2; box-shadow:0 30px 80px rgba(2,6,23,0.6); }
    .member-panel img{ width:240px; height:240px; object-fit:cover; border-radius:12px; float:left; margin-right:24px; }

    /* --- GAYA SCRAPBOOK (OUR JOURNEY) --- */
    .scrapbook-font { font-family: 'Indie Flower', cursive; color: #5d4037; }
    
    .timeline-line-custom {
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 4px;
        background-image: linear-gradient(to bottom, #8d6e63 50%, transparent 50%);
        background-size: 100% 20px;
        transform: translateX(-50%);
        z-index: 0;
    }

    .polaroid {
        background: white;
        padding: 12px 12px 35px 12px;
        box-shadow: 3px 4px 12px rgba(0,0,0,0.2);
        transition: transform 0.3s ease;
        position: relative;
    }
    .polaroid:hover { transform: scale(1.05) rotate(0deg) !important; z-index: 10; }
    .polaroid img { width: 100%; height: auto; filter: sepia(15%); border: 1px solid #eee; }
    
    .tape {
        width: 80px; height: 25px;
        position: absolute; top: -10px; left: 50%;
        transform: translateX(-50%) rotate(-3deg);
        box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        z-index: 5;
    }

    .description-paper {
        background-color: #fff8e1;
        border-radius: 2px;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        position: relative;
        border: 1px solid #f0f0f0;
    }
    
    .pin {
        width: 12px; height: 12px;
        border-radius: 50%;
        position: absolute; top: -6px; left: 50%;
        transform: translateX(-50%);
        box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
    }
    
    @media (max-width:900px){
      .card{ flex:0 0 170px; }
      .card img{ width:140px; height:140px; }
      .member-panel img { float:none; width:100%; height:auto; margin-bottom:16px; }
      .timeline-line-custom { display: none; }
    }
  `;

  return (
    <div className="min-h-screen bg-transparent text-gray-800 relative">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      {/* Import Font untuk Scrapbook */}
      <link
        href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
        rel="stylesheet"
      />

      <Navbar />

      {/* Switcher Bintang/Salju */}
      <div style={{ position: "fixed", right: 18, top: 100, zIndex: 9999 }}>
        <div
          className="bg-toggle"
          role="toolbar"
          aria-label="Background toggle"
        >
          <button
            aria-pressed={mode === "star"}
            onClick={() => setMode("star")}
            title="Star mode"
          >
            ⭐
          </button>
          <button
            aria-pressed={mode === "snow"}
            onClick={() => setMode("snow")}
            title="Snow mode"
          >
            ❄️
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#ff9a36] via-[#ff6600] to-[#c83c14] p-12 sm:p-20 text-center text-white shadow-2xl">
            <div className="music-rain" aria-hidden>
              {Array.from({ length: NOTE_COUNT }).map((_, i) => (
                <span key={i} className="note" />
              ))}
            </div>

            <svg
              className="absolute right-0 top-0 h-full w-2/3 pointer-events-none opacity-25 mix-blend-overlay"
              viewBox="0 0 420 420"
              aria-hidden
              style={{ transform: "scale(1.8) translate(15%, -5%)", zIndex: 1 }}
            >
              <defs>
                <pattern
                  id="dots"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="5" cy="5" r="1.6" fill="#fff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>

            <div className="relative z-10 animate-fadeIn">
              <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4 opacity-80">
                About Us
              </p>
              <h1 className="text-5xl sm:text-7xl font-bold mb-6 font-serif drop-shadow-sm">
                Spark 31 Radio
              </h1>
              <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed opacity-95 mb-10 font-medium drop-shadow-sm">
                Melahirkan keakraban dengan profesionalitas dari Cakru 31.
              </p>
              <div className="mt-10">
                <button
                  onClick={scrollToTeam}
                  className="px-10 py-4 bg-gradient-to-b from-[#ff6347] to-[#d23c1e] text-white rounded-full shadow-lg hover:scale-105 transition-all font-bold text-lg border border-white/20"
                >
                  See Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
        <section
          id="our-journey"
          className="py-16 my-10 relative overflow-hidden rounded-3xl shadow-xl"
        >
          {/* Background Khusus Section Ini */}
          <div className="absolute inset-0 bg-[#FFFDD0]"></div>

          <div className="relative z-10 scrapbook-font">
            <h2 className="text-center text-5xl font-bold mb-16 underline decoration-wavy decoration-[#ffab91]">
               Our Journey
            </h2>

            <div className="relative max-w-4xl mx-auto">
              <div className="timeline-line-custom hidden md:block"></div>

              {/* Momen 1 */}
              <div className="flex flex-col md:flex-row justify-between items-center mb-16 relative">
                {/* Foto Kiri */}
                <div className="polaroid w-64 transform -rotate-3 mb-6 md:mb-0">
                  <div className="tape bg-yellow-200/60"></div>
                  <img
                    src="app/about-us/img1.jpeg"
                    alt="Trolls Trails~"
                  />
                  <div className="text-center mt-3 font-bold text-lg">
                    Our Memories
                  </div>
                </div>
                <div className="description-paper p-6 w-full md:w-5/12 relative">
                  <div className="pin bg-red-600"></div>
                  <h3 className="text-xl font-bold mb-2">27 September 2025</h3>
                  <p className="leading-snug text-lg">
                    Cakru 31 pertama kali menerima Pelatihan Terpusat di Regenerasi.
                  </p>
                </div>
              </div>

              {/* Momen 2 */}
              <div className="flex flex-col md:flex-row-reverse justify-between items-center mb-16 relative">
                {/* Foto Kanan */}
                <div className="polaroid w-64 transform rotate-2 mb-6 md:mb-0">
                  <div className="tape bg-pink-200/60"></div>
                  <img
                    src="app/about-us/img4.jpeg"
                    alt="Fun Moments"
                  />
                  <div className="text-center mt-3 font-bold text-lg">
                    Our Memories
                  </div>
                </div>
                <div className="description-paper p-6 w-full md:w-5/12 relative">
                  <div className="pin bg-blue-600"></div>
                  <h3 className="text-xl font-bold mb-2">28 Oktober 2025</h3>
                  <p className="leading-snug text-lg">
                    Training Divisi pertama dari Cakru 31! Langkah awal dari Cakru 31 untuk mengasah bakat mereka di divisi terkait.
                  </p>
                </div>
              </div>

              {/* Momen 3 */}
              <div className="flex flex-col md:flex-row justify-between items-center relative">
                {/* Foto Kiri */}
                <div className="polaroid w-64 transform -rotate-1 mb-6 md:mb-0">
                  <div className="tape bg-green-200/60"></div>
                  <img
                    src="app/about-us/img2.jpeg"
                    alt="Happy Vibes"
                  />
                  <div className="text-center mt-3 font-bold text-lg">
                    Our Memories
                  </div>
                </div>
                <div className="description-paper p-6 w-full md:w-5/12 relative">
                  <div className="pin bg-red-600"></div>
                  <h3 className="text-xl font-bold mb-2">13 Desember 2025</h3>
                  <p className="leading-snug text-lg">
                    Transformasi menjadi Spark 31 Radio, siap untuk berkarya bersama di Jalur Warna yang cerah!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CountdownBox />

        <section className="team-wrap" aria-labelledby="team-heading">
          <div className="flex items-center justify-between mb-6 bg-white/60 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-sm">
            <h2
              id="team-heading"
              className="text-2xl font-bold text-gray-900 ml-2"
            >
              Training Divisi
            </h2>
            <div className="flex items-center gap-3">
              <div className="text-gray-500 text-sm font-medium">
                {currentIndex + 1} / {teamMembers.length}
              </div>
              <button
                className="btn-icon"
                onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              >
                ◀
              </button>
              <button
                className="btn-icon"
                onClick={() =>
                  setCurrentIndex((i) =>
                    Math.min(teamMembers.length - 1, i + 1),
                  )
                }
              >
                ▶
              </button>
            </div>
          </div>

          <div className="carousel" ref={carouselRef} tabIndex={0}>
            <div className="carousel-track" ref={trackRef}>
              {teamMembers.map((m) => (
                <article key={m.id} className="card">
                  <h4>{m.name}</h4>
                  <p className="role">{m.role}</p>
                  <div
                    style={{
                      marginTop: 12,
                      display: "flex",
                      justifyContent: "center",
                      gap: 8,
                    }}
                  >
                    <button className="btn-small" onClick={() => openMember(m)}>
                      Details
                    </button>
                    <a
                      href={m.insta}
                      className="btn-small"
                      target="_blank"
                      rel="noreferrer"
                    >
                      IG
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Quiz/>
      
      <FooterSection />

      {modalMember && (
        <div className="member-modal" role="dialog" aria-modal="true">
          <div
            className="member-backdrop"
            onClick={() => setModalMember(null)}
          />
          <div className="member-panel">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={() => setModalMember(null)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="mt-4 md:mt-0">
                <h3 className="text-3xl font-bold text-gray-900">
                  {modalMember.name}
                </h3>
                <p className="text-[#d23c1e] font-medium mt-1 text-lg">
                  {modalMember.role}
                </p>
                <div className="w-12 h-1 bg-gray-200 my-4 rounded-full"></div>
                <p className="text-gray-600 leading-relaxed italic">
                  "Rumah Tole, Jumpas, GKU 3, Ga Tidur Mantap"
                </p>
                <div className="mt-8 flex gap-3">
                  <a
                    href={modalMember.insta}
                    className="px-6 py-2 bg-gray-900 text-white rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
