"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";

// Swiper imports (versi 10+)
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
    title: "TKP Eps. What… I'm the case?",
    genre: "Horror",
    thumbnail: "/VideoPromosi.png",
    description: "‼Check on Yourself! Explore hal-hal kecil..."
  },
  {
    title: "LDR “Love Dalam Realita”",
    genre: "Romance",
    thumbnail: "/Logo.png",
    description: "Program siaran/podcast yang membahas tarik-ulur dunia percintaan..."
  },
  {
    title: "LOVE 4.0 U",
    genre: "Romance",
    thumbnail: "/LOVE4.0U.png",
    description: "Membahas soal berbagai macam masalah percintaan di era digital..."
  },
  {
    title: "TKP Gen Z Edition",
    genre: "Gen Z",
    thumbnail: "/LOGOFIX.png",
    description: "TKP versi anak muda kekinian..."
  },
  {
    title: "TKP Mystery Edition",
    genre: "Mystery",
    thumbnail: "/VideoPromosi.png",
    description: "Kupas peristiwa penuh misteri..."
  }
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

/* ===================== GENRE SECTION (SWIPER) ===================== */
const GenreSelectionSection = ({ selectedGenre, onGenreSelect }) => {
  return (
    <section className="pb-24 bg-gradient-to-b from-yellow-300 to-white pt-16">
      <div className="text-center mb-8">
        <Image src="/spark.png" width={300} height={200} alt="Spark Logo" className="mx-auto" />
      </div>

      <div className="text-center mb-10">
        <Image src="/mood.png" width={260} height={80} alt="Mood Label" className="mx-auto" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1.4}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2.4 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4 },
          }}
          className="py-8"
        >
          {moodBoxData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                onClick={() => onGenreSelect(item.name)}
                className={`
                  w-72 h-48 bg-white rounded-2xl border border-[#ffb4a6]
                  shadow-[0_6px_15px_rgba(0,0,0,0.15)]
                  flex items-center justify-center cursor-pointer
                  transition transform hover:scale-[1.05]
                  ${selectedGenre === item.name ? "ring-4 ring-orange-500" : ""}
                `}
              >
                <Image src={item.img} width={180} height={120} alt={item.name} className="object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

/* ===================== PROGRAM LIST ===================== */
const FilteredProgramsList = ({ selectedGenre }) => {
  if (!selectedGenre) return <p className="text-center text-xl text-gray-600 py-10 animate-fade-in">Pilih mood/genre dulu ya 😊</p>;

  const filtered = allProgramsData.filter(p => p.genre === selectedGenre);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center animate-slide-up">Program {selectedGenre}</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory scrollbar-hide">
          {filtered.map((program, idx) => (
            <div key={idx} className="w-80 flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg border-t-4 border-red-500 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-red-600 group animate-fade-in-up snap-center" style={{ animationDelay: ${idx * 0.1}s }}>
              <div className="w-full pt-[100%] relative rounded-lg overflow-hidden mb-4 bg-gray-200 group-hover:bg-gradient-to-br group-hover:from-red-100 group-hover:to-pink-100 transition-all duration-300">
                <Image src={program.thumbnail} alt={program.title} fill style={{ objectFit: "contain" }} className="transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-red-600 transition-colors duration-300">{program.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{program.description}</p>
              <Link href="#" className="text-red-600 hover:text-red-800 mt-3 inline-block underline font-semibold transition-all duration-300 hover:translate-x-1">
                Listen Now →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===================== CONTACT SECTION ===================== */
const ContactSection = () => (
  <section className="py-24 bg-gradient-to-b from-white to-red-50 relative">
    <div className="absolute inset-0 bg-gradient-to-r from-red-100 via-pink-100 to-purple-100 opacity-50 animate-pulse"></div>
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <h2 className="text-5xl font-extrabold text-red-600 mb-12 text-center drop-shadow-lg animate-bounce">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-in-left">
          <h3 className="text-3xl font-bold mb-5 text-red-600">Hubungi Kami</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">Punya saran, kritik membangun, atau ingin bekerja sama dengan tim siaran kami? Isi formulir dan kami akan membalas secepatnya!</p>
          <div className="space-y-3">
            <p className="text-gray-800"><b>Email:</b> spark.radio@itb.ac.id</p>
            <p className="text-gray-800"><b>Instagram:</b> @spark.radioitb</p>
            <p className="text-gray-800"><b>Location:</b> Institut Teknologi Bandung</p>
          </div>
        </div>
        <form className="bg-white p-8 rounded-2xl shadow-xl border border-red-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-in-right">
          <div className="mb-5">
            <label className="font-semibold text-gray-700">Nama</label>
            <input type="text" className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300 focus:scale-105 text-black" placeholder="Masukkan nama Anda" required />
          </div>
          <div className="mb-5">
            <label className="font-semibold text-gray-700">Email</label>
            <input type="email" className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300 focus:scale-105 text-black" placeholder="Masukkan email aktif" required />
          </div>
          <div className="mb-5">
            <label className="font-semibold text-gray-700">Pesan</label>
            <textarea rows={5} className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300 focus:scale-105 text-black" placeholder="Tuliskan pesan Anda..." required />
          </div>
          <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-xl text-lg font-bold hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 animate-pulse">
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  </section>
);

/* ===================== UPCOMING EVENTS ===================== */
const UpcomingEvents = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const eventsByDate = {};
  upcomingEvents.forEach(event => {
    const day = parseInt(event.date.split("-")[2]);
    if (!eventsByDate[day]) eventsByDate[day] = [];
    eventsByDate[day].push(event);
  });

  const daysInMonth = 31;
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 via-red-100 to-pink-100 opacity-30 animate-pulse"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-extrabold text-red-600 mb-8 text-center drop-shadow-lg animate-fade-in">Upcoming Siaran</h2>
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map(day => {
            const hasEvent = eventsByDate[day];
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                disabled={!day}
                onClick={() => hasEvent && setSelectedDay(isSelected ? null : day)}
                className={`
                  h-20 rounded-lg flex flex-col items-center justify-center
                  transition-all duration-300
                  ${!day ? "bg-transparent" : "bg-gray-50 border hover:bg-gradient-to-br hover:from-yellow-100 hover:to-red-100"}
                  ${hasEvent ? "border-2 border-yellow-400 hover:scale-110 shadow-lg hover:shadow-yellow-300/50 cursor-pointer animate-pulse" : ""}
                  ${isSelected ? "ring-4 ring-red-600 scale-105 shadow-red-500/50 animate-bounce" : ""}
                `}
              >
                {day && (
                  <>
                    <div className="font-bold text-gray-900">{day}</div>
                    {hasEvent && (
                      <div className="flex flex-wrap justify-center mt-1 gap-1">
                        {eventsByDate[day].map((e, i) => (
                          <span key={i} className={w-4 h-4 rounded-full ${genreColors[e.genre]} animate-ping} title={e.title}></span>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </button>
            );
          })}
        </div>

        {selectedDay && (
          <div className="mt-8 bg-white p-6 rounded-2xl shadow-xl border border-red-200 animate-slide-in-up">
            <h3 className="text-2xl font-bold text-red-600 mb-4">Events on {selectedDay} December</h3>
            {eventsByDate[selectedDay].map((event, idx) => (
              <div key={idx} className="mb-3 p-4 rounded-xl bg-red-50 border-l-4 border-red-400 shadow-sm flex justify-between items-center hover:bg-red-100 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: ${idx * 0.1}s }}>
                <div>
                  <div className="font-semibold text-gray-800">{event.title}</div>
                  <div className="text-sm text-gray-600">{event.time}</div>
                </div>
                <span className={w-6 h-6 rounded-full ${genreColors[event.genre]} animate-pulse}></span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

/* ===================== MAIN PAGE ===================== */
export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <GenreSelectionSection selectedGenre={selectedGenre} onGenreSelect={setSelectedGenre} />
      <FilteredProgramsList selectedGenre={selectedGenre} />
      <UpcomingEvents />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
