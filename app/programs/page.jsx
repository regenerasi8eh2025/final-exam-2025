"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import "swiper/css";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";


export default function Home() {
  return (
      <div className="min-h-screen bg-white">
        {/* Navbar Component */}
        <Navbar />
  
        {/* Hero Section */}
        <section className="py-60 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Implementasikan page Programs disini
            </p>
          </div>
        </section>
        <FooterSection />
      </div>
    );
}
