"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-[#472518] to-[#472518] text-white">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">

        {/* Logo - links to homepage */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/PHK/6.png"
            alt="Logo"
            width={80}
            height={80}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 font-jost text-sm md:text-base tracking-wide">
          <Link href="/About" className="hover:opacity-80 transition">
            About Us
          </Link>

          <Link href="/ContactUs" className="hover:opacity-80 transition">
            Contact Us
          </Link>
        </nav>

      </div>

    </header>
  );
}