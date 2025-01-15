import Link from "next/link";
import Image from "next/image";
import WidthConstraint from "./width-constraint";
import { PhoneCall } from "lucide-react";

export default function Contact() {
  return (
    <WidthConstraint className="my-20 lg:my-28 flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-10">
      <div>
        <Image
          src="/homepage/electronics.png"
          width={300}
          height={300}
          alt="Electronics"
          priority
        />
      </div>
      <div className="flex flex-col max-w-[600px] text-xl gap-y-10 lg:gap-y-3">
        <p className="text-center lg:text-start">
          From building powerful applications to solving complex challenges, I
          help businesses and individuals create cutting-edge solutions.
          Let&apos;s connect—whether for collaboration, consulting, or simply
          sharing ideas. Together, we can shape the future of technology. Reach
          out through any of the channels below, and let&apos;s make something
          extraordinary happen.
        </p>
        <Link href="/" className="">
          <p className="bg-[#38126D] text-center hover:bg-white hover:text-black px-6 py-4 rounded-lg transition-all duration-300">
            Contact Me&nbsp;&nbsp;
            <PhoneCall className="inline" />
          </p>
        </Link>
      </div>
    </WidthConstraint>
  );
}
