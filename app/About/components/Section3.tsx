'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Section3() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 0,
      imageSrc: "/PHK/11.png",
      logoSrc: "/PHK/13.png",
      name: "Chef Reggie Aspiras",
      descriptions: [
        "Chef and instructor in the culinary arts — author, Philippine Daily Inquirer columnist, consultant, curator of culinary journeys, and Filipino food heritage advocate — whose work has helped shape the story of Filipino cuisine and the people behind it.",
        "A Bravo Empowered Woman Awardee for Culinary Arts, she brings together voices from across the Philippines — creating space where flavors, techniques, and traditions converge.",
        "Where the story of Filipino food is not only preserved, but lived, shared, and carried forward."
      ]
    },
    {
      id: 1,
      imageSrc: "/PHK/14.png",
      logoSrc: "/PHK/15.png",
      name: "Center for Culinary Arts, Manila",
      descriptions: [
        "The Center for Culinary Arts, Manila is the Philippines' foremost culinary institution, training generations of Filipino chefs and food professionals who carry our culinary heritage forward.",
        "CCA Manila is PHK's home. Its kitchens, classrooms, and community provide the ideal space to bring together the regions of the Philippines.",
        "A shared mission: to spotlight Filipino food culture, from the inside out."
      ]
    }
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

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section ref={sectionRef} className="w-full bg-[#F5F3EF] py-12 md:py-24 px-4 md:px-6 lg:px-16 xl:px-28 font-crimson overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title Section - Fade up with staggered children */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 
            className={`font-semibold text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] text-[#996D33] mb-4 md:mb-6 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            A Partnership Built on Purpose
          </h2>

          <p 
            className={`text-sm sm:text-base md:text-[18px] leading-relaxed md:leading-[1.8] text-[#2D2926]/90 transition-all duration-700 ease-out delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            PHK is more than a cooking class. It is a living classroom and cultural stage where Filipino food history, regional traditions, and the stories behind every ingredient come alive — led by Chef Reggie Aspiras, CCA Manila chefs, and guest culture bearers from across the archipelago.
          </p>
        </div>

        {/* Card Container - Scale and fade */}
        <div 
          className={`bg-[#ECEAE6] rounded-[18px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 overflow-hidden transition-all duration-800 ease-out delay-200 ${
            isVisible 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-95"
          }`}
        >
          {/* Image Section - Slide from left with smooth transition */}
          <div 
            className="relative w-full h-[300px] sm:h-[380px] md:h-[420px] lg:h-[520px] self-end overflow-hidden order-1 md:order-none"
          >
            <div
              className={`relative w-full h-full transition-all duration-700 ease-in-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
              style={{
                transform: isTransitioning ? 'scale(0.98)' : 'scale(1)',
                opacity: isTransitioning ? 0.7 : 1
              }}
            >
              <Image
                src={slides[currentSlide].imageSrc}
                alt={slides[currentSlide].name}
                fill
                className="object-contain object-bottom transition-all duration-700"
                priority
              />
            </div>
          </div>

          {/* Text Section - Slide from right with staggered inner content */}
          <div 
            className={`text-[#2D2926] py-6 md:py-8 lg:py-14 px-5 md:px-6 lg:pr-14 pb-6 md:pb-8 lg:pb-14 transition-all duration-700 ease-out delay-400 order-2 md:order-none ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="mb-3 md:mb-4">
              {/* Logo with scale effect */}
              <div 
                className={`relative w-36 sm:w-40 md:w-50 h-14 sm:h-16 md:h-20 mb-2 -ml-6 md:-ml-8 transition-all duration-500 ease-out delay-500 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              >
                <Image
                  src={slides[currentSlide].logoSrc}
                  alt={`${slides[currentSlide].name} Logo`}
                  fill
                  className="object-contain transition-all duration-500"
                />
              </div>

              <h3 
                className={`font-semibold text-xl sm:text-2xl md:text-[28px] mb-3 md:mb-4 transition-all duration-500 ease-out delay-550 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {slides[currentSlide].name}
              </h3>
            </div>

            <div className="space-y-3 md:space-y-5 text-sm sm:text-base md:text-[17px] leading-relaxed md:leading-[1.8]">
              {slides[currentSlide].descriptions.map((desc, idx) => (
                <p 
                  key={idx}
                  className={`transition-all duration-500 ease-out`}
                  style={{
                    transitionDelay: isVisible ? `${600 + idx * 50}ms` : '0ms',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(4px)'
                  }}
                >
                  {desc}
                </p>
              ))}
            </div>

            {/* Navigation Arrows inside the gray card */}
            <div className="flex justify-between items-center mt-6 md:mt-8">
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className={`cursor-pointer hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-[#2D2926]/10 ${
                  isVisible ? "opacity-100" : "opacity-0"
                } ${isTransitioning ? "pointer-events-none" : ""}`}
                aria-label="Previous slide"
              >
                <ArrowLeft size={20} className="md:w-[22px] md:h-[22px] text-[#2D2926]" />
              </button>
              
              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className={`cursor-pointer hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-[#2D2926]/10 ${
                  isVisible ? "opacity-100" : "opacity-0"
                } ${isTransitioning ? "pointer-events-none" : ""}`}
                aria-label="Next slide"
              >
                <ArrowRight size={20} className="md:w-[22px] md:h-[22px] text-[#2D2926]" />
              </button>
            </div>
          </div>
        </div>

        {/* Slideshow Navigation Dots */}
        <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? "w-6 md:w-8 h-1.5 md:h-2 bg-[#2D2926]" 
                  : "w-1.5 md:w-2 h-1.5 md:h-2 bg-[#2D2926]/30 hover:bg-[#2D2926]/50"
              } ${isTransitioning ? "pointer-events-none" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}