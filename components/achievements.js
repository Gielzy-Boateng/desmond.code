import Link from "next/link";
import Image from "next/image";
export default function Achievements() {
  return (
    <div className="flex flex-col items-center gap-y-10">
      <div>
        {/* <video
          width="200"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="rounded-full"
        >
          <source src="/about/illusion.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <Image
          src="/about/gold-3.jpg"
          width={200}
          height={200}
          alt="Gold"
          className="rounded-full"
        />
      </div>

      <div className="space-y-2">
        <p className=" font-bold text-center  leading-[1.4]">
          Some of my proudest achievements include building and deploying
          multiple websites and apps, such as;
        </p>
        <ul className="list-disc space-y-3 px-3  leading-[1.4]">
          <li>
            <strong>Wedey Farms</strong> – A platform supporting sustainable
            farming practices.
          </li>
          <li>
            <strong>Fifth Avenue</strong> – A platform showcasing Fifth Avenue
            Luxury Apartments, featuring modern layouts, detailed property
            listings, and high-quality visuals.
          </li>
          <li>
            <strong>Vans and Truckers</strong> – A website dedicated to vehicle
            rental and logistics services.
          </li>
        </ul>
      </div>
      <Link
        href="/projects"
        className=" bg-[#38126D] hover:bg-white hover:text-black px-6 py-4 rounded-lg transition-all duration-300"
      >
        <p>Discover More Projects</p>
      </Link>
    </div>
  );
}
