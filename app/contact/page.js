"use client";

import FormField from "@/components/form-field";
import WidthConstraint from "@/components/width-constraint";

export default function Contact() {
  return (
    <div className="mt-20 py-28 min-h-screen">
      <WidthConstraint className="flex gap-y-8 text-xl font-semibold flex-col items-center justify-center">
        <div className="mb-10 relative group">
          {/* Glow effect behind video */}
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition-all duration-500"></div>
          <div className="relative">
            <video
              width="200"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              preload="auto"
              className="rounded-full ring-2 ring-white/20 transform group-hover:scale-105 transition-all duration-500"
            >
              <source src="/contact/time.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto text-center">
          <h1
            data-aos="zoom-in"
            className="text-3xl md:text-2xl font-bold leading-tight bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
          >
            Hey there, welcome to my contact page! 🎉
            <br className="" />
            <span className="text-2xl md:text-2xl">
              You&apos;ve made it—finally, the ticking clock says it&apos;s time
              to make your move! ⏳
            </span>
          </h1>

          <div className="space-y-3">
            <p
              data-aos="zoom-in"
              className="text-2xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200 bg-clip-text text-transparent font-bold"
            >
              Got a project, an idea, or want to hire Me?
            </p>
            <p
              data-aos="zoom-in"
              className="text-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200 bg-clip-text text-transparent font-bold"
            >
              Don&apos;t wait too long—let&apos;s connect and make something
              incredible happen!
            </p>
          </div>
        </div>

        <div className="w-full max-w-2xl mx-auto mt-4"></div>
        <FormField />
      </WidthConstraint>
    </div>
  );
}
