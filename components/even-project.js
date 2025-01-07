import Image from "next/image";
import { Globe } from "lucide-react";
import Link from "next/link";

export default function EvenProject({
  projectDescription,
  projectTitle,
  projectLink,
  projectImage,
}) {
  return (
    <section className="flex flex-col items-end justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className="relative lg:-z-10 ">
          <Image
            src={projectImage}
            width={500}
            height={500}
            alt="p-31"
            className="rounded-3xl"
          />

          <span
            className="absolute hidden lg:block inset-0 -z-20 lg:-translate-y-14 lg:-translate-x-20 h-[300px] lg:h-[420px]"
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
          <div className=" flex items-center  justify-center mt-10 pt-2 lg:hidden">
            <Link href={projectLink} target="_blank" className=" block">
              <p className=" text-xl font-semibold hover:text-blue-600 transition-all duration-300 inline-block">
                Visit website <Globe className="inline" />
              </p>
            </Link>
          </div>
        </div>

        <div className="max-w-[600px] space-y-2">
          <div className="flex flex-col items-end">
            <h2 className="text-[#9857D3] sfont-semibold text-xl">
              Featured Project
            </h2>
            <h1 className="text-2xl font-bold">{projectTitle}</h1>
          </div>
          <div className="backdrop-blur-lg translate-y-6 lg:translate-y-0 lg:-translate-x-12 bg-white/5 rounded-3xl z-30 p-5">
            <p>{projectDescription}</p>
          </div>
          <div className="hidden lg:flex items-center justify-end pt-2">
            <Link href={projectLink} target="_blank">
              <p className=" text-xl font-semibold hover:text-blue-600 transition-all duration-300 inline-block">
                Visit website <Globe className="inline" />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
