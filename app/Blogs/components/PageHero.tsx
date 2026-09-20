"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function PageHero({ title }: { title: string }) {
  const sectionRef = useRef<HTMLElement>(null);
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
    <section
      ref={sectionRef}
      className="relative w-full h-[520px] md:h-[620px] overflow-hidden"
    >
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-out ${
          isVisible ? "scale-100" : "scale-110"
        }`}
      >
        <Image
          src="/PHK/2.png"
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div
        className={`absolute inset-0 bg-black/45 transition-opacity duration-1000 ease-out delay-100 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-end md:justify-center text-center px-4 md:px-6 pb-16 md:pb-0">
        <div className="hidden md:block md:mt-20 lg:mt-70"></div>

        <div
          className={`transition-all duration-700 ease-out delay-200 w-full max-w-[200px] md:max-w-none mb-4 md:mb-0 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="relative w-full h-auto">
            <Image
              src="/PHK/6.png"
              alt="Sun Logo"
              width={300}
              height={300}
              className="w-full h-auto"
              style={{ maxWidth: "300px", margin: "0 auto" }}
            />
          </div>
        </div>

        <h1
          className={`font-crimson text-white text-5xl sm:text-5xl md:text-6xl lg:text-8xl tracking-wide transition-all duration-700 ease-out delay-400 max-w-[90%] md:max-w-full ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
