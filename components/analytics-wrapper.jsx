"use client";

import { usePageTracking } from "@/lib/hooks/usePageTracking";

export default function AnalyticsWrapper({ children }) {
  usePageTracking();
  return <>{children}</>;
}
