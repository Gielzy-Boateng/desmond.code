import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";

export default function Certification() {
  const certifications = [
    {
      title: "React – The Complete Guide",
      issuer: "Udemy",
      year: "2023",
      credentialId: "UC-...",
      skills: ["React", "Hooks", "Redux"],
    },
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      year: "2022",
      credentialId: "UC-...",
      skills: ["Full-Stack", "Node.js", "MongoDB"],
    },
    {
      title: "JavaScript Algorithms",
      issuer: "Udemy",
      year: "2023",
      credentialId: "UC-...",
      skills: ["DSA", "Problem Solving"],
    },
    {
      title: "Computer Science Degree",
      issuer: "Udemy",
      year: "2024",
      credentialId: "UC-...",
      skills: ["Theory", "Architecture"],
    },
  ];

  return (
    <div className="w-full py-20" data-aos="fade-up">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30" />
          <Image
            src="/about/certification.jpg"
            width={120}
            height={120}
            alt="Certifications"
            className="relative rounded-full border-4 border-purple-500/30"
          />
        </div>
        <h2 className="text-4xl font-bold mb-4">Certifications & Learning</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Continuous learning is part of my DNA. Here's how I stay sharp.
        </p>
      </div>

      {/* Certification Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {certifications.map((cert, i) => (
          <div
            key={cert.title}
            data-aos="fade-up"
            data-aos-delay={i * 50}
            className="group relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="bg-purple-500/20 p-3 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                <Award className="w-6 h-6 text-purple-400" />
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  {cert.issuer} • {cert.year}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-white/5 rounded-full text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="text-xs text-purple-400 flex items-center gap-1 hover:text-purple-300 transition-colors">
                  View Credential
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-16 pt-16 border-t border-purple-500/20">
        <div className="text-center" data-aos="zoom-in">
          <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
          <div className="text-sm text-gray-400">Hours of Learning</div>
        </div>
        <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
          <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
          <div className="text-sm text-gray-400">Certifications</div>
        </div>
        <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
          <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
          <div className="text-sm text-gray-400">Curiosity</div>
        </div>
      </div>
    </div>
  );
}
