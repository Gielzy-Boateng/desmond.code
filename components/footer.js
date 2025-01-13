import { links } from "@/constants";
import Image from "next/image";
import WidthConstraint from "./width-constraint";
import Link from "next/link";

export default function Footer() {
  const currentDate = new Date().getFullYear();

  return (
    // <footer className="bg-gradient-to-br from-[#130428] via-[#38126D] to-[#190634]">
    <footer className="bg-black">
      <WidthConstraint>
        <section className="flex flex-col items-center justify-center mt-10 space-y-5 mb-5">
          <div>
            <Link href="/">
              <Image
                src="/juizy-footer.png"
                width={350}
                height={350}
                alt="Brand"
                className=""
              />
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-6">
            {links.map((link, i) => (
              <div key={i}>
                <Image src={link.icon} width={30} height={30} alt={link.name} />
              </div>
            ))}
          </div>
        </section>
        <hr className="border-solid border-2 border-white" />
        <div className="flex flex-col gap-y-3 lg:gap-y-0 font-semibold lg:flex-row items-center justify-between py-5">
          <p>Copyright &copy; {currentDate} </p>
          <Link href="tel:+233571991014">Call Us Now : +233 571991014</Link>
          <p>
            <Link href="/">Designed by desmond.code</Link>
          </p>
        </div>
      </WidthConstraint>
    </footer>
  );
}
