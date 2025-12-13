"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* ===================== FIGMA MOOD BOX DATA ===================== */
const moodBoxData = [
  { name: "Horror", img: "/horror.png" },
  { name: "Romance", img: "/romance.png" },
  { name: "ITB", img: "/itb.png" },
  { name: "Mystery", img: "/mystery.png" },
  { name: "Gen Z", img: "/genz.png" },
];

/* ===================== PROGRAM DATA ===================== */
const allProgramsData = [
    {
    title: "LTM : Lentera Tengah Malam",
    genre: "Horror",
    thumbnail: "/Ltm.png",
    description: "Kupas tuntas tempat paling angker di ITB Jatinangor dalam episode perdana LTM yang dijamin bikin bulu kuduk berdiri! 🕯👻🔥",
  },
  {
  title: "OWL : Obrolan Waktu Larut",
  genre: "Horror",
  thumbnail: "/Owl.png",
  description: "Siap bongkar tiga lagu berhantu yang bakal bikin Kampus Mania merinding! 👻🎶🔥",
  },
  {
    title: "LDR : Love Dalam Realita ",
    genre: "Romance",
    thumbnail: "/Logo.png",
    description: "Siap nemenin Kampus Mania ngulik first date yang penuh ekspektasi tapi realitanya penuh plot twist! 😆💘",
  },
  {
    title: "LOVE 4.0: Navigasi Hati di Era Notifikasi",
    genre: "Romance",
    thumbnail: "/LOVE 4.0 U.png",
    description: "Siap nemenin Kampus Mania bahas cinta era digital yang bikin deg-degan tiap notifikasi masuk! 💘📱🔥",
  },
  {
    title: "NGIBUL : Ngobrol Asik Bebas Gaul",
    genre: "Gen Z",
    thumbnail: "/Ngibul3.png",
    description: "TNGIBUL hadir jadi ruang aman Gen Z buat ngebahas label “generasi santuy” dan realitanya! 🎙✨",
  },
  {
    title: "SDGS : Santai Dulu Ga Sih...",
    genre: "Gen Z",
    thumbnail: "/Sdg.png",
    description: "Siap kupas fenomena bahasa gaul Gen Z yang lagi viral bareng Kala, Ajrin, dan El! 🤩🔥",
  },
  {
    title: "MASK : Misteri Asik Seputar Kriminal",
    genre: "Mystery",
    thumbnail: "/Mask.png",
    description: "Kupas tuntas fakta stalking yang bisa berubah dari ketertarikan jadi obsesi berbahaya! ⚠🎭",
  },
  {
    title: "TKP : Tempat Kupas Peristiwa",
    genre: "Mystery",
    thumbnail: "/Tkp.png",
    description: "TKP kupas tuntas kebiasaan kecil kita beneran bisa bikin kita dianggap kriminal! 🫣📌",
  },
  {
    title: "WASABI : What’s Up AITIBI",
    genre: "ITB",
    thumbnail: "/Wasabi.png",
    description: "WASABI?! Bongkar suka-duka dunia ITB plus tips biar hidup tetap chill di tengah chaos! 🤩💥",
    },
    {
    title: "BAYANGAN : Bangunan, Budaya, dan Kenangan ITB",
    genre: "ITB",
    thumbnail: "/Bayangan.png",
    description: "Bayangan siap bongkar sejarah tersembunyi Menara Loji, lengkap dari asal-usul sampai rumor yang bikin penasaran! ⏰✨",
    },
];

/* ===================== UPCOMING EVENTS ===================== */
const upcomingEvents = [
  { date: "2025-12-13", time: "17:00-19:00", title: "LDR", genre: "Romance" },
  { date: "2025-12-13", time: "19:30-21:30", title: "SDGs", genre: "ITB" },
  { date: "2025-12-14", time: "17:00-19:00", title: "LOVE 4.0 U", genre: "Romance" },
  { date: "2025-12-14", time: "19:30-21:30", title: "OWL", genre: "ITB" },
  { date: "2025-12-15", time: "17:00-19:00", title: "WASABI", genre: "Gen Z" },
  { date: "2025-12-15", time: "19:30-21:30", title: "LTM", genre: "ITB" },
  { date: "2025-12-16", time: "17:00-19:00", title: "BAYANGAN", genre: "Horror" },
  { date: "2025-12-16", time: "19:30-21:30", title: "MASK", genre: "Mystery" },
  { date: "2025-12-17", time: "17:00-19:00", title: "NGIBUL", genre: "Horror" },
  { date: "2025-12-17", time: "19:30-21:30", title: "TKP", genre: "Mystery" },
];

/* ===================== GENRE COLORS ===================== */
const genreColors = {
  Horror: "bg-red-600",
  Romance: "bg-pink-500",
  "Gen Z": "bg-purple-500",
  Mystery: "bg-teal-400",
  ITB: "bg-blue-500",
};

/* ===================== GENRE SECTION ===================== */
const GenreSelectionSection = ({ selectedGenre, onGenreSelect }) => {
  return (
    <section className="pb-10 bg-gradient-to-b from-yellow-300 to-white pt-16 relative overflow-hidden">

      <div className="text-center mb-8">
        <Image src="/spark.png" width={300} height={200} alt="Spark Logo" className="mx-auto" />
      </div>

      {!selectedGenre && (
        <div className="text-center text-xl text-gray-600 mb-10 animate-fade-in">
          Tentukan sesuai mood kalian!
        </div>
      )}

      <div className="text-center mb-10">
        <Image src="/mood.png" width={260} height={80} alt="Mood Label" className="mx-auto" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative">

        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          slidesPerView={2.3}
          spaceBetween={4}
          breakpoints={{
            640: { slidesPerView: 3.1, spaceBetween: 6 },
            1024: { slidesPerView: 4.1, spaceBetween: 8 },
            1280: { slidesPerView: 5, spaceBetween: 10 },
          }}
          className="py-8"
        >
          {moodBoxData.map((item, idx) => (
            <SwiperSlide
              key={idx}
              onClick={() => onGenreSelect(item.name)}
              className="flex justify-center cursor-pointer !overflow-hidden"
            >
              <div className="rounded-xl shadow-md hover:shadow-xl transition-all duration-300 w-[220px] h-[140px] flex items-center justify-center bg-white overflow-hidden">

                <Image
                  src={item.img}
                  width={300}
                  height={200}
                  alt={item.name}
                  className={`
                    object-contain w-full h-full transition-all duration-300
                    ${selectedGenre === item.name 
                      ? "animate-bounce-smooth drop-shadow-[0_0_12px_rgba(255,150,0,0.6)]"
                      : "opacity-90"
                    }
                  `}
                />

              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 text-3xl cursor-pointer text-gray-700 hover:text-red-600 z-20">
            ‹
          </div>
          <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 text-3xl cursor-pointer text-gray-700 hover:text-red-600 z-20">
            ›
          </div>
        </Swiper>
      </div>
    </section>
  );
};

/* ===================== PROGRAM LIST ===================== */
const FilteredProgramsList = ({ selectedGenre }) => {
  if (!selectedGenre) return null;

  const filtered = allProgramsData.filter((p) => p.genre === selectedGenre);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center animate-bounce hover:text-red-600 transition-all duration-500">
          Program {selectedGenre}
        </h2>

        <div className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory scrollbar-hide">
          {filtered.map((program, idx) => (
            <div
              key={idx}
              className="w-80 flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg border-t-4 border-red-500 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-red-600 group snap-center"
            >
              <div className="w-full h-48 flex items-center justify-center mb-4">
                <div className="relative w-[180px] h-[180px]">
                  <Image
                    src={program.thumbnail}
                    alt={program.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>



              <h3 className="text-xl font-bold group-hover:text-red-600 transition-colors">{program.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{program.description}</p>

              <Link href="#" className="text-red-600 hover:text-red-800 mt-3 inline-block underline font-semibold transition-all hover:translate-x-1">
                Listen Now →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===================== UPCOMING EVENTS ===================== */
const UpcomingEvents = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const eventsByDate = {};
  upcomingEvents.forEach((event) => {
    const day = parseInt(event.date.split("-")[2]);
    if (!eventsByDate[day]) eventsByDate[day] = [];
    eventsByDate[day].push(event);
  });

  const daysInMonth = 31;

  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 via-red-100 to-pink-100 opacity-30 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-extrabold text-red-600 mb-8 text-center animate-bounce">Upcoming Siaran</h2>

        {/* Calendar */}
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
            const hasEvent = eventsByDate[day];
            const isSelected = selectedDay === day;

            return (
              <button
                key={day}
                onClick={() => hasEvent && setSelectedDay(isSelected ? null : day)}
                className={`
                  h-16 rounded-lg flex flex-col items-center justify-center transition-all
                  bg-gray-50 border hover:bg-gradient-to-br hover:from-yellow-100 hover:to-red-100
                  ${hasEvent ? "border-2 border-yellow-400 hover:scale-110 shadow-lg" : ""}
                  ${isSelected ? "ring-4 ring-red-600 scale-105" : ""}
                `}
              >
                <div className="font-bold text-gray-900">{day}</div>

                {hasEvent && (
                  <div className="flex mt-1 gap-1">
                    {eventsByDate[day].map((e, i) => (
                      <span key={i} className={w-4 h-4 rounded-full ${genreColors[e.genre]}}></span>
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Event detail */}
        {selectedDay && (
          <div className="mt-8 bg-white p-6 rounded-2xl shadow-xl border border-red-200 animate-slide-in-up">
            <h3 className="text-2xl font-bold text-red-600 mb-4">Events on {selectedDay} December</h3>

            {eventsByDate[selectedDay].map((event, idx) => (
              <div
                key={idx}
                className="mb-3 p-4 rounded-xl bg-red-50 border-l-4 border-red-400 shadow-sm flex justify-between items-center hover:bg-red-100 transition-all"
              >
                <div>
                  <div className="font-semibold text-gray-800">{event.title}</div>
                  <div className="text-sm text-gray-600">{event.time}</div>
                </div>
                <span className={w-6 h-6 rounded-full ${genreColors[event.genre]}}></span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

/* ===================== CONTACT ===================== */
const ContactSection = () => (
  <section className="py-24 bg-gradient-to-b from-white to-red-50 relative">
    <div className="absolute inset-0 bg-gradient-to-r from-red-100 via-pink-100 to-purple-100 opacity-50"></div>

    <div className="max-w-6xl mx-auto px-6 relative z-10">

      {/* ==== ANIMASI TITLE ==== */}
      <h2
        className="
          text-5xl font-extrabold text-red-600 mb-12 text-center
          animate-bounce
          animate-fade-in
        "
      >
        Contact Us
      </h2>

      <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-100 hover:shadow-2xl transition-all">
        <h3 className="text-3xl font-bold mb-5 text-red-600 animate-slide-in-up">Hubungi Kami</h3>

        <div className="space-y-4">
          <div className="flex items-center space-x-4 animate-fade-in">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600 text-2xl">📧</span>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Email</p>
              <p className="text-gray-600">yourradiosfavradio@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 animate-fade-in">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
              <span className="text-pink-600 text-2xl">📸</span>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Instagram</p>
              <p className="text-gray-600">@spark31radio</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 animate-fade-in">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-2xl">📍</span>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Location</p>
              <p className="text-gray-600">Institut Teknologi Bandung</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


/* ===================== MAIN ===================== */
export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar sticky={true} />
      <GenreSelectionSection selectedGenre={selectedGenre} onGenreSelect={setSelectedGenre} />
      <FilteredProgramsList selectedGenre={selectedGenre} />
      <UpcomingEvents />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
