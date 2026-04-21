"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Section3() {
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
    <section ref={sectionRef} className="w-full bg-[#F5F3EF] py-24 px-6 md:px-16 lg:px-28 font-crimson overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className={`font-semibold text-[34px] md:text-[40px] text-[#996D33] mb-6 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            A Partnership Built on Purpose
          </h2>

          <p 
            className={`text-[18px] leading-[1.8] text-[#2D2926]/90 transition-all duration-700 ease-out delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            PHK is more than a cooking class. It is a living classroom and cultural stage where Filipino food history, regional traditions, and the stories behind every ingredient come alive — led by Chef Reggie Aspiras, CCA Manila chefs, and guest culture bearers from across the archipelago.
          </p>
        </div>

        {/* Card Container */}
        <div 
          className={`bg-[#ECEAE6] rounded-[18px] grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden transition-all duration-800 ease-out delay-200 ${
            isVisible 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-95"
          }`}
        >
          
          {/* Image Section */}
          <div 
            className={`relative w-full h-[420px] md:h-[520px] self-end transition-all duration-700 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <Image
              src="/PHK/3.png"
              alt="Chef Reggie Aspiras"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* Text Section */}
          <div 
            className={`text-[#2D2926] py-8 md:py-14 pr-8 md:pr-14 pb-8 md:pb-14 transition-all duration-700 ease-out delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="mb-4">
              {/* Logo */}
              <div 
                className={`relative w-50 h-20 mb-2 -ml-8 transition-all duration-500 ease-out delay-500 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              >
                <Image
                  src="/PHK/13.png"
                  alt="PHK Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <h3 
                className={`font-semibold text-[28px] mb-4 transition-all duration-500 ease-out delay-550 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Chef Reggie Aspiras
              </h3>
            </div>

            <div className="space-y-5 text-[17px] leading-[1.8]">
              <p 
                className={`transition-all duration-500 ease-out delay-600 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Chef and instructor in the culinary arts — author, Philippine Daily Inquirer columnist, consultant, curator of culinary journeys, and Filipino food heritage advocate — whose work has helped shape the story of Filipino cuisine and the people behind it.
              </p>

              <p 
                className={`transition-all duration-500 ease-out delay-650 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                A Bravo Empowered Woman Awardee for Culinary Arts, she brings together voices from across the Philippines — creating space where flavors, techniques, and traditions converge.
              </p>

              <p 
                className={`transition-all duration-500 ease-out delay-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Where the story of Filipino food is not only preserved, but lived, shared, and carried forward.
              </p>
            </div>

            {/* Arrow */}
            <div className="flex justify-end mt-8">
              <ArrowRight 
                size={22} 
                className={`transition-all duration-500 ease-out delay-750 cursor-pointer hover:translate-x-2 hover:scale-110 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}