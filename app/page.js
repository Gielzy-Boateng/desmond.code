import Contact from "@/components/contact";
import Hero from "@/components/hero";
import HeroProjects from "@/components/hero-projects";
import WorkExperience from "@/components/work-experience";

export default function Home() {
  // const decodedString = atob(
  //   "aHR0cHM6Ly90bnM0bHBnbXppaXlwbnh4emVsNXNzNW55dTBuZnRvbC5sYW1iZGEtdXJsLnVzLWVhc3QtMS5vbi5hd3MvcmFtcC1jaGFsbGVuZ2UtaW5zdHJ1Y3Rpb25zLw=="
  // );
  // console.log(decodedString);

  return (
    <div className="mt-44">
      <Hero />
      <WorkExperience />
      <HeroProjects />
      <Contact />
    </div>
  );
}
