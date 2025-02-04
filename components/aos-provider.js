"use client";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AosProvider({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      once: false, // Run animation only once
      mirror: true,
    });
  }, []);

  return <>{children}</>;
}
