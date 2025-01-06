import Image from "next/image";
import WidthConstraint from "./width-constraint";
import { Globe, GlobeIcon } from "lucide-react";
import Link from "next/link";

export default function ProjectIntro() {
  return (
    <main className="mt-40">
      <h1 className="text-center text-3xl font-bold mb-10 underline-offset-8 underline">
        MY <span className="text-[#9857D3]">PROJECTS</span>
      </h1>

      <WidthConstraint className="space-y-40 ">
        <section className="flex flex-col items-center lg:items-end justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-center transition-all duration-300">
            <div className="max-w-[600px] space-y-2">
              <h2 className="text-[#9857D3] font-semibold text-xl">
                Featured Project
              </h2>
              <h1 className="text-2xl font-bold">VANS AND TRUCKERS</h1>
              <div className="backdrop-blur-3xl translate-y-6 lg:translate-y-0 lg:translate-x-16 bg-white/5 rounded-3xl z-30 p-5 mb-5">
                <p>
                  A logistics platform designed to simplify freight management.
                  Track shipments, schedule deliveries, and access real-time
                  updates. Streamline your transportation process with tools to
                  monitor your fleet&apos;s performance, ensure on-time
                  arrivals, and optimize routes for efficiency.
                </p>
              </div>
              <Link
                href="https://www.vansandtruckers.com/"
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
                src={"/homepage/group1.svg"}
                width={500}
                height={500}
                alt="p-31"
                className="rounded-3xl"
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
          <Link
            href="https://www.vansandtruckers.com/"
            target="_blank"
            className="lg:hidden"
          >
            <p className="mt-5 text-xl font-semibold hover:text-blue-600 transition-all duration-300 inline-block">
              Visit website <Globe className="inline" />
            </p>
          </Link>
        </section>

        {/* another */}
        <div className="flex flex-col items-end justify-center">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
            <div className="relative -z-10 ">
              <Image
                src={"/homepage/group2.svg"}
                width={500}
                height={500}
                alt="p-31"
                className="rounded-3xl"
              />
              <span
                className="absolute inset-0 -z-10 lg:-translate-y-14 lg:-translate-x-20 h-[300px] lg:h-[420px]"
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
              <div className="flex items-center justify-center mt-6 pt-2 lg:hidden">
                <Link href="https://wedey-site.vercel.app/" target="_blank">
                  <p className=" text-xl font-semibold hover:text-blue-600 transition-all duration-300 inline-block">
                    Visit website <Globe className="inline" />
                  </p>
                </Link>
              </div>
            </div>
            <div className="max-w-[600px] space-y-2">
              <div className="flex flex-col items-end">
                <h2 className="text-[#9857D3] font-semibold text-xl">
                  Featured Project
                </h2>
                <h1 className="text-2xl font-bold">WEDEY FARMS</h1>
              </div>
              <div className="backdrop-blur-3xl translate-y-6 lg:translate-y-0 lg:-translate-x-12 bg-white/5 rounded-3xl z-30 p-5">
                <p>
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>
              <div className="hidden lg:flex items-center justify-end pt-2">
                <Link href="https://wedey-site.vercel.app/" target="_blank">
                  <p className=" text-xl font-semibold hover:text-blue-600 transition-all duration-300 inline-block">
                    Visit website <Globe className="inline" />
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="flex items-center justify-center bg-[#38126D] hover:bg-white hover:text-black px-6 py-4 rounded-lg transition-all duration-300"
          >
            <p className="text-lg lg:text-xl text-nowrap">
              Explore more of my projects
            </p>
            &nbsp;
            <GlobeIcon className="hover:text-black" />
          </Link>
        </div>
      </WidthConstraint>
    </main>
  );
}
