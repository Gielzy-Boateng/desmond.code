import { links } from "@/constants";
import Image from "next/image";
import WidthConstraint from "./width-constraint";
import Link from "next/link";
// import { useEffect, useState } from "react";

export default function Footer() {
  const currentDate = new Date().getFullYear();

  // const [enableAOS, setEnableAOS] = useState(false);

  // useEffect(() => {
  //   // Check screen width and update state
  //   if (window.innerWidth < 768) {
  //     setEnableAOS(true);
  //   }
  // }, []);

  return (
    // <footer className="bg-gradient-to-br from-[#130428] via-[#38126D] to-[#190634]">
    <footer className="bg-black">
      <WidthConstraint>
        <section className=" py-8 flex flex-col items-center justify-center mt-10 space-y-20 mb-5">
          <div>
            <Link href="/">
              <Image
                src="/footer-pic.png"
                width={200}
                height={200}
                alt="Brand"
                className=""
              />
              {/* <video
                width="200"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="rounded-full"
              >
                <source src="/latest.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-6">
            {links.map((link, i) => (
              <Link
                // data-aos={enableAOS ? "fade-up" : undefined}
                // data-aos-delay={enableAOS ? link.delay : undefined}
                href={link.url}
                target="_blank"
                key={i}
              >
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
            <Link href="https://desmond-code.vercel.app/" target="_blank">
              Designed by dev_desmond
            </Link>
          </p>
        </div>
      </WidthConstraint>
    </footer>
  );
}
