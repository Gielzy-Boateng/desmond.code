import Image from "next/image";

import WidthConstraint from "./width-constraint";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="">
      <WidthConstraint className="flex flex-col lg:flex-row items-center justify-between space-y-20 lg:space-x-5">
        {/* <div className="absolute -translate-y-20 lg:-translate-y-10">
          <Image
            src="/homepage/new-bulb.png"
            width={300}
            height={300}
            alt="Nana"
            className=""
          />
        </div> */}
        <div className="mt-5 max-w-[550px] text-xl flex flex-col ">
          <h1
            data-aos="fade-down"
            className="header text-center lg:text-start "
          >
            &ldquo;Hello WORLD 👋 &rdquo;{" "}
          </h1>
          <h2 data-aos="fade-down" className="text-center lg:text-start">
            I AM{" "}
            <span className="header text-[#FFD700] text-2xl">
              DESMOND NANA BOATENG
            </span>
          </h2>
          <p
            data-aos="fade-up"
            className=" font-semibold text-xl mb-5 text-center lg:text-start"
          >
            A passionate software engineer dedicated to building innovative,
            user-centric solutions. I specialize in crafting seamless web and
            mobile experiences, turning ideas into reality with clean, efficient
            code. Let&apos;s create something amazing together!
          </p>
          <button className="hidden hover:bg-white hover:text-black px-6 py-4 rounded-lg transition-all duration-300 lg:block mt-5 text-nowrap bg-[#38126D]">
            Let&apos;s get started&nbsp; <Mail className="inline size-6" />
          </button>
        </div>

        <div className="flex flex-col gap-y-5 lg:block lg:gap-y-0">
          <Image
            src="/homepage/new-me.png"
            width={400}
            height={400}
            alt="Nana"
            className=""
            priority
          />
          <Link
            href="/contact"
            className="lg:hidden z-20 font-semibold mt-5 text-nowrap bg-[#38126D] hover:bg-white hover:text-black px-6 py-4 rounded-lg transition-all duration-300"
          >
            <p className="text-center">
              Let&apos;s get started&nbsp; <Mail className="inline size-6" />
            </p>
          </Link>
        </div>
      </WidthConstraint>
    </div>
  );
}
