import FormField from "@/components/form-field";
import WidthConstraint from "@/components/width-constraint";
import { Mail, MessageCircle, Clock } from "lucide-react";

export const metadata = {
  title: "Contact | JuizyCode - Let's Build Something Amazing",
  description:
    "Get in touch with JuizyCode for your web and mobile development needs. Free consultation available. Let's discuss your project and create something extraordinary together.",
  keywords:
    "contact juizycode, hire developer, web development services, mobile app development, project consultation, React developer contact, Next.js developer, Flutter developer contact",
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
    canonical: "https://juizycode.vip/contact",
  },
  openGraph: {
    title: "Contact JuizyCode - Let's Create Something Extraordinary",
    description:
      "Ready to bring your project to life? Get in touch for a free consultation and let's create something amazing together.",
    url: "https://juizycode.vip/contact",
    siteName: "JuizyCode",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact JuizyCode - Web & Mobile Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact JuizyCode - Let's Create Something Extraordinary",
    description:
      "Get in touch for your next big project. Free consultation available.",
    images: ["og-image.png"],
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

export default function Contact() {
  return (
    <div className="relative mt-20  min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <WidthConstraint className="py-20 md:py-28">
        <div className="flex flex-col items-center gap-12">
          {/* Video Header */}
          <div data-aos="zoom-in" className="relative group mb-4">
            {/* Glow effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-full opacity-50 group-hover:opacity-75 blur-2xl transition-all duration-500 animate-pulse" />
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 rounded-full opacity-60 group-hover:opacity-80 blur-xl transition-all duration-500" />

            {/* Video container */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-4 border-purple-500/30 group-hover:border-purple-500/50 transition-all duration-300" />
              <video
                width="200"
                height="200"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                preload="auto"
                className="relative rounded-full transform group-hover:scale-105 transition-all duration-500"
              >
                <source src="/contact/time.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Main Heading */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1
              data-aos="fade-up"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Let&apos;s Create Something
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
            >
              Got a project in mind? The clock is ticking—let&apos;s turn your
              vision into reality! ⏰
            </p>
          </div>

          {/* Feature Cards */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="grid md:grid-cols-3 gap-6 w-full max-w-4xl mb-8"
          >
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
              <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-4">
                <Clock className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Quick Response
              </h3>
              <p className="text-gray-400 text-sm">
                I typically respond within 24 hours
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
              <div className="bg-pink-500/20 p-3 rounded-lg w-fit mb-4">
                <MessageCircle className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Free Consultation
              </h3>
              <p className="text-gray-400 text-sm">
                Let&apos;s discuss your project needs
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
              <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-4">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Direct Contact
              </h3>
              <p className="text-gray-400 text-sm">
                Get straight to the point with me
              </p>
            </div>
          </div>

          {/* CTA Text */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center space-y-3 mb-4"
          >
            <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Ready to start your project?
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              Fill out the form below and let&apos;s make something incredible
              happen! 🚀
            </p>
          </div>

          {/* Form */}
          <div data-aos="fade-up" data-aos-delay="400" className="w-full">
            <FormField />
          </div>

          {/* Additional Contact Info */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-center space-y-2 pt-8 border-t border-white/10 w-full max-w-lg"
          >
            <p className="text-sm text-gray-400">Prefer email?</p>

            <a
              href="mailto:desmondboateng483@gmail.com"
              className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              desmondboateng483@gmail.com
            </a>
          </div>
        </div>
      </WidthConstraint>
    </div>
  );
}
