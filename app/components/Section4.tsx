'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Section4() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const events = [
    { date: "May 29", title: "Sisig Festival from Salad to Sizzling" },
    { date: "Jun 20", title: "Lechon Wars + Traditional Cebuano Fare — Cebu Lechon: Carcar vs Talisay" },
    { date: "Jul 17", title: "Philippine Ingredients 1 (pocket event)" },
    { date: "Aug 22", title: "Wow Mindanao (Davao Zamboanga)" },
    { date: "Sep 11–12", title: "Kakanin! Kanin! (Kakanin + Merienda Spread)" },
    { date: "Oct 24", title: "Recipes from Cookbooks" },
    { date: "Nov 21/28", title: "Paskong Pilipino - Family Recipes" },
    { date: "Dec 5–6", title: "Almuzar (Almusal + Bazaar)" },
    { date: "Jan 24", title: "Heirloom Recipes of Metro Manila Cities" },
    { date: "Feb 21", title: "Pares Pares - Perfect Pairings" }
  ];

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
    <section ref={sectionRef} className="relative w-full min-h-screen font-crimson text-[#F3E7D7] overflow-hidden flex items-center">

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

      {/* Black Gradient Overlay - Full coverage with fade at top */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000 ease-out delay-100"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.9) 100%)",
          opacity: isVisible ? 1 : 0
        }}
      />

      {/* Content - Centered vertically with equal padding */}
      <div className="relative z-10 w-full py-12 md:py-16 lg:py-20 px-5 md:px-6 lg:px-16 xl:px-28">

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">

          {/* Left Column - Events List */}
          <div>
            <h3 
              className={`font-semibold italic text-3xl sm:text-4xl md:text-[40px] lg:text-[48px] text-[#E7C9A1] mb-5 md:mb-6 transition-all duration-700 ease-out delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              Calendar of Events
            </h3>

            <div className="space-y-2 md:space-y-2.5 max-h-[420px] md:max-h-[480px] overflow-y-auto pr-2 custom-scrollbar">
              {events.map((event, index) => (
                <p 
                  key={index}
                  className={`text-base sm:text-lg md:text-[20px] lg:text-[22px] leading-tight text-white/90 hover:text-white transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                  }`}
                  style={{ transitionDelay: `${300 + index * 40}ms` }}
                >
                  <span className="font-semibold text-[#E7C9A1]">{event.date}</span> - {event.title}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column - New Content */}
          <div className="text-white text-base sm:text-lg md:text-[20px] lg:text-[22px] leading-relaxed md:leading-[1.3] space-y-4 md:space-y-6">
            <p 
              className={`transition-all duration-700 ease-out delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <span className="font-semibold text-[#E7C9A1]">Join us for our monthly culinary heritage celebrations!</span> Each event features hands-on cooking demonstrations, heritage storytelling, and authentic taste experiences.
            </p>

            <p 
              className={`transition-all duration-700 ease-out delay-450 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <span className="font-semibold">Limited slots available</span> for each event. Early registration is recommended to secure your participation in these unique culinary journeys across the Philippines.
            </p>

            <div 
              className={`bg-white/10 backdrop-blur-sm p-4 md:p-5 rounded-lg border border-[#E7C9A1]/30 transition-all duration-700 ease-out delay-550 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <p className="text-[#E7C9A1] font-semibold mb-2">Location:</p>
              <p className="text-sm md:text-base">Brittany Hotel, BGC, Taguig</p>
              <p className="text-[#E7C9A1] font-semibold mt-3 mb-2">For Inquiries:</p>
              <p className="text-sm md:text-base">Email: hello@phk.com.ph</p>
              <p className="text-sm md:text-base">Mobile: +63 912 345 6789</p>
            </div>

            <p 
              className={`italic text-[#E7C9A1] transition-all duration-700 ease-out delay-650 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              "We believe you can be a better cook or chef if you know your roots"
            </p>
          </div>

        </div>

      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(231, 201, 161, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(231, 201, 161, 0.8);
        }
      `}</style>

    </section>
  );
}