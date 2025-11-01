import "./globals.css";
import Script from "next/script";
import { Suspense } from "react";
import AosProvider from "@/components/aos-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Analytics from "@/components/Analytics";
import AnalyticsWrapper from "@/components/analytics-wrapper";
import { icons } from "lucide-react";

// export const metadata = {
//   title: "Desmond Boateng | Full-Stack Developer",
//   description:
//     "Software Engineer skilled in web and mobile app development using React, Next.js, Flutter, and more.",
//   icons: {
//     icon: "/Brand Logo.png",
//   },
// };

export const metadata = {
  title: "JuizyCode | Full-Stack Developer",
  description:
    "Software Engineer skilled in web and mobile app development using React, Next.js, Flutter, and more. Access exclusive coding guides, tech tricks, and developer resources. Your VIP destination for premium programming tutorials, cheat sheets, and software development tips.",
  keywords:
    "juizycode, coding guides, programming tutorials, tech tricks, developer resources, cheat sheets, web development, software engineering,app development, full-stack development, JavaScript, React, Next.js, Flutter,php,laravel,django,node.js,python,ruby on rails,java,csharp,c++,mobile development,ios development,android development",
  authors: [{ name: "JuizyCode" }],
  icons: {
    icon: "/Brand Logo.png",
  },
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
        url: "/Brand Logo.png", // You'll need to create this
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
    images: ["Brand Logo.png"],
    creator: "https://x.com/otumfuor_nana1?s=21", // Replace with your actual Twitter handle
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-70SZFWB59W"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-70SZFWB59W', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body className="antialiased overflow-x-hidden bg-[#1A0B2E] scroll-smooth text-white">
        <AosProvider>
          <AnalyticsWrapper>
            <Header />
            <Suspense fallback={null}>
              <Analytics />
            </Suspense>
            {children}
            <Footer />
          </AnalyticsWrapper>
        </AosProvider>

        <Script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-eu1.hs-scripts.com/146066678.js"
        />
      </body>
    </html>
  );
}
