import Image from "next/image";

import WidthConstraint from "./width-constraint";

export default function Hero() {
  return (
    <div className="">
      <WidthConstraint className="flex flex-col lg:flex-row items-center  lg:justify-between">
        <div className="-translate-y-20 md:-translate-y-28 relative">
          <Image
            src="/homepage/bulb-2.jpg"
            width={300}
            height={300}
            alt="Nana"
            className=""
          />
        </div>
        <div className="absolute font-bold inset-0 px-10 lg:px-0 flex flex-col items-center lg:block text-lg lg:text-2xl translate-y-80 lg:translate-y-80 space-y-3 max-w-[600px]">
          <h1 className="header">&ldquo;Hello WORLD 👋 &rdquo; </h1>
          <h2 className="text-3xl text-center lg:text-start">
            I AM{" "}
            <span className="header text-[#B336FF]">DESMOND NANA BOATENG</span>
          </h2>
          <p className=" font-semibold text-xl">
            A passionate software engineer dedicated to building innovative,
            user-centric solutions. I specialize in crafting seamless web and
            mobile experiences, turning ideas into reality with clean, efficient
            code. Let&apos;s create something amazing together!
          </p>
          <button className="px-8 py-3 rounded-xl text-nowrap bg-[#38126D]">
            Let&apos;s get started 👉
          </button>
        </div>

        <div className="">
          <Image
            src="/homepage/me-4.svg"
            width={500}
            height={500}
            alt="Nana"
            className=""
          />
        </div>
      </WidthConstraint>
    </div>
  );
}
