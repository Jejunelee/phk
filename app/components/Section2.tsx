'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BookOpen, Utensils, Mic, ArrowUpRight } from "lucide-react";

export default function Section2() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.4, // Trigger when 40% of the section is visible
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full">

      {/* Top Image - Scale and fade animation */}
      <div 
        className={`relative w-full h-[300px] sm:h-[400px] md:h-[504px] lg:h-[624px] overflow-hidden transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
      >
        <Image
          src="/PHK/10.png"
          alt="Cooking heritage"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Bottom Content */}
      <div className="w-full bg-[#5A2D1C] text-white py-8 md:py-12 px-5 md:px-7 lg:px-20 xl:px-34 font-crimson overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20">

          {/* Left Title - Slide from left */}
          <div 
            className={`flex items-center justify-center md:justify-start transition-all duration-700 ease-out delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h3 className="font-semibold italic text-4xl sm:text-5xl md:text-[50px] lg:text-[58px] text-[#E7B879] text-center md:text-left">
              What we do
            </h3>
          </div>

          {/* Right Grid - Staggered card animations */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 border-white/20">

            {/* Classes */}
            <div 
              className={`py-8 md:py-12 px-0 sm:pr-6 md:pr-10 border-b sm:border-r border-white/20 transition-all duration-700 ease-out delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <BookOpen size={24} className="md:w-[29px] md:h-[29px]" color="#E7B879" />
                <h4 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] text-[#E7B879] font-semibold">Classes</h4>
              </div>
              <p className="text-base sm:text-lg md:text-[20px] lg:text-[22px] text-white leading-relaxed mt-2 md:mt-3">
                Hands-on masterclasses rooted in regional technique and heritage ingredients
              </p>
            </div>

            {/* Tastings */}
            <div 
              className={`py-8 md:py-12 px-0 sm:pl-6 md:pl-10 border-b border-white/20 transition-all duration-700 ease-out delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <Utensils size={24} className="md:w-[29px] md:h-[29px]" color="#E7B879" />
                <h4 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] text-[#E7B879] font-semibold">Tastings</h4>
              </div>
              <p className="text-base sm:text-lg md:text-[20px] lg:text-[22px] text-white leading-relaxed mt-2 md:mt-3">
                Curated experiences showcasing heirloom flavors and ancestral recipes
              </p>
            </div>

            {/* Talks */}
            <div 
              className={`py-8 md:py-12 px-0 sm:pr-6 md:pr-10 border-b sm:border-b-0 sm:border-r border-white/20 transition-all duration-700 ease-out delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <Mic size={24} className="md:w-[29px] md:h-[29px]" color="#E7B879" />
                <h4 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] text-[#E7B879] font-semibold">Talks</h4>
              </div>
              <p className="text-base sm:text-lg md:text-[20px] lg:text-[22px] text-white leading-relaxed mt-2 md:mt-3">
                Hands-on masterclasses rooted in regional technique and heritage ingredients
              </p>
            </div>

            {/* Promotions */}
            <div 
              className={`py-8 md:py-12 px-0 sm:pl-6 md:pl-10 transition-all duration-700 ease-out delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <ArrowUpRight size={24} className="md:w-[29px] md:h-[29px]" color="#E7B879" />
                <h4 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] text-[#E7B879] font-semibold">Promotions</h4>
              </div>
              <p className="text-base sm:text-lg md:text-[20px] lg:text-[22px] text-white leading-relaxed mt-2 md:mt-3">
                Ticketed lunch and dinner events bringing heritage cuisine to the table
              </p>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}