import { links } from "@/constants";
import Image from "next/image";
import WidthConstraint from "./width-constraint";
import Link from "next/link";
import { Mail, Phone, MapPin, Heart, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentDate = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Projects", href: "/projects" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Web Development", href: "/projects" },
      { name: "Mobile Apps", href: "/projects" },
      { name: "UI/UX Design", href: "/projects" },
      { name: "Consulting", href: "/contact" },
    ],
  };

  return (
    <footer className="relative bg-black border-t border-purple-500/20">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <WidthConstraint>
        {/* Main Footer Content */}
        <div className="relative z-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="block group">
              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-30 group-hover:opacity-50 blur-xl transition-all duration-300" />
                <Image
                  src="/footer-pic.png"
                  width={160}
                  height={160}
                  alt="Desmond Boateng"
                  className="relative transform group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building innovative digital solutions that make a difference.
              Let&apos;s create something extraordinary together.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {links.map((link, i) => (
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                  <div className="relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 p-2.5 rounded-lg transition-all duration-300">
                    <Image
                      src={link.icon}
                      width={20}
                      height={20}
                      alt={link.name}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-pink-500 transition-all duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="tel:+233571991014"
                  className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <div className="bg-purple-500/20 p-2 rounded-lg group-hover:bg-purple-500/30 transition-colors mt-0.5">
                    <Phone className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Call us</div>
                    <div className="text-sm">+233 571 991 014</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:desmondboateng483@gmail.com"
                  className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <div className="bg-pink-500/20 p-2 rounded-lg group-hover:bg-pink-500/30 transition-colors mt-0.5">
                    <Mail className="w-4 h-4 text-pink-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Email</div>
                    <div className="text-sm">desmondboateng483@gmail.com</div>
                  </div>
                </Link>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <div className="bg-blue-500/20 p-2 rounded-lg mt-0.5">
                    <MapPin className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Location</div>
                    <div className="text-sm">Accra, Ghana</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section (Optional) */}
        <div className="relative z-10 py-8 border-t border-purple-500/20">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur border border-purple-500/20 rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ready to Start Your Project?
                </h3>
                <p className="text-gray-400">
                  Let&apos;s discuss how I can help bring your ideas to life.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 whitespace-nowrap"
              >
                Get Started
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 py-6 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p className="flex items-center gap-1">
              Copyright &copy; {currentDate}
              <span className="text-white font-medium">Desmond Boateng</span>.
              All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>

            <p className="flex items-center gap-1">
              Crafted with{" "}
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />{" "}
              by{" "}
              <Link
                href="https://desmond-code.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium"
              >
                dev_desmond
              </Link>
            </p>
          </div>
        </div>
      </WidthConstraint>
    </footer>
  );
}
