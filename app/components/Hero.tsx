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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        
        {/* Spacer to push content down */}
        <div className="mt-20 md:mt-70"></div>

        {/* Sun Logo - clean fade */}
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <Image
            src="/PHK/6.png"
            alt="Sun Logo"
            width={300}
            height={300}
          />
        </div>

        {/* Title - clean fade */}
        <h1
          className="font-crimson text-white text-6xl md:text-8xl tracking-wide transition-all duration-700 ease-out delay-100"
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