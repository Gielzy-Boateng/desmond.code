import Image from "next/image";
import WidthConstraint from "./width-constraint";
import ProjectIntro from "./project-intro";

export default function HeroProjects() {
  return (
    <WidthConstraint className="">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={"/homepage/skills.png"}
          width={700}
          height={700}
          alt="Skills"
          priority
        />
      </div>
      <ProjectIntro />
    </WidthConstraint>
  );
}
