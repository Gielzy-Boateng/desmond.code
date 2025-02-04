// import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";
import AosProvider from "@/components/aos-provider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Desmond Boateng | Full-Stack Developer",
  description:
    " Software Engineer skilled in web and mobile app development using React, Next.js, Flutter, and more.",
  icons: {
    icon: "/brand.png", // Use your PNG file here
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased overflow-x-hidden bg-[#1A0B2E] scroll-smooth  text-white`}
      >
        <AosProvider>
          <Header />
          {children}
          <Footer />
        </AosProvider>
      </body>
    </html>
  );
}

// bg-[#1A0B2E] other pages color
