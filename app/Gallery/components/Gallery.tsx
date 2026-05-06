"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

// Gallery data structure with multiple images per event
const galleryEvents = [
  {
    id: 1,
    title: "Sisig Festival",
    date: "May 29, 2024",
    category: "Classes",
    description: "From salad to sizzling - exploring the many ways of Sisig",
    images: [
    ]
  },
  {
    id: 2,
    title: "PHK Launch & The Flavors of the North",
    date: "April 24 & 25, 2026",
    category: "Event",
    description: "A culinary journey through Ilocos region - from bagnet to pinakbet, celebrating the rich heritage of Northern Filipino cuisine",
    images: Array.from({ length: 48 }, (_, i) => ({
      id: i + 1,
      src: `/FlavorsoftheNorth/North (${i + 1}).jpg`,
      alt: `Flavors of the North - Image ${i + 1}`
    }))
  },
  {
    id: 3,
    title: "Lechon Wars",
    date: "June 20, 2024",
    category: "Tastings",
    description: "Carcar vs Talisay - Cebu Lechon showdown",
    images: [
    ]
  },
  {
    id: 4,
    title: "Philippine Ingredients",
    date: "July 17, 2024",
    category: "Classes",
    description: "Pocket event highlighting local ingredients",
    images: [
    ]
  },
  {
    id: 5,
    title: "Wow Mindanao",
    date: "August 22, 2024",
    category: "Talks",
    description: "Davao and Zamboanga culinary heritage",
    images: [
    ]
  },
  {
    id: 6,
    title: "Kakanin! Kanin!",
    date: "September 11-12, 2024",
    category: "Tastings",
    description: "Kakanin and Merienda spread celebration",
    images: []
  },
  {
    id: 7,
    title: "Recipes from Cookbooks",
    date: "October 24, 2024",
    category: "Talks",
    description: "Exploring treasured recipes from Filipino cookbooks",
    images: []
  },
  {
    id: 8,
    title: "Paskong Pilipino",
    date: "November 21-28, 2024",
    category: "Classes",
    description: "Family recipes for the Filipino Christmas",
    images: []
  },
  {
    id: 9,
    title: "Almuzar",
    date: "December 5-6, 2024",
    category: "Promotions",
    description: "Almusal + Bazaar - Breakfast and market experience",
    images: []
  },
  {
    id: 10,
    title: "Heirloom Recipes",
    date: "January 24, 2025",
    category: "Classes",
    description: "Metro Manila cities' treasured family recipes",
    images: []
  },
  {
    id: 11,
    title: "Pares Pares",
    date: "February 21, 2025",
    category: "Promotions",
    description: "Perfect pairings - Wine and food matching",
    images: []
  }
];

export default function Gallery() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<typeof galleryEvents[0] | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

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

  // Show only events with images
  const eventsWithImages = galleryEvents.filter(event => event.images.length > 0);

  // Open collage view
  const openCollage = (event: typeof galleryEvents[0]) => {
    if (event.images.length === 0) return;
    setSelectedEvent(event);
    setSelectedImage(null);
    document.body.style.overflow = 'hidden';
  };

  // Open single image view from collage
  const openImageView = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section ref={sectionRef} className="relative w-full h-[520px] md:h-[620px] overflow-hidden">
        
        {/* Background Image with zoom effect */}
        <div 
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            isVisible ? "scale-100" : "scale-110"
          }`}
        >
          <Image
            src="/PHK/2.png"
            alt="Gallery"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Dark overlay for readability - fade in */}
        <div 
          className={`absolute inset-0 bg-black/45 transition-opacity duration-1000 ease-out delay-100 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`} 
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end md:justify-center text-center px-4 md:px-6 pb-16 md:pb-0">
          
          {/* Spacer */}
          <div className="hidden md:block md:mt-20 lg:mt-70"></div>

          {/* Sun Logo with scale and fade */}
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
                style={{ maxWidth: '300px', margin: '0 auto' }}
              />
            </div>
          </div>

          {/* Title with fade up */}
          <h1 
            className={`font-crimson text-white text-5xl sm:text-5xl md:text-6xl lg:text-8xl tracking-wide transition-all duration-700 ease-out delay-400 max-w-[90%] md:max-w-full ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Gallery
          </h1>

        </div>

      </section>

      {/* Gallery List - Image Left, Text Right Layout with Equal Heights */}
      <div className="w-full bg-[#F5F3EF] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-16 xl:px-28">
          {eventsWithImages.length === 0 ? (
            <div className="text-center py-16 md:py-24">
              <p className="text-[#2D2926]/60 text-lg">No events with photos found.</p>
            </div>
          ) : (
            <div className="space-y-8 md:space-y-12">
              {eventsWithImages.map((event, index) => (
                <div 
                  key={event.id}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-8 lg:gap-12 items-stretch bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300`}
                >
                  {/* Image Section - Stretches to full height of text container */}
                  <div 
                    className="w-full md:w-1/2 relative cursor-pointer group overflow-hidden"
                    onClick={() => openCollage(event)}
                  >
                    <div className="relative w-full h-full min-h-[300px] md:min-h-full">
                      <Image
                        src={event.images[0].src}
                        alt={event.images[0].alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Hover Overlay - View Collage */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-95">
                          <div className="bg-white/90 backdrop-blur-sm text-[#2D2926] px-6 py-3 rounded-full text-base md:text-lg font-semibold flex items-center gap-2 shadow-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            View Collage ({event.images.length} Photos)
                          </div>
                        </div>
                      </div>

                      {/* Multiple images indicator badge */}
                      {event.images.length > 1 && (
                        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                          {event.images.length} photos
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Text Section - Determines the height of the container */}
                  <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 bg-[#996D33]/10 text-[#996D33] text-xs md:text-sm font-semibold rounded-full mb-3 w-fit">
                      {event.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2D2926] mb-2">
                      {event.title}
                    </h3>
                    <p className="text-[#996D33] text-sm md:text-base font-medium mb-4">
                      {event.date}
                    </p>
                    <p className="text-[#2D2926]/70 text-base md:text-lg leading-relaxed">
                      {event.description}
                    </p>
                    
                    {/* View Collage Button */}
                    <button
                      onClick={() => openCollage(event)}
                      className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#996D33] text-[#996D33] hover:bg-[#996D33] hover:text-white rounded-full transition-all duration-300 font-medium text-sm md:text-base group w-fit"
                    >
                      <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      View Photo Collage ({event.images.length})
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#ECEAE6] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-16 xl:px-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <p className="text-[#996D33] text-3xl md:text-4xl font-semibold">
                {galleryEvents.filter(e => e.images.length > 0).length}
              </p>
              <p className="text-[#2D2926]/70 text-sm md:text-base mt-1">Events</p>
            </div>
            <div>
              <p className="text-[#996D33] text-3xl md:text-4xl font-semibold">
                {galleryEvents.reduce((total, event) => total + event.images.length, 0)}+
              </p>
              <p className="text-[#2D2926]/70 text-sm md:text-base mt-1">Moments Captured</p>
            </div>
            <div>
              <p className="text-[#996D33] text-3xl md:text-4xl font-semibold">5+</p>
              <p className="text-[#2D2926]/70 text-sm md:text-base mt-1">Chefs Featured</p>
            </div>
            <div>
              <p className="text-[#996D33] text-3xl md:text-4xl font-semibold">8</p>
              <p className="text-[#2D2926]/70 text-sm md:text-base mt-1">Regions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Collage Modal */}
      {selectedEvent && !selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 overflow-y-auto"
          onClick={closeModal}
        >
          <div className="min-h-screen py-8 md:py-12 px-4 md:px-8">
            {/* Close button */}
            <button 
              className="fixed top-4 right-4 md:top-6 md:right-6 text-white hover:text-[#E7B879] transition-colors z-20 bg-black/50 rounded-full p-2 backdrop-blur-sm"
              onClick={closeModal}
            >
              <X size={28} />
            </button>

            {/* Event Info Header */}
            <div className="max-w-7xl mx-auto mb-8 md:mb-12 text-center">
              <span className="inline-block px-3 py-1 bg-[#996D33]/20 text-[#E7B879] text-xs md:text-sm font-semibold rounded-full mb-3">
                {selectedEvent.category}
              </span>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                {selectedEvent.title}
              </h2>
              <p className="text-[#E7B879] text-sm md:text-base mb-3">
                {selectedEvent.date}
              </p>
              <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
                {selectedEvent.description}
              </p>
              <p className="text-white/50 text-sm mt-4">
                {selectedEvent.images.length} photos in this collection
              </p>
            </div>

            {/* Masonry Collage Grid */}
            <div 
              className="max-w-7xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
                {selectedEvent.images.map((image) => (
                  <div
                    key={image.id}
                    className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm"
                    onClick={() => openImageView(image)}
                  >
                    <div className="relative w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={500}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ height: 'auto' }}
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* Optional caption */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-xs truncate">{image.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Single Image View Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/98 flex items-center justify-center"
          onClick={closeModal}
        >
          <button 
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-[#E7B879] transition-colors z-20 bg-black/50 rounded-full p-2 backdrop-blur-sm"
            onClick={closeModal}
          >
            <X size={28} />
          </button>
          
          <div 
            className="relative w-full h-full flex items-center justify-center p-8 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-7xl max-h-[85vh] w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Back to collage button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Collage
          </button>
        </div>
      )}
    </>
  );
}