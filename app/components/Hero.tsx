"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth mount
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[520px] md:h-[760px] overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/PHK/1.png"
        alt="Philippine Heritage Kitchen"
        fill
        priority
        className="object-cover"
      />

      {/* Black gradient from bottom to middle */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent to-100%" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end md:justify-center text-center px-4 md:px-6 pb-16 md:pb-0">
        
        {/* Spacer - removed for mobile since we use justify-end, kept for desktop */}
        <div className="hidden md:block md:mt-20 lg:mt-70"></div>

        {/* Sun Logo - responsive sizing with proportional scaling */}
        <div
          className="transition-all duration-700 ease-out w-full max-w-[200px] md:max-w-none mb-4 md:mb-0"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <div className="relative w-full h-auto">
            <Image
              src="/PHK/6.png"
              alt="Sun Logo"
              width={300}
              height={300}
              className="w-full h-auto"
              style={{ maxWidth: '300px', margin: '0 auto' }}
            />
          </div>
        </div>

        {/* Title - responsive typography with proportional scaling */}
        <h1
          className="font-crimson text-white text-4xl sm:text-4xl md:text-6xl lg:text-8xl tracking-wide transition-all duration-700 ease-out delay-100 max-w-[90%] md:max-w-full"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Philippine Heritage Kitchen
        </h1>

      </div>
    </section>
  );
}