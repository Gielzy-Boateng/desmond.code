import Image from "next/image";
import WidthConstraint from "@/components/width-constraint";
import Build from "@/components/build";
import Certification from "@/components/certification";
import Achievements from "@/components/achievements";

export const metadata = {
  title: "About | JuizyCode - Full-Stack Developer Journey",
  description:
    "Learn about JuizyCode's journey from science labs to software engineering. Discover my expertise in React, Next.js, Flutter, and modern web development. Explore my tech stack, achievements, and professional experience.",
  keywords:
    "juizycode about, software engineer background, tech journey, full stack developer experience, React developer, Next.js expert, Flutter developer, web development journey",
  authors: [{ name: "JuizyCode" }],
  creator: "JuizyCode",
  publisher: "JuizyCode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://juizycode.vip"),
  alternates: {
    canonical: "https://juizycode.vip/about",
  },
  openGraph: {
    title: "About JuizyCode - Journey of a Full-Stack Developer",
    description:
      "Discover my journey from science to software engineering. Expert in React, Next.js, Flutter, and modern web development technologies.",
    url: "https://juizycode.vip/about",
    siteName: "JuizyCode",
    images: [
      {
        url: "/Brand Logo.png",
        width: 1200,
        height: 630,
        alt: "JuizyCode - Full-Stack Developer Journey",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About JuizyCode - Journey of a Full-Stack Developer",
    description: "From science labs to software engineering - my tech journey.",
    images: ["Brand Logo.png"],
    creator: "https://x.com/otumfuor_nana1?s=21",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google:
      "google-site-verification=Fd0kIALRMGAE38m_5pLrZcYk13TBjCia9sdfFyn9X0s",
  },
};

export default function About() {
  return (
    <WidthConstraint className="mt-28 py-44">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
        <div className="relative" data-aos="zoom-in">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20" />
          <Image
            src="/homepage/new-me.png"
            width={320}
            height={320}
            alt="Desmond Boateng"
            className="relative rounded-full border-4 border-purple-500/30"
          />
        </div>

        <div className="flex-1 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Desmond Nana Boateng
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
            I build digital experiences that users love and businesses rely on.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-300 leading-relaxed">
        <p data-aos="fade-up">
          From science labs to software engineering—my path wasn't traditional,
          but it taught me to approach problems systematically and think
          critically. What started as curiosity turned into a career building
          scalable web and mobile applications.
        </p>

        <p data-aos="fade-up" data-aos-delay="100">
          I specialize in the{" "}
          <strong className="text-white">modern JavaScript ecosystem</strong>
          —React, Next.js, Vue, Nuxt.js, TypeScript—combined with{" "}
          <strong className="text-white">Flutter</strong> for cross-platform
          mobile development. Whether it's architecting a performant frontend,
          integrating complex APIs, or crafting pixel-perfect UI, I focus on
          solutions that are both elegant and maintainable.
        </p>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8 my-8 border-y border-purple-500/20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">4+</div>
            <div className="text-sm text-gray-400 mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">20+</div>
            <div className="text-sm text-gray-400 mt-1">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">10+</div>
            <div className="text-sm text-gray-400 mt-1">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">∞</div>
            <div className="text-sm text-gray-400 mt-1">Cups of Coffee</div>
          </div>
        </div>

        <p data-aos="fade-up" data-aos-delay="300">
          Beyond writing code, I care about the <em>why</em> behind what I
          build. I've worked with startups racing to launch MVPs and established
          companies optimizing for scale. Each project has sharpened my ability
          to balance speed with quality, innovation with reliability.
        </p>
      </div>

      {/* Tech Stack - Visual, not list */}
      <div className="mt-20 mb-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-10">Tech Stack</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Flutter",
            "TailwindCSS",
            "Firebase",
            "GraphQL",
            "REST APIs",
            "Git",
            "Docker",
            "Node.js",
            "Figma",
            "Vue.js",
            "Nuxt.js",
            "Laravel",
            "Php",
            "MySQL",
            "PostgreSQL",
            "MongoDB",
          ].map((tech, i) => (
            <div
              key={tech}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur border border-purple-500/20 rounded-lg p-4 text-center hover:scale-105 transition-transform"
              data-aos="zoom-in"
              data-aos-delay={i * 50}
            >
              <span className="text-sm font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      <Achievements />
      <Certification />
      <Build />
    </WidthConstraint>
  );
}
