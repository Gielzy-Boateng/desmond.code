// app/sitemap.js
export default function sitemap() {
  const baseUrl = "https://juizycode.vip";

  // Add all your pages here
  const routes = [
    "",
    "/projects",
    "/cheatvault",
    "/contact",
    "/about",
    // Add more routes as needed
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}

// app/robots.js (or robots.txt.js)
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://juizycode.vip/sitemap.xml",
  };
}