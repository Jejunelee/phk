"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Quote() {
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
    <section ref={sectionRef} className="relative w-full h-[380px] sm:h-[420px] md:h-[520px] flex items-center justify-center text-center font-crimson text-white overflow-hidden">

      {/* Background Image with zoom and parallax effect */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ease-out ${
          isVisible ? "scale-100" : "scale-110"
        }`}
      >
        <Image
          src="/PHK/5.png"
          alt="Culinary heritage quote background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark gradient overlay with fade in */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/75 transition-opacity duration-1000 ease-out delay-100 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`} 
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-5 md:px-6">
        
        <div className="text-2xl sm:text-3xl md:text-[40px] lg:text-[52px] leading-[1.2] md:leading-[1]">
          
          {/* Opening Quote Mark */}
          <div 
            className={`text-7xl sm:text-8xl md:text-[120px] opacity-80 -mb-4 md:-mb-8 lg:-mb-12 transition-all duration-700 ease-out delay-200 ${
              isVisible 
                ? "opacity-80 translate-y-0 scale-100" 
                : "opacity-0 translate-y-8 scale-75"
            }`}
          >
            “
          </div>

          {/* Quote Text */}
          <p 
            className={`transition-all duration-700 ease-out delay-300 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-12"
            }`}
          >
            Preserving our culinary heritage isn't just about saving recipes.
            It's about keeping identity, context, and culture alive.
          </p>

          {/* Closing Quote Mark */}
          <div 
            className={`text-7xl sm:text-8xl md:text-[120px] mt-4 md:mt-8 opacity-80 transition-all duration-700 ease-out delay-400 ${
              isVisible 
                ? "opacity-80 translate-y-0 scale-100" 
                : "opacity-0 translate-y-8 scale-75"
            }`}
          >
            ”
          </div>

        </div>

      </div>

    </section>
  );
}