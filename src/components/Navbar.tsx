"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 shadow-sm bg-surface/90 dark:bg-surface-dim/90 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-container-padding-mobile md:px-container-padding-desktop py-6 relative z-50 bg-transparent">
        {/* Brand */}
        <Link
          className="font-headline-md text-headline-md font-semibold tracking-tight text-primary dark:text-primary-fixed-dim"
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Excellent Beauty Salon & Hair
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              className={`font-label-md text-label-md transition-colors duration-300 ${
                pathname === link.href
                  ? "text-primary dark:text-primary-fixed-dim border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Trailing Action */}
        <div className="hidden md:block">
          <Link href="/contact" className="inline-block bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md hover:bg-primary/90 transition-all duration-300 shadow-[0_4px_14px_rgba(116,89,65,0.2)]">
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Full-screen Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-surface dark:bg-surface-dim pt-32 px-container-padding-mobile transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        }`}
        style={{ zIndex: 40 }}
      >
        <nav className="flex flex-col gap-8 items-center h-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              className={`font-headline-md text-2xl transition-colors duration-300 ${
                pathname === link.href
                  ? "text-primary dark:text-primary-fixed-dim border-b-2 border-primary pb-2"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-8">
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-on-primary px-10 py-4 rounded-full font-label-md text-lg hover:bg-primary/90 transition-all duration-300 shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
