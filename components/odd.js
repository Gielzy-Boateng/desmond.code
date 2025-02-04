import Image from "next/image";
import { Globe } from "lucide-react";
import Link from "next/link";

export default function OddProject({
  projectDescription,
  projectTitle,
  projectLink,
  projectImage,
}) {
  return (
    <div>
      <section
        data-aos="zoom-in"
        className="flex flex-col items-center lg:items-end justify-center"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center transition-all duration-300">
          <div className="max-w-[600px] space-y-2">
            <h2 className="text-[#9857D3] font-semibold text-xl">
              Featured Project
            </h2>
            <h1 className="text-2xl font-bold">{projectTitle}</h1>
            <div className="backdrop-blur-lg translate-y-6 lg:translate-y-0 lg:translate-x-16 bg-white/5 rounded-3xl z-30 p-5 mb-5">
              <p>{projectDescription}</p>
            </div>
            <Link
              href={projectLink}
              target="_blank"
              className="hidden lg:block"
            >
              <p className="mt-5 text-xl font-semibold hover:text-blue-600 transition-all duration-300 inline-block">
                Visit website <Globe className="inline" />
              </p>
            </Link>
          </div>
          <div className="relative -z-10">
            <Image
              src={projectImage}
              width={500}
              height={500}
              alt="p-31"
              className="rounded-3xl"
              priority
            />
            <span
              className="absolute inset-0 -z-10 lg:-translate-y-28 lg:translate-x-[7rem] h-[300px] lg:max-h-[430px] xl:-translate-y-24 xl:translate-x-[10rem] "
              style={{ width: "auto", aspectRatio: "12/12" }}
            >
              <Image
                src={"/homepage/gradient.png"}
                // width={900}
                // height={200}
                alt="p-31"
                fill
                className="object-cover"
              />
            </span>
          </div>
        </div>
        <Link href={projectLink} target="_blank" className="lg:hidden">
          <p className="mt-5 text-xl font-semibold hover:text-blue-600 transition-all duration-300 inline-block">
            Visit website <Globe className="inline" />
          </p>
        </Link>
      </section>
    </div>
  );
}
