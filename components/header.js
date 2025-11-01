"use client";

import Image from "next/image";
import WidthConstraint from "./width-constraint";
import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavBar from "./mobile-navbar";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="p-1 fixed top-0 left-0 right-0 z-40 bg-[#1A0B2E]/80 backdrop-blur-sm border-b border-[#2A1B3E]">
      <WidthConstraint className="flex items-center justify-between">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-20 group-hover:opacity-50 blur transition duration-500"></div>
          <Link href="/">
            <Image
              src="/Brand Logo.png"
              width={70}
              height={70}
              alt="My Logo"
              className="rounded-full relative transform hover:scale-105 transition duration-300"
              priority
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-full opacity-30 group-hover:opacity-60 blur transition duration-500"></div>
          <div className="relative flex items-center gap-x-10 bg-white/90 backdrop-blur-sm py-5 px-8 group-hover:px-20 font-semibold text-black rounded-full transition-all duration-300">
            {navLinks.map((nav, i) => (
              <Link
                key={nav.name}
                href={nav.link}
                className={`relative group/link ${
                  pathname === nav.link ? "text-blue-500" : ""
                }`}
              >
                <p className="relative transition-colors duration-300 group-hover/link:text-blue-500">
                  {nav.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-300 ease-out
                      ${
                        pathname === nav.link
                          ? "w-full"
                          : "w-0 group-hover/link:w-full"
                      }`}
                  />
                </p>
              </Link>
            ))}
          </div>
        </div>

        <MobileNavBar />
      </WidthConstraint>
    </div>
  );
}
