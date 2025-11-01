"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import * as gtag from "@/lib/gtag";

export function usePageTracking() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view when the path changes
    gtag.pageview(pathname);

    // Track page engagement time when component unmounts
    const startTime = Date.now();
    return () => {
      const endTime = Date.now();
      const timeSpent = Math.round((endTime - startTime) / 1000); // Convert to seconds
      
      gtag.event({
        action: "page_engagement",
        category: "engagement",
        label: pathname,
        value: timeSpent
      });
    };
  }, [pathname]);
}