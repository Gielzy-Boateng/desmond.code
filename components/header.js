"use client";

import Image from "next/image";
import WidthConstraint from "./width-constraint";
import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavBar from "./mobile-navbar";
import { Sparkles, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          mobileMenuOpen ? "z-30" : "z-50"
        } ${
          scrolled
            ? "py-2 bg-[#1A0B2E]/95 backdrop-blur-xl border-b border-purple-500/30 shadow-lg shadow-purple-500/10"
            : "py-3 bg-[#1A0B2E]/80 backdrop-blur-md border-b border-purple-500/20"
        }`}
      >
        <WidthConstraint className="flex items-center justify-between">
          {/* Logo Section - Hidden when mobile menu is open */}
          <Link
            href="/"
            className={`relative group transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-full opacity-30 group-hover:opacity-60 blur-lg transition-all duration-500 animate-pulse" />
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
              <Image
                src="/Brand Logo.png"
                width={60}
                height={60}
                alt="Desmond Boateng"
                className="relative rounded-full transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border-2 border-purple-500/30 group-hover:border-purple-500/60"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="relative group">
              {/* Animated background glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-full opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500" />

              {/* Navigation container */}
              <div className="relative flex items-center gap-1 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full px-2 py-2 shadow-lg shadow-purple-500/10">
                {navLinks.map((nav) => {
                  const isActive = pathname === nav.link;
                  return (
                    <Link
                      key={nav.name}
                      href={nav.link}
                      className="relative group/link"
                    >
                      <div
                        className={`relative px-6 py-2.5 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
                            : "text-gray-300 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        <span className="relative z-10 font-medium text-sm flex items-center gap-2">
                          {nav.name}
                          {isActive && (
                            <Sparkles className="w-3 h-3 animate-pulse" />
                          )}
                        </span>

                        {/* Hover glow effect */}
                        {!isActive && (
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover/link:opacity-20 blur transition-all duration-300" />
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>

          {/* CTA Button (Desktop only) */}
          <Link
            href="/contact"
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 group"
          >
            <span>Let&apos;s Talk</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </Link>

          {/* Mobile Menu Button - Hidden when mobile menu is open */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`md:hidden relative group p-2 bg-white/10 backdrop-blur border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            aria-label="Open menu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
            <Menu className="w-7 h-7 text-white relative z-10" />
          </button>
        </WidthConstraint>
      </header>

      {/* Mobile Navigation */}
      <MobileNavBar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
