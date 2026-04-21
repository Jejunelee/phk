"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Header() {
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
        threshold: 0.3,
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
    <section ref={sectionRef} className="relative w-full h-[520px] md:h-[620px] overflow-hidden">
      
      {/* Background Image with zoom effect */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ease-out ${
          isVisible ? "scale-100" : "scale-110"
        }`}
      >
        <Image
          src="/PHK/2.png"
          alt="Philippine Heritage Kitchen"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark overlay for readability - fade in */}
      <div 
        className={`absolute inset-0 bg-black/45 transition-opacity duration-1000 ease-out delay-100 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`} 
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        
        {/* Spacer to push content down */}
        <div className="mt-20 md:mt-70"></div>

        {/* Sun Logo with scale and fade */}
        <div 
          className={`transition-all duration-700 ease-out delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <Image
            src="/PHK/6.png"
            alt="Sun Logo"
            width={300}
            height={300}
            className="opacity-100"
          />
        </div>

        {/* Title with fade up */}
        <h1 
          className={`font-crimson text-white text-6xl md:text-8xl tracking-wide transition-all duration-700 ease-out delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          About Us
        </h1>

      </div>

    </section>
  );
}