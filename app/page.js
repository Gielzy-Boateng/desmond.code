export const metadata = {
  title: "JuizyCode | Full-Stack Developer",
  description:
    "Software Engineer skilled in web and mobile app development using React, Next.js, Flutter, and more. Access exclusive coding guides, tech tricks, and developer resources. Your VIP destination for premium programming tutorials, cheat sheets, and software development tips.",
  keywords:
    "juizycode, coding guides, programming tutorials, tech tricks, developer resources, cheat sheets, web development, software engineering,app development, full-stack development, JavaScript, React, Next.js, Flutter,php,laravel,django,node.js,python,ruby on rails,java,csharp,c++,mobile development,ios development,android development",
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
    canonical: "https://juizycode.vip",
  },
  openGraph: {
    title: "JuizyCode - Premium Code Guides & Tech Tutorials",
    description:
      "Software Engineer skilled in web and mobile app development using React, Next.js, Flutter, and more. Access exclusive coding guides, tech tricks, and developer resources. Your VIP destination for premium programming content.",
    url: "https://juizycode.vip",
    siteName: "JuizyCode",
    images: [
      {
        url: "https://juizycode.vip/og-image.png",
        width: 1200,
        height: 630,
        alt: "JuizyCode - Premium Code Guides",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JuizyCode - Premium Code Guides & Tech Tutorials",
    description:
      "Access exclusive coding guides, tech tricks, and developer resources.",
    images: ["/og-image.png"],
    creator: "@otumfuor_nana1",
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

import Contact from "@/components/contact";
import Hero from "@/components/hero";
import HeroProjects from "@/components/hero-projects";
import WorkExperience from "@/components/work-experience";

export default function Home() {
  return (
    <div className="mt-44">
      <Hero />
      <WorkExperience />
      <HeroProjects />
      <Contact />
    </div>
  );
}
