import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function Achievements() {
  const projects = [
    {
      name: "Wedey Farms",
      description:
        "AgriTech platform connecting farmers with sustainable resources",
      impact: "500+ farmers onboarded",
      tech: ["Next.js", "Firebase", "Stripe"],
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Fifth Avenue",
      description: "Luxury real estate showcase with 3D virtual tours",
      impact: "40% increase in property inquiries",
      tech: ["React", "Three.js", "Mapbox"],
      color: "from-amber-500 to-orange-600",
    },
    {
      name: "Vans and Truckers",
      description: "Full-stack logistics and fleet management system",
      impact: "15+ active fleet operators",
      tech: ["Next.js", "PostgreSQL", "Vercel"],
      color: "from-blue-500 to-cyan-600",
    },
  ];

  return (
    <div className="w-full py-20" data-aos="fade-up">
      {/* Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <Image
            src="/about/gold-3.jpg"
            width={300}
            height={300}
            alt="Achievement badge"
            className="rounded-full blur-3xl"
          />
        </div>
        <div className="relative">
          <Image
            src="/about/gold-3.jpg"
            width={120}
            height={120}
            alt="Achievement"
            className="rounded-full mx-auto mb-6 border-4 border-yellow-500/30"
          />
          <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real projects. Real impact. Here's what I've shipped.
          </p>
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projects.map((project, i) => (
          <div
            key={project.name}
            data-aos="zoom-in"
            data-aos-delay={i * 100}
            className="group relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
          >
            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="bg-purple-500/10 rounded-lg px-3 py-2 mb-4">
                <p className="text-xs text-purple-300 font-medium">
                  {project.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-white/5 rounded-full text-gray-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center" data-aos="fade-up">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
        >
          View All Projects
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
