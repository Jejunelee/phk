'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Section4() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // First set: Calendar of Events - UPDATED DATES
  const events = [
    { date: "June 28", title: "Once Upon a Time in Malabon – Malabon Food Festival" },
    { date: "July 19", title: "Philippine Ingredients" },
    { date: "August 21–22", title: "Lechon Wars + Traditional Cebuano Fare – Cebu Lechon: Carcar vs Talisay" },
    { date: "September 11–12", title: "Kakanin! Kanin! (Kakanin + Merienda Spread)" },
    { date: "October 24", title: "Recipes from Cookbooks" },
    { date: "November 21 & 28", title: "Paskong Pilipino – Family Recipes" },
    { date: "December 5–6", title: "Almuzar (Almusal + Bazaar)" },
    { date: "January 24", title: "Heirloom Recipes of Metro Manila Cities" },
    { date: "February 21", title: "Pares Pares – Perfect Pairings" }
  ];

  // Second set: Text content
  const textContent = {
    intro: "Join us for our monthly culinary heritage celebrations! Each event features hands-on cooking demonstrations, heritage storytelling, and authentic taste experiences.",
    slots: "Limited slots available for each event. Early registration is recommended to secure your participation in these unique culinary journeys across the Philippines.",
    location: "Brittany Hotel, BGC, Taguig",
    email: "hello@phk.com.ph",
    mobile: "+63 912 345 6789",
    quote: "We believe you can be a better cook or chef if you know your roots"
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
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

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % 2);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + 2) % 2);
  };

  // Touch handlers for mobile swipe with proper TypeScript typing
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-screen font-crimson text-[#F3E7D7] overflow-hidden flex items-center"
    >
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
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Black Gradient Overlay - Improved for mobile */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000 ease-out delay-100"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.75) 25%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.95) 100%)",
          opacity: isVisible ? 1 : 0
        }}
      />

      {/* Content - Responsive padding */}
      <div className="relative z-10 w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Slideable Content */}
          <div className="relative flex flex-col h-full">
            {/* Slide Container */}
            <div 
              className="flex-1 flex flex-col"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative overflow-hidden flex-1 min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
                <div 
                  className="transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  <div className="flex h-full">
                    {/* Slide 1 - Calendar of Events */}
                    <div className="w-full flex-shrink-0 h-full flex flex-col">
                      <div className="flex-1 flex flex-col">
                        <h3 
                          className={`font-semibold italic text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#E7C9A1] mb-4 sm:mb-5 md:mb-6 transition-all duration-700 ease-out delay-200 ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                          }`}
                        >
                          Calendar of Events
                        </h3>

                        <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                          {events.map((event, index) => (
                            <p 
                              key={index}
                              className={`text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed text-white/90 hover:text-white transition-all duration-700 ease-out ${
                                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                              }`}
                              style={{ transitionDelay: `${300 + index * 40}ms` }}
                            >
                              <span className="font-semibold text-[#E7C9A1] block sm:inline">{event.date}</span> 
                              <span className="block sm:inline sm:ml-1">- {event.title}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Slide 2 - Text Content */}
                    <div className="w-full flex-shrink-0 h-full flex flex-col">
                      <div className="flex-1 flex flex-col">
                        <h3 
                          className={`font-semibold italic text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#E7C9A1] mb-4 sm:mb-5 md:mb-6 transition-all duration-700 ease-out delay-200 ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                          }`}
                        >
                          Event Details
                        </h3>

                        <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                          <div>
                            <p className="text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed text-white/90">
                              <span className="font-semibold text-[#E7C9A1] block mb-2">Join us for our monthly culinary heritage celebrations!</span>
                              {textContent.intro.split('Join us for our monthly culinary heritage celebrations! ')[1] || textContent.intro}
                            </p>
                          </div>

                          <p className="text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed text-white/90">
                            <span className="font-semibold block mb-1">Limited slots available</span>
                            Early registration is recommended to secure your participation in these unique culinary journeys across the Philippines.
                          </p>

                          <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-5 rounded-lg border border-[#E7C9A1]/30">
                            <p className="text-[#E7C9A1] font-semibold mb-2 text-base sm:text-lg md:text-[20px]">Location:</p>
                            <p className="text-sm sm:text-base lg:text-lg">{textContent.location}</p>
                            
                            <p className="text-[#E7C9A1] font-semibold mt-4 mb-2 text-base sm:text-lg md:text-[20px]">For Inquiries:</p>
                            <p className="text-sm sm:text-base lg:text-lg break-all">Email: {textContent.email}</p>
                            <p className="text-sm sm:text-base lg:text-lg">Mobile: {textContent.mobile}</p>
                          </div>

                          <p className="italic text-[#E7C9A1] text-base sm:text-lg md:text-[20px] lg:text-[22px] leading-relaxed">
                            "{textContent.quote}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              <button
                onClick={() => setActiveSlide(0)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === 0 ? "w-6 sm:w-8 bg-[#E7C9A1]" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label="Go to calendar of events"
              />
              <button
                onClick={() => setActiveSlide(1)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === 1 ? "w-6 sm:w-8 bg-[#E7C9A1]" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label="Go to event details"
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 sm:gap-6 mt-4 sm:mt-6">
              <button
                onClick={prevSlide}
                className="group cursor-pointer bg-white/10 hover:bg-[#E7C9A1] text-white hover:text-black p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-[#E7C9A1]/30 hover:scale-110"
                aria-label="Previous slide"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-[#E7C9A1] text-sm sm:text-base font-semibold">
                {activeSlide + 1} / 2
              </span>
              <button
                onClick={nextSlide}
                className="group cursor-pointer bg-white/10 hover:bg-[#E7C9A1] text-white hover:text-black p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-[#E7C9A1]/30 hover:scale-110"
                aria-label="Next slide"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Featured Image */}
          <div 
            className={`relative transition-all duration-700 ease-out delay-300 flex justify-center ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full">
              <Image
                src="/Featured/1.png"
                alt="Featured culinary heritage event"
                width={500}
                height={500}
                className="w-full h-auto rounded-xl shadow-2xl"
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
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
        
        @media (min-width: 768px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
        }
      `}</style>
    </section>
  );
}