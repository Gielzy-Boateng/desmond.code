import { links } from "@/constants";
import Image from "next/image";
import WidthConstraint from "./width-constraint";
import Link from "next/link";

export default function Footer() {
  const currentDate = new Date().getFullYear();
  // const whatsappLink =
  //   "https://wa.me/233571991014?text=Hello%20Desmond%2C%20I%20want%20you%20to%20build%20something%20cool%20for%20me";

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
              <Link href={link.url} target="_blank" key={i}>
                <Image src={link.icon} width={30} height={30} alt={link.name} />
              </Link>
            ))}
          </div>
        </section>
        <hr className="border-solid border-2 border-white" />
        <div className="flex flex-col gap-y-3 lg:gap-y-0 font-semibold lg:flex-row items-center justify-between py-5">
          <p>Copyright &copy; {currentDate} </p>
          <Link href="tel:+233571991014">Call Us Now : +233 571991014</Link>
          <p>
            <Link href="desmond-code.vercel.app">Designed by desmond.code</Link>
          </p>
        </div>
      </WidthConstraint>
    </footer>
  );
}
