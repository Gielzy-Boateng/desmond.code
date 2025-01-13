import WidthConstraint from "./width-constraint";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";
import OddProject from "./odd";
import EvenProject from "./even-project";

export default function ProjectIntro() {
  return (
    <main className="mt-40">
      <h1 className="text-center text-3xl font-bold mb-10 underline-offset-8 underline">
        MY <span className="text-[#9857D3]">PROJECTS</span>
      </h1>

      <WidthConstraint className="space-y-32 ">
        <OddProject
          projectTitle="VANS AND TRUCKERS"
          projectDescription="A logistics platform designed to simplify freight management.
                Track shipments, schedule deliveries, and access real-time
                updates. Streamline your transportation process with tools to
                monitor your fleet's performance, ensure on-time arrivals,
                and optimize routes for efficiency."
          projectLink="https://www.vansandtruckers.com/"
          projectImage="/homepage/pic-5.png"
        />

        <EvenProject
          projectImage="/homepage/pic-1.png"
          projectLink="https://wedey-site.vercel.app/"
          projectTitle="WEDEY FARMS"
          projectDescription="A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more."
        />

        <div className="flex items-center justify-center">
          <Link
            href="/projects"
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
