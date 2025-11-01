import Image from "next/image";
import WidthConstraint from "./width-constraint";
import { Mail, ArrowRight, Github, Linkedin, Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <WidthConstraint className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 py-20">
        {/* Text Content */}
        <div className="flex-1 max-w-2xl space-y-8">
          {/* Badge */}
          <div
            data-aos="fade-down"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur border border-purple-500/30 rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-gray-300">
              Available for freelance
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1
              data-aos="fade-down"
              data-aos-delay="100"
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Desmond
              </span>
              👋
            </h1>

            <h2
              data-aos="fade-down"
              data-aos-delay="200"
              className="text-2xl md:text-3xl font-semibold text-gray-300"
            >
              Full-Stack Developer & Mobile Engineer
            </h2>
          </div>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg text-gray-400 leading-relaxed max-w-xl"
          >
            I craft digital experiences that users love. Specializing in React,
            Next.js, and Flutter—I transform ideas into elegant, scalable
            solutions.
          </p>

          {/* CTA Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
            >
              Let's Work Together
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-8 py-4 rounded-lg font-medium transition-all duration-300"
            >
              View My Work
            </Link>
          </div>

          {/* Social Links & Resume */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex items-center gap-4 pt-8"
          >
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Gielzy-Boateng"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/desmond-boateng-0648b1295/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="h-8 w-px bg-white/10" />

            <a
              href="/pdf/my-cv.pdf"
              download
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Stats */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
          >
            <div>
              <div className="text-3xl font-bold text-white mb-1">4+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">20+</div>
              <div className="text-sm text-gray-400">Projects Done</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div data-aos="zoom-in" data-aos-delay="400" className="relative group">
          {/* Animated gradient rings */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-full opacity-30 group-hover:opacity-50 blur-2xl transition-all duration-500 animate-pulse" />
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 rounded-full opacity-40 group-hover:opacity-60 blur-xl transition-all duration-500" />

          {/* Image */}
          <div className="relative w-[350px] h-[350px] lg:w-[400px] lg:h-[400px]">
            <div className="absolute inset-0 rounded-full border-4 border-purple-500/30 group-hover:border-purple-500/50 transition-all duration-300" />
            <Image
              src="/homepage/new-me.png"
              fill
              alt="Desmond Boateng"
              className="rounded-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          {/* Floating badge */}
          <div className="absolute bottom-8 -right-4 bg-gradient-to-br from-purple-900/90 to-pink-900/90 backdrop-blur border border-purple-500/30 rounded-xl p-4 shadow-xl animate-float">
            <div className="flex items-center gap-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <Mail className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="text-xs text-gray-400">Available for</div>
                <div className="text-sm font-semibold text-white">
                  New Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </WidthConstraint>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-scroll" />
        </div>
      </div>
    </div>
  );
}
