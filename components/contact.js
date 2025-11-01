import Link from "next/link";
import Image from "next/image";
import WidthConstraint from "./width-constraint";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";

export default function Contact() {
  return (
    <WidthConstraint className="my-20 lg:my-32">
      {/* Main Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur border border-purple-500/30 rounded-3xl p-8 md:p-12 lg:p-16">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image Section */}
          <div data-aos="zoom-in" className="relative group flex-shrink-0">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-2xl opacity-40 group-hover:opacity-60 blur-2xl transition-all duration-500" />
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl border-4 border-purple-500/30 group-hover:border-purple-500/50 transition-all duration-300" />
              <Image
                src="/homepage/electronics.png"
                width={320}
                height={320}
                alt="Let's collaborate"
                className="relative rounded-2xl transform group-hover:scale-105 transition-all duration-500"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div data-aos="fade-left" className="flex-1 space-y-8 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur border border-purple-500/30 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-gray-300">
                Open for opportunities
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Let&apos;s Build
              </span>{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Something Great
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed">
              From powerful applications to complex challenges, I help
              businesses and individuals create cutting-edge solutions. Whether
              it&apos;s collaboration, consulting, or simply sharing
              ideas—let&apos;s shape the future of technology together.
            </p>

            {/* Quick Contact Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur border border-white/10 rounded-lg p-3">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <Mail className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Email</div>
                  <div className="text-sm font-medium text-white">Quick</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 backdrop-blur border border-white/10 rounded-lg p-3">
                <div className="bg-pink-500/20 p-2 rounded-lg">
                  <Phone className="w-4 h-4 text-pink-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Call</div>
                  <div className="text-sm font-medium text-white">Direct</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 backdrop-blur border border-white/10 rounded-lg p-3">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <MessageCircle className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Chat</div>
                  <div className="text-sm font-medium text-white">24hr</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 w-full sm:w-auto"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Optional: Additional Contact Cards Below */}
      <div data-aos="fade-up" className="grid md:grid-cols-2 gap-6 mt-12">
        <div className="group bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="bg-purple-500/20 p-3 rounded-lg group-hover:bg-purple-500/30 transition-colors">
              <Mail className="w-6 h-6 text-purple-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">
                Email Me
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                For detailed inquiries and project discussions
              </p>

              <a
                href="mailto:desmondboateng483@gmail.com"
                className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
              >
                desmondboateng483@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="group bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="bg-pink-500/20 p-3 rounded-lg group-hover:bg-pink-500/30 transition-colors">
              <Phone className="w-6 h-6 text-pink-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">Call Me</h3>
              <p className="text-gray-400 text-sm mb-3">
                For urgent matters and quick consultations
              </p>

              <a
                href="tel:0245592976"
                className="text-pink-400 hover:text-pink-300 text-sm font-medium transition-colors"
              >
                +233 (245) 59-2976
              </a>
            </div>
          </div>
        </div>
      </div>
    </WidthConstraint>
  );
}
