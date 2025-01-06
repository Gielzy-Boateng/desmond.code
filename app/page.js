import Contact from "@/components/contact";
import Hero from "@/components/hero";
import HeroProjects from "@/components/hero-projects";
import WorkExperience from "@/components/work-experience";

export default function Home() {
  return (
    <div className="mt-44">
      <Hero />
      <WorkExperience />
      <HeroProjects />
      <Contact />
    </div>
  );
}
