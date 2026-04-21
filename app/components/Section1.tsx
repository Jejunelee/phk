'use client';

import { useEffect, useRef, useState } from 'react';

export default function Section1() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when 50% of the section is visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once animated
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
        rootMargin: '0px',
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
    <section 
      ref={sectionRef}
      className="w-full bg-[#F5F3EF] py-12 md:py-24 px-4 md:px-6 lg:px-16 xl:px-28"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Title with fade-up animation - responsive typography */}
        <h2 
          className={`font-crimson text-2xl sm:text-3xl md:text-[38px] text-[#2D2926] mb-8 md:mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Our Culinary Heritage is Disappearing
        </h2>

        {/* Two Column Layout with staggered animation - responsive gap and text size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 font-crimson text-base sm:text-lg md:text-[18px] leading-[1.25] text-[#2D2926]">
          
          {/* Left Column */}
          <div 
            className={`space-y-4 md:space-y-6 transition-all duration-700 ease-out delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <p>
              Across the Philippines, the recipes that define our regions live in
              the hands of aging lolas, in kitchens that don't have cookbooks,
              and in traditions that skip a generation every decade.
            </p>

            <p>
              As the world discovers Filipino food, we risk a paradox: global
              popularity without authentic preservation.
            </p>

            <p>
              The flavors of Ilocos, the traditions of the Visayas, the
              indigenous techniques of Mindanao.
            </p>

            <p>
              These are not just recipes. They are the edible memory of our
              nation.
            </p>
          </div>

          {/* Right Column */}
          <div 
            className={`space-y-4 md:space-y-6 transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <p>
              Through cooking lessons, storytelling, and immersive experiences,
              it explores the archipelago — one region at a time, led by those
              who know its flavors best.
            </p>

            <p>
              PHK shines light on people — advocates of our culinary heritage
              from North to South — alongside ingredients and time-honored
              techniques that define our food.
            </p>

            <p>
              A space for talks, discussions, seminars, and festivals, it
              gathers voices and communities that keep these traditions alive.
              Bringing them closer — so more may experience, understand, and
              celebrate.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}