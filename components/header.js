import Image from "next/image";
import WidthConstraint from "./width-constraint";
import { NavLinks } from "@/constants";
import Link from "next/link";

export default function Header() {
  return (
    <div className=" p-1 shadow-lg fixed top-0 left-0 right-0 z-40 bg-[#1A0B2E] border-b-2 border-[#1A0B2E]">
      <WidthConstraint className="flex items-center justify-between ">
        <div>
          <Link href="/">
            <Image
              src="/brand-logo.png"
              width={100}
              height={100}
              alt="My Logo"
              className="rounded-full"
              priority
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-x-10 bg-white py-5 px-5 hover:px-20 font-semibold text-black rounded-full transition-all duration-300 ">
          {NavLinks.map((nav, i) => (
            <Link
              key={nav.name}
              href={nav.link}
              className="hover:text-[#38126D] hover:font-bold transition-all duration-300"
            >
              <p>{nav.name}</p>
            </Link>
          ))}
        </div>
      </WidthConstraint>
    </div>
  );
}
