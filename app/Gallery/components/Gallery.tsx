"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Gallery data structure with multiple images per event
const galleryEvents = [
  {
    id: 1,
    title: "Sisig Festival",
    date: "May 29, 2024",
    category: "Classes",
    description: "From salad to sizzling - exploring the many ways of Sisig",
    images: [
      { id: 1, src: "/PHK/gallery/sisig1.png", alt: "Sisig preparation" },
      { id: 2, src: "/PHK/gallery/sisig2.png", alt: "Sizzling sisig" },
      { id: 3, src: "/PHK/gallery/sisig3.png", alt: "Chef demonstrating sisig" }
    ]
  },
  {
    id: 2,
    title: "Lechon Wars",
    date: "June 20, 2024",
    category: "Tastings",
    description: "Carcar vs Talisay - Cebu Lechon showdown",
    images: [
      { id: 1, src: "/PHK/gallery/lechon1.png", alt: "Whole lechon" },
      { id: 2, src: "/PHK/gallery/lechon2.png", alt: "Lechon carving" },
      { id: 3, src: "/PHK/gallery/lechon3.png", alt: "Tasting session" }
    ]
  },
  {
    id: 3,
    title: "Philippine Ingredients",
    date: "July 17, 2024",
    category: "Classes",
    description: "Pocket event highlighting local ingredients",
    images: [
      { id: 1, src: "/PHK/gallery/ingredients1.png", alt: "Local ingredients display" },
      { id: 2, src: "/PHK/gallery/ingredients2.png", alt: "Cooking demonstration" }
    ]
  },
  {
    id: 4,
    title: "Wow Mindanao",
    date: "August 22, 2024",
    category: "Talks",
    description: "Davao and Zamboanga culinary heritage",
    images: [
      { id: 1, src: "/PHK/gallery/mindanao1.png", alt: "Mindanao dishes" },
      { id: 2, src: "/PHK/gallery/mindanao2.png", alt: "Cultural presentation" },
      { id: 3, src: "/PHK/gallery/mindanao3.png", alt: "Food tasting" }
    ]
  },
  {
    id: 5,
    title: "Kakanin! Kanin!",
    date: "September 11-12, 2024",
    category: "Tastings",
    description: "Kakanin and Merienda spread celebration",
    images: [
      { id: 1, src: "/PHK/gallery/kakanin1.png", alt: "Colorful kakanin" },
      { id: 2, src: "/PHK/gallery/kakanin2.png", alt: "Merienda spread" }
    ]
  },
  {
    id: 6,
    title: "Recipes from Cookbooks",
    date: "October 24, 2024",
    category: "Talks",
    description: "Exploring treasured recipes from Filipino cookbooks",
    images: [
      { id: 1, src: "/PHK/gallery/cookbooks1.png", alt: "Cookbook showcase" },
      { id: 2, src: "/PHK/gallery/cookbooks2.png", alt: "Recipe demonstration" }
    ]
  },
  {
    id: 7,
    title: "Paskong Pilipino",
    date: "November 21-28, 2024",
    category: "Classes",
    description: "Family recipes for the Filipino Christmas",
    images: [
      { id: 1, src: "/PHK/gallery/pasko1.png", alt: "Christmas food preparation" },
      { id: 2, src: "/PHK/gallery/pasko2.png", alt: "Family recipe cooking" },
      { id: 3, src: "/PHK/gallery/pasko3.png", alt: "Holiday feast" }
    ]
  },
  {
    id: 8,
    title: "Almuzar",
    date: "December 5-6, 2024",
    category: "Promotions",
    description: "Almusal + Bazaar - Breakfast and market experience",
    images: [
      { id: 1, src: "/PHK/gallery/almuzar1.png", alt: "Breakfast spread" },
      { id: 2, src: "/PHK/gallery/almuzar2.png", alt: "Bazaar vendors" }
    ]
  },
  {
    id: 9,
    title: "Heirloom Recipes",
    date: "January 24, 2025",
    category: "Classes",
    description: "Metro Manila cities' treasured family recipes",
    images: [
      { id: 1, src: "/PHK/gallery/heirloom1.png", alt: "Heirloom cooking" },
      { id: 2, src: "/PHK/gallery/heirloom2.png", alt: "Family recipe demonstration" }
    ]
  },
  {
    id: 10,
    title: "Pares Pares",
    date: "February 21, 2025",
    category: "Promotions",
    description: "Perfect pairings - Wine and food matching",
    images: [
      { id: 1, src: "/PHK/gallery/pares1.png", alt: "Food and wine pairing" },
      { id: 2, src: "/PHK/gallery/pares2.png", alt: "Perfect pairings event" }
    ]
  }
];

// Category filter buttons
const categories = ["All", "Classes", "Tastings", "Talks", "Promotions"];

export default function Gallery() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<typeof galleryEvents[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  // Filter events based on active category
  const filteredEvents = activeCategory === "All" 
    ? galleryEvents 
    : galleryEvents.filter(event => event.category === activeCategory);

  // Carousel navigation
  const nextImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedEvent.images.length);
    }
  };

  const prevImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedEvent.images.length) % selectedEvent.images.length);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedEvent) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setSelectedEvent(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEvent, currentImageIndex]);

  // Open lightbox with specific image index
  const openLightbox = (event: typeof galleryEvents[0], imageIndex: number = 0) => {
    setSelectedEvent(event);
    setCurrentImageIndex(imageIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedEvent(null);
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

      {/* Filter Bar */}
      <div className="sticky top-0 z-20 bg-[#F5F3EF] border-b border-[#2D2926]/10 py-4 px-5 md:px-6 lg:px-16 xl:px-28">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 md:px-6 py-2 md:py-2.5 text-sm md:text-base rounded-full transition-all duration-300 font-medium ${
                activeCategory === category
                  ? "bg-[#996D33] text-white"
                  : "bg-white text-[#2D2926] hover:bg-[#ECEAE6] border border-[#2D2926]/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="w-full bg-[#F5F3EF] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-16 xl:px-28">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16 md:py-24">
              <p className="text-[#2D2926]/60 text-lg">No events found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  onClick={() => openLightbox(event, 0)}
                  className="group relative overflow-hidden rounded-[16px] cursor-pointer"
                >
                  {/* Image Container - shows first image as cover */}
                  <div className="relative aspect-[4/3] bg-[#ECEAE6]">
                    <Image
                      src={event.images[0].src}
                      alt={event.images[0].alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Multiple images indicator */}
                    {event.images.length > 1 && (
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        {event.images.length} photos
                      </div>
                    )}
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5A2D1C]/90 via-[#5A2D1C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                        <span className="text-[#E7B879] text-xs md:text-sm font-semibold uppercase tracking-wider">
                          {event.category}
                        </span>
                        <h3 className="text-white text-lg md:text-xl font-semibold mt-1">
                          {event.title}
                        </h3>
                        <p className="text-white/70 text-sm mt-1">
                          {event.date}
                        </p>
                      </div>
                    </div>
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
              <p className="text-[#996D33] text-3xl md:text-4xl font-semibold">{galleryEvents.length}</p>
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

      {/* Carousel Lightbox Modal */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-[#E7B879] transition-colors z-10"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          {/* Carousel Container */}
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous button */}
            {selectedEvent.images.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-4 md:left-6 text-white hover:text-[#E7B879] transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm z-10"
              >
                <ChevronLeft size={36} />
              </button>
            )}

            {/* Current Image */}
            <div className="relative w-full h-full flex items-center justify-center p-16 md:p-20">
              <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
                <Image
                  src={selectedEvent.images[currentImageIndex].src}
                  alt={selectedEvent.images[currentImageIndex].alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Next button */}
            {selectedEvent.images.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 md:right-6 text-white hover:text-[#E7B879] transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm z-10"
              >
                <ChevronRight size={36} />
              </button>
            )}

            {/* Image Counter */}
            {selectedEvent.images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm">
                {currentImageIndex + 1} / {selectedEvent.images.length}
              </div>
            )}
          </div>

          {/* Event Info Panel */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 md:p-8">
            <div className="max-w-6xl mx-auto">
              <span className="text-[#E7B879] text-sm font-semibold uppercase tracking-wider">
                {selectedEvent.category}
              </span>
              <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold mt-1">
                {selectedEvent.title}
              </h3>
              <p className="text-white/70 text-sm md:text-base mt-1">
                {selectedEvent.date}
              </p>
              <p className="text-white/80 text-sm md:text-base mt-2 max-w-2xl">
                {selectedEvent.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}