"use client";

import Image from "next/image";
import { Globe, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function EvenProject({
  projectDescription,
  projectTitle,
  projectLink,
  projectImage,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="flex flex-col items-end justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative lg:-z-10 group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-all duration-500" />
          <div className="relative rounded-3xl overflow-hidden transition-all duration-300">
            <Image
              src={projectImage}
              width={500}
              height={500}
              alt={projectTitle}
              className="rounded-3xl transform group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          <span
            className="absolute hidden lg:block inset-0 -z-20 lg:-translate-y-14 lg:-translate-x-20 h-[300px] lg:h-[420px] opacity-60"
            style={{ width: "auto", aspectRatio: "12/12" }}
          >
            <Image
              src={"/homepage/gradient.png"}
              alt="gradient"
              fill
              className="object-cover"
            />
          </span>

          {/* Mobile Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center mt-10 pt-2 lg:hidden"
          >
            <Link href={projectLink} target="_blank" className="block group">
              <div className="inline-flex items-center gap-2 text-lg font-semibold text-purple-400 hover:text-purple-300 transition-all duration-300">
                <span>Visit website</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[600px] space-y-2"
        >
          <div className="flex flex-col items-end">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur border border-purple-500/30 rounded-full">
              <span className="text-sm text-purple-400 font-medium">
                Featured Project
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mt-2"
            >
              {projectTitle}
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-lg transition-all duration-300" />
            <div className="relative backdrop-blur-lg translate-y-6 lg:translate-y-0 lg:-translate-x-12 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl z-30 p-6 border border-purple-500/20 shadow-lg shadow-purple-500/10">
              <p className="text-gray-300 leading-relaxed">
                {projectDescription}
              </p>
            </div>
          </motion.div>

          {/* Desktop Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex items-center justify-end pt-2"
          >
            <Link href={projectLink} target="_blank" className="group">
              <div className="inline-flex items-center gap-2 text-lg font-semibold text-purple-400 hover:text-purple-300 transition-all duration-300">
                <span>Visit website</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
