import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Build() {
  return (
    <div className="w-full py-20 mt-20" data-aos="fade-up">
      {/* Main CTA Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur border border-purple-500/30 rounded-2xl p-12 md:p-16">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center gap-6">
            {/* Video/Icon */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-50" />
              <video
                width="150"
                height="150"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                controls={false}
                className="relative rounded-full border-4 border-purple-500/30"
              >
                <source src="/about/connect-new.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300 font-medium">
                  Available for Projects
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Let's Build Something{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Exceptional
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              Got a vision? I'll help you ship it. Whether it's a sleek landing
              page, a complex web app, or a mobile experience—let's turn your
              idea into reality.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
              >
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-8 py-4 rounded-lg font-medium transition-all duration-300"
              >
                View My Work
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 mt-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">48hr</div>
                <div className="text-xs text-gray-400">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-xs text-gray-400">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
