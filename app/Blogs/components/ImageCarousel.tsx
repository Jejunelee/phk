"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { BlogImage } from "@/app/Blogs/data";

export default function ImageCarousel({
  images,
  className = "",
}: {
  images: BlogImage[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  const goTo = (next: number) => {
    setIndex((next + images.length) % images.length);
  };

  const current = images[index];

  return (
    <figure className={`w-full ${className}`}>
      <div className="relative overflow-hidden rounded-2xl bg-[#2D2926] shadow-md">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority={index === 0}
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition"
            >
              <ChevronRight size={22} />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
              {images.map((image, i) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to photo ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-6 bg-[#E7C9A1]"
                      : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-[#2D2926]/70">
        <span className="italic">{current.caption}</span>
        <span className="text-[#996D33] font-medium shrink-0">
          {index + 1} / {images.length}
        </span>
      </figcaption>
    </figure>
  );
}
