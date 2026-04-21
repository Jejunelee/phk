'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Section4() {
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
        threshold: 0.3, // Trigger when 30% of the section is visible
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
    <section ref={sectionRef} className="relative w-full h-[560px] sm:h-[620px] md:h-[720px] font-crimson text-[#F3E7D7] overflow-hidden">

      {/* Background Image with scale animation */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ease-out ${
          isVisible ? "scale-100" : "scale-110"
        }`}
      >
        <Image
          src="/PHK/9.png"
          alt="Calendar of Events"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Black Gradient Overlay - Bottom to Middle */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000 ease-out delay-100"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 100%)",
          opacity: isVisible ? 1 : 0
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-10 md:pb-12 lg:pb-16 px-5 md:px-6 lg:px-16 xl:px-28">

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

          {/* Left Column */}
          <div>
            <h3 
              className={`font-semibold italic text-3xl sm:text-4xl md:text-[40px] lg:text-[48px] text-[#E7C9A1] mb-5 md:mb-8 transition-all duration-700 ease-out delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              Calendar of Events
            </h3>

            <div className="space-y-2 md:space-y-3 text-lg sm:text-xl md:text-[24px] lg:text-[28px] leading-tight text-white">
              <p 
                className={`transition-all duration-700 ease-out delay-300 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
              >
                May 29 - The Many Ways of Sisig
              </p>
              <p 
                className={`transition-all duration-700 ease-out delay-400 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
              >
                June 19 - 20 Cebu
              </p>
              <p 
                className={`transition-all duration-700 ease-out delay-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
              >
                August 21 - 22 Davao Zamboanga
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="text-white text-base sm:text-lg md:text-[20px] lg:text-[22px] leading-relaxed md:leading-[1.2] space-y-3 md:space-y-5 mt-6 md:mt-8 lg:mt-12">
            <p 
              className={`transition-all duration-700 ease-out delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              Philippine Heritage Kitchen brings the regions of the Philippines to
              Brittany Hotel, BGC — through cooking lessons, storytelling, and
              experiences led by those who know its flavors best.
            </p>

            <p 
              className={`transition-all duration-700 ease-out delay-450 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              We want to spotlight advocates of our culinary heritage.
            </p>

            <p 
              className={`italic opacity-90 transition-all duration-700 ease-out delay-600 ${
                isVisible ? "opacity-90 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              We believe you can be a better cook or chef if you know your roots
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}