"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f6f2] py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Hamburger Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50"
        >
          <span className={`w-6 h-0.5 bg-[#3c312d] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-[#3c312d] transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-[#3c312d] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="https://ext.same-assets.com/1270808772/115541220.png"
            alt="Shang TCM Logo"
            width={80}
            height={60}
            className="h-12 w-auto"
          />
        </Link>

        {/* Book Appointment Button */}
        <Link
          href="#bookappointment"
          className="bg-[#b5b099] text-white text-xs uppercase tracking-wider px-5 py-3 hover:bg-[#9a957f] transition-colors"
        >
          Book Appointment
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#f8f6f2] pt-20 px-8 z-40">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#3c312d] text-lg py-2 border-b border-[#e5e2db]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
