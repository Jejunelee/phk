"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-br from-[#8B5A2B] to-[#6B3F1D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
          
          {/* Logo - larger */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/PHK/8.png"
              alt="Philippine Heritage Kitchen Logo"
              width={400}
              height={400}
              priority
              className="w-auto h-42 md:h-50 object-contain"
            />
          </div>

          {/* Content */}
          <div className="text-center md:text-right space-y-3">
            
            <h2 className="font-serif text-2xl md:text-3xl leading-tight">
              Where every dish tells
              <br />
              the story of people.
            </h2>

            <Link
              href="#contact"
              className="inline-block bg-white text-[#6B3F1D] px-8 py-2.5 rounded-full text-base font-medium hover:bg-amber-50 transition"
            >
              Contact Us
            </Link>

            <p className="text-sm opacity-70 pt-2">
              © {currentYear} Philippine Heritage Kitchen
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}