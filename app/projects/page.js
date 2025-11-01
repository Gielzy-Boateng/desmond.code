import Image from "next/image";
import WidthConstraint from "@/components/width-constraint";
import React from "react";
import EvenProject from "@/components/even-project";
import OddProject from "@/components/odd";
import { Sparkles, Code2, Rocket } from "lucide-react";

export default function Projects() {
  const stats = [
    { label: "Projects Completed", value: "15+", icon: Rocket },
    { label: "Happy Clients", value: "12+", icon: Sparkles },
    { label: "Lines of Code", value: "100K+", icon: Code2 },
  ];

  return (
    <main className="relative overflow-hidden mt-20">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <WidthConstraint className="py-24 space-y-24">
        {/* Hero Section */}
        <div className="relative">
          {/* Header Content */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mb-16">
            {/* Image with effects */}
            <div data-aos="zoom-in" className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-2xl opacity-40 group-hover:opacity-60 blur-2xl transition-all duration-500 animate-pulse" />
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl border-4 border-purple-500/30 group-hover:border-purple-500/50 transition-all duration-300" />
                <Image
                  src="/project/project.png"
                  width={300}
                  height={300}
                  alt="Projects showcase"
                  className="relative rounded-2xl transform group-hover:scale-105 transition-all duration-500"
                  priority
                />
              </div>
            </div>

            {/* Text Content */}
            <div data-aos="fade-left" className="space-y-6 max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur border border-purple-500/30 rounded-full">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-300">
                  Portfolio Showcase
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  My
                </span>{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>

              <p className="text-2xl font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Crafted with passion, built with precision ✨
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                    <stat.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Introduction Text */}
          <div
            data-aos="fade-up"
            className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed"
          >
            <p className="text-center lg:text-left">
              Welcome to my project portfolio! As a passionate software
              engineer, I specialize in crafting innovative, high-performance
              solutions tailored to meet diverse client needs. From dynamic web
              applications to cutting-edge mobile solutions—each project tells a
              story of collaboration, creativity, and technical excellence.
            </p>
            <p className="text-center lg:text-left">
              Every line of code reflects my commitment to quality, attention to
              detail, and user-centric design. Whether you&apos;re seeking
              inspiration or exploring how I can bring your vision to life, dive
              into the work that defines my journey as a developer.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-purple-500/20"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-6 py-2 bg-[#1A0B2E] text-sm text-purple-400 font-medium">
              Featured Work
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          <div data-aos="fade-up">
            <OddProject
              projectTitle="VANS AND TRUCKERS"
              projectDescription="A comprehensive logistics platform revolutionizing freight management. Track shipments in real-time, schedule deliveries with precision, and optimize routes for maximum efficiency. Built with modern tech stack to ensure seamless fleet performance monitoring and on-time arrivals."
              projectLink="https://www.vansandtruckers.com/"
              projectImage="/homepage/pic-5.png"
            />
          </div>

          <div data-aos="fade-up">
            <EvenProject
              projectImage="/homepage/pic-1.png"
              projectLink="https://wedey-site.vercel.app/"
              projectTitle="WEDEY FARMS"
              projectDescription="An innovative agritech platform connecting sustainable farming with modern consumers. Features real-time inventory management, farm-to-table tracking, and community engagement tools. Built to promote eco-friendly practices and support local agriculture through cutting-edge technology."
            />
          </div>

          <div data-aos="fade-up">
            <OddProject
              projectImage="/homepage/pic-3.png"
              projectDescription="Luxury real estate showcase featuring stunning property listings, interactive 3D tours, and seamless booking experience. Designed with premium aesthetics and optimized performance to highlight Fifth Avenue's exclusive apartments with sophisticated visual storytelling."
              projectLink="https://www.fifthavenueluxuryapartments.com/"
              projectTitle="FIFTH AVENUE LUXURY APARTMENTS"
            />
          </div>

          <div data-aos="fade-up">
            <EvenProject
              projectImage="/homepage/pic-2.png"
              projectDescription="A dynamic sports platform for Ghana's premier football club. Features player profiles, match schedules, live updates, and academy programs. Built to inspire the next generation of athletes with responsive design and engaging content management."
              projectLink="https://adansiunitedfc.com/"
              projectTitle="ADANSI UNITED FC"
            />
          </div>

          <div data-aos="fade-up">
            <OddProject
              projectImage="/homepage/pic-13.png"
              projectDescription="Interactive e-learning platform offering hands-on training in data analytics and coding. Features real-time code editors, project-based learning modules, and progress tracking. Built with modern frameworks to deliver an engaging, job-ready educational experience."
              projectLink="https://skill-up-academy-tau.vercel.app/"
              projectTitle="SKILLUP ACADEMY"
            />
          </div>

          <div data-aos="fade-up">
            <EvenProject
              projectImage="/homepage/pic-14.png"
              projectDescription="Revolutionary no-code CMS platform empowering users to build professional websites without coding. Features drag-and-drop interface, theme customization, visitor analytics, and real-time content editing. Built with Laravel for robust performance and scalability."
              projectLink="https://buildify-production.up.railway.app/"
              projectTitle="BUILDIFY"
            />
          </div>

          <div data-aos="fade-up">
            <OddProject
              projectImage="/homepage/pic-10.png"
              projectDescription="Real-time currency conversion tool supporting 150+ currencies with live exchange rates. Features instant calculations, historical data visualization, and offline mode. Optimized for speed and accuracy to serve travelers and businesses worldwide."
              projectLink="https://currency-converter-chi-self.vercel.app/"
              projectTitle="CURRENCY CONVERTER"
            />
          </div>

          <div data-aos="fade-up">
            <EvenProject
              projectImage="/homepage/pic-8.png"
              projectDescription="Modern service platform for phone repair specialists. Features online booking system, service tracking, inventory management, and customer reviews. Built to streamline operations and enhance customer satisfaction through seamless digital experience."
              projectLink="https://authentic-phones-technique.vercel.app/"
              projectTitle="AUTHENTIC PHONES"
            />
          </div>

          <div data-aos="fade-up">
            <OddProject
              projectImage="/homepage/pic-9.png"
              projectDescription="Elegant accommodation booking platform showcasing modern lodging options. Features real-time availability, virtual tours, secure payment integration, and guest reviews. Designed to provide effortless booking experience for travelers seeking comfort."
              projectLink="https://kobbysapartments.vercel.app/"
              projectTitle="KOBBY'S APT AND LODGE"
            />
          </div>

          <div data-aos="fade-up">
            <EvenProject
              projectImage="/homepage/pic-12.png"
              projectDescription="Smart travel companion for organized trip planning. Features customizable packing lists, itinerary builder, weather integration, and collaborative planning tools. Minimalist design focused on functionality to simplify travel preparation."
              projectLink="https://travel-list-one-psi.vercel.app/"
              projectTitle="HOMECOMING TRAVEL LIST"
            />
          </div>

          <div data-aos="fade-up">
            <OddProject
              projectImage="/homepage/pic-11.png"
              projectDescription="Efficient utility management tool for bill verification and tracking. Features automated calculations, payment history, and expense analytics. Built with focus on accuracy and reliability to help users manage their finances effectively."
              projectLink="https://bill-checker-five.vercel.app/"
              projectTitle="BILL CHECKER"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div
          data-aos="fade-up"
          className="relative overflow-hidden bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur border border-purple-500/30 rounded-2xl p-12 md:p-16 mt-32"
        >
          {/* Background effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Have a Project in Mind?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let&apos;s collaborate and create something extraordinary
              together. Your vision, my expertise—the perfect combination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
              >
                Start Your Project
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-8 py-4 rounded-lg font-medium transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </WidthConstraint>
    </main>
  );
}
