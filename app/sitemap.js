// app/sitemap.js
export default function sitemap() {
  const baseUrl = "https://juizycode.vip";

  const routes = ["", "/projects", "/cheats", "/contact", "/about"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 1 : 0.8,
    })
  );

  return routes;
}
