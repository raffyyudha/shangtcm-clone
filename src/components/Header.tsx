"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/tcm-treatments", label: "TCM Treatments" },
    { href: "/schedule", label: "Schedule" },
    { href: "/charges", label: "Charges" },
    { href: "/shop", label: "Shop" },
    { href: "/media", label: "Media" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm py-2" : "bg-[#f0f7fc] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Hamburger Menu - visible on mobile, hidden on desktop */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-[#1e293b] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#1e293b] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#1e293b] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Desktop Nav Links - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#1e293b] text-xs uppercase tracking-widest hover:text-[#7cb3e0] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>



        {/* Desktop right nav + Book button */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.slice(4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#1e293b] text-xs uppercase tracking-widest hover:text-[#7cb3e0] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#bookappointment"
            className="bg-[#7cb3e0] text-white text-xs uppercase tracking-wider px-6 py-2.5 rounded-full hover:bg-[#63a0d4] transition-colors"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Book Appointment Button */}
        <Link
          href="#bookappointment"
          className="md:hidden bg-[#7cb3e0] text-white text-[10px] uppercase tracking-wider px-4 py-2 rounded-full hover:bg-[#63a0d4] transition-colors"
        >
          Book Appointment
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#f0f7fc] pt-20 px-8 z-40 transition-all duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#1e293b] text-base py-3 border-b border-[#e5e2db] font-light tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
