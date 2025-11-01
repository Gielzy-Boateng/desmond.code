"use client";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/constants";
import { useEffect, useRef } from "react";
import { XIcon, Sparkles, ArrowRight } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function MobileNavBar({ isOpen, onClose }) {
  const menuRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  function getIntouch() {
    router.push("/contact");
    onClose();
  }

  // Handle click outside and scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleScroll = () => {
      onClose();
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, onClose]);

  // Close menu on route change (only when pathname actually changes)
  useEffect(() => {
    if (prevPathnameRef.current !== pathname && isOpen) {
      onClose();
    }
    prevPathnameRef.current = pathname;
  }, [pathname, isOpen, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[100%] h-[60%] max-w-sm z-50 overflow-hidden rounded-b-xl"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A0B2E] via-[#2A1545] to-[#1A0B2E]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

            {/* Menu Content */}
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-purple-500/30">
                <Link href="/" onClick={onClose} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-30 group-hover:opacity-50 blur-lg transition-all duration-300" />
                  <Image
                    src="/Brand Logo.png"
                    alt="Brand Logo"
                    width={70}
                    height={70}
                    className="relative rounded-full transform group-hover:scale-105 transition-all duration-300 border-2 border-purple-500/30"
                  />
                </Link>

                <button
                  onClick={onClose}
                  className="relative group p-2 bg-white/10 backdrop-blur border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300"
                  aria-label="Close menu"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
                  <XIcon className="w-6 h-6 text-white relative z-10" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-6 px-6">
                <ul className="space-y-2">
                  {navLinks.map((nav, index) => {
                    const isActive = pathname === nav.link;

                    function handleNav() {
                      router.push(nav.link);
                      onClose();
                    }

                    return (
                      <motion.li
                        key={nav.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <button
                          onClick={handleNav}
                          className={`w-full relative group block transition-all duration-300 ${
                            isActive ? "scale-105" : ""
                          }`}
                        >
                          <div
                            className={`relative px-6 py-4 rounded-xl transition-all duration-300 ${
                              isActive
                                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
                                : "text-gray-300 hover:text-white hover:bg-white/10"
                            }`}
                          >
                            <span className="flex items-center justify-between font-medium">
                              <span className="flex items-center gap-3">
                                {nav.name}
                                {isActive && (
                                  <Sparkles className="w-4 h-4 animate-pulse" />
                                )}
                              </span>
                              <ArrowRight
                                className={`w-4 h-4 transition-transform duration-300 ${
                                  isActive
                                    ? "translate-x-0 opacity-100"
                                    : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                                }`}
                              />
                            </span>

                            {/* Hover effect for non-active items */}
                            {!isActive && (
                              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
                            )}
                          </div>
                        </button>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              {/* CTA Section */}
              <div className="p-6 border-t border-purple-500/30 bg-gradient-to-t from-black/50 space-y-4">
                {/* Get in Touch Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={getIntouch}
                  className="group w-full relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-6 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Let&apos;s Work Together
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  </span>

                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.button>

                {/* Social Proof Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-center text-sm text-gray-400"
                >
                  Available for freelance projects
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
