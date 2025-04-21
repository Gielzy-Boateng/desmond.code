import "./globals.css";
import Script from "next/script";
import AosProvider from "@/components/aos-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

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

        {/* <!-- Start of HubSpot Embed Code --> */}
        <Script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-eu1.hs-scripts.com/146066678.js"
        />
        {/* <!-- End of HubSpot Embed Code --> */}
      </body>
    </html>
  );
}

// bg-[#1A0B2E] other pages color
