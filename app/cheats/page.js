'"use client";';

import React from "react";
import CheatVault from "@/components/cheat-vault";
import WidthConstraint from "@/components/width-constraint";

export const metadata = {
  title: "Code Cheat Vault | JuizyCode - Developer Resources",
  description:
    "Access JuizyCode's collection of code snippets, programming tips, and developer resources. Find helpful examples from YouTube tutorials and streamline your development process.",
  keywords:
    "code snippets, programming tips, developer resources, coding tutorials, cheat sheets, web development tricks, software engineering tips, React examples, Next.js tutorials, Flutter guides",
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
    canonical: "https://juizycode.vip/cheats",
  },
  openGraph: {
    title: "Code Cheat Vault - JuizyCode Developer Resources",
    description:
      "Access a curated collection of code snippets, programming tips, and developer resources from JuizyCode's YouTube tutorials.",
    url: "https://juizycode.vip/cheats",
    siteName: "JuizyCode",
    images: [
      {
        url: "/Brand Logo.png",
        width: 1200,
        height: 630,
        alt: "JuizyCode - Developer Resources & Code Snippets",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Cheat Vault - JuizyCode Developer Resources",
    description:
      "Access code snippets and developer resources from YouTube tutorials.",
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

export default function Cheats() {
  return (
    <WidthConstraint className="mt-20 py-20">
      {/* <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Code Cheat Vault
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Welcome to my collection of code snippets, tips, and resources from my
          YouTube tutorials. Find helpful code examples and development tricks
          mentioned in my videos, all in one place.
        </p>
      </div> */}
      <CheatVault />
    </WidthConstraint>
  );
}
