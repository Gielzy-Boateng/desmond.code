import Link from "next/link";
import Image from "next/image";
import WidthConstraint from "@/components/width-constraint";
import Build from "@/components/build";
import Certification from "@/components/certification";

export default function About() {
  return (
    <WidthConstraint className="mt-28 text-xl gap-y-10 py-44 flex flex-col items-center justify-center ">
      <Image src="/about/about-me.png" width={300} height={300} alt="Me" />
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
      {/* <hr className="border-solid border-2 w-full border-white" /> */}
      <div className="space-y-2">
        <p className="text-blue-400 font-bold text-center  leading-[1.4]">
          Some of my proudest achievements include building and deploying
          multiple websites and apps, such as;
        </p>
        <ul className="list-disc space-y-3 px-3  leading-[1.4]">
          <li>
            <strong>Wedey Farms</strong> – A platform supporting sustainable
            farming practices.
          </li>
          <li>
            <strong>Fifth Avenue</strong> – A platform showcasing Fifth Avenue
            Luxury Apartments, featuring modern layouts, detailed property
            listings, and high-quality visuals.
          </li>
          <li>
            <strong>Vans and Truckers</strong> – A website dedicated to vehicle
            rental and logistics services.
          </li>
        </ul>
      </div>
      <Link
        href="/projects"
        className=" bg-[#38126D] hover:bg-white hover:text-black px-6 py-4 rounded-lg transition-all duration-300"
      >
        <p>Discover More Projects</p>
      </Link>
      {/* <hr className="border-solid border-2 w-full border-white" /> */}
      <Certification />
      {/* <hr className="border-solid border-2 border-white w-full" /> */}
      <Build />
    </WidthConstraint>
  );
}
