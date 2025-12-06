"use client";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import ButtonPrimary from "@/app/components/ButtonPrimary";
import { useState, useRef } from "react";
import FooterSection from "@/app/components/FooterSection";



export default function AboutUs() {
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-60 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Implementasikan page About Us disini
          </p>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}
