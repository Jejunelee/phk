"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`
        fixed top-0 py-2 left-0 w-full z-50 transition-all duration-500
        ${scrolled ? "py-2 bg-transparent" : "bg-gradient-to-r from-[#472518] to-[#472518]"}
      `}
    >
      <div
        className={`
          py-2 mx-auto flex items-center justify-between px-6 transition-all duration-500
          ${scrolled 
            ? "max-w-6xl bg-gradient-to-r from-[#472518] to-[#472518] rounded-2xl shadow-2xl" 
            : "max-w-7xl bg-transparent"
          }
        `}
      >
        {/* Logo - links to homepage */}
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <Image
            src="/PHK/6.png"
            alt="Logo"
            width={scrolled ? 60 : 80}
            height={scrolled ? 60 : 80}
            priority
            className="transition-all duration-500"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-jost text-sm md:text-base tracking-wide">
          <Link
            href="/About"
            className={`transition duration-300 ${
              scrolled ? "text-white/90 hover:text-white" : "text-white hover:opacity-80"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/ContactUs"
            className={`transition duration-300 ${
              scrolled ? "text-white/90 hover:text-white" : "text-white hover:opacity-80"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Hamburger Icon - Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-out overflow-hidden
          bg-gradient-to-r from-[#472518] to-[#472518]
          ${isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="flex flex-col items-center gap-5 py-6 font-jost text-base tracking-wide">
          <Link
            href="/About"
            className="text-white hover:opacity-80 transition"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            href="/ContactUs"
            className="text-white hover:opacity-80 transition"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}