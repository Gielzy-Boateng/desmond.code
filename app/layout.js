import "./globals.css";
import Script from "next/script";
import { Suspense } from "react";
import AosProvider from "@/components/aos-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Analytics from "@/components/Analytics";
import AnalyticsWrapper from "@/components/analytics-wrapper";

export const metadata = {
  title: "Desmond Boateng | Full-Stack Developer",
  description:
    "Software Engineer skilled in web and mobile app development using React, Next.js, Flutter, and more.",
  icons: {
    icon: "/Brand Logo.png",
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
