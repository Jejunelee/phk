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
    <section ref={sectionRef} className="w-full bg-[#F5F3EF] py-12 md:py-24 px-5 md:px-6 lg:px-16 xl:px-28 font-crimson overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 
            className={`font-semibold text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] text-[#996D33] mb-4 md:mb-6 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Before the Recipes Fade
          </h2>

          <p 
            className={`text-sm sm:text-base md:text-[18px] leading-relaxed md:leading-[1.8] text-[#2D2926]/90 mb-4 md:mb-6 transition-all duration-700 ease-out delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Filipino cuisine was never meant to live on paper alone. It was passed hand to hand, cooked without measurements, and remembered through practice, not documentation.
          </p>

          <p 
            className={`text-sm sm:text-base md:text-[18px] leading-relaxed md:leading-[1.8] text-[#2D2926]/90 mb-4 md:mb-6 transition-all duration-700 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            But today, fewer people are carrying these traditions forward. Regional dishes are being simplified, techniques are being forgotten, and stories once told around the table are slowly disappearing from our kitchens.
          </p>

          <p 
            className={`text-sm sm:text-base md:text-[18px] leading-relaxed md:leading-[1.8] text-[#2D2926]/90 mb-4 md:mb-6 transition-all duration-700 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            PHK creates a space where these traditions are not just revisited, but experienced. Through guided sessions with Chef Reggie Aspiras, CCA Manila chefs, and regional practitioners, participants step into the kitchens, ingredients, and narratives that shaped Filipino food as we know it.
          </p>

          <p 
            className={`text-sm sm:text-base md:text-[18px] leading-relaxed md:leading-[1.8] text-[#2D2926]/90 transition-all duration-700 ease-out delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            From the bold, rustic flavors of Ilocos to the layered cuisines of the Visayas and the deep-rooted food traditions of Mindanao—each dish becomes more than something you taste.
          </p>

          <p 
            className={`text-sm sm:text-base md:text-[18px] leading-relaxed md:leading-[1.8] text-[#2D2926]/90 mt-4 md:mt-6 transition-all duration-700 ease-out delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            It becomes something you understand.
          </p>
        </div>

      </div>

    </section>
  );
}