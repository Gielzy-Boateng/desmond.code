import Image from "next/image";
import WidthConstraint from "@/components/width-constraint";
import Build from "@/components/build";
import Certification from "@/components/certification";
import Achievements from "@/components/achievements";

export default function About() {
  return (
    <WidthConstraint className="mt-28 text-xl gap-y-10 py-44 flex flex-col items-center justify-center ">
      <Image
        data-aos="zoom-in"
        src="/homepage/new-me.png"
        width={300}
        height={300}
        alt="Me"
      />
      <p className="tracking-wide text-center lg:text-start leading-[1.4]">
        Hello, I&apos;m Desmond Nana Boateng, a passionate self-taught software
        engineer with a background in science turned tech enthusiast. My journey
        into software development began with a deep curiosity for solving
        real-world problems using technology.
      </p>
      <p className="tracking-wide text-center  leading-[1.4] lg:text-start">
        Starting from online courses and late-night coding sessions, I have
        honed my skills in core web technologies like{" "}
        <strong>
          HTML, CSS, JavaScript, and Tailwind CSS, as well as advanced
          frameworks and tools such as React, Next.js, Flutter, and Firebase.
        </strong>{" "}
        These enable me to craft dynamic, visually appealing, and highly
        functional web and mobile applications that prioritize user experience
        and modern design.
      </p>
      <Achievements />
      <Certification />
      <Build />
    </WidthConstraint>
  );
}
