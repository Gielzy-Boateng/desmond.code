import Image from "next/image";
import WidthConstraint from "./width-constraint";
import { workExperience } from "@/constants";

export default function WorkExperience() {
  return (
    <WidthConstraint className="pt-96 lg:pt-44 pb-96 lg:pb-44">
      {/* <h1 className="font-bold mt-10 lg:mt-0 text-2xl absolute -translate-y-96 lg:translate-y-0 ">
        WORK EXPERIENCE
      </h1> */}
      {/* <div className="border-b-4 border-[#4F228D] font-bold w-28 -translate-y-96 lg:translate-y-0  " /> */}
      <div className="bg-[url(/homepage/gradient.png)] bg-contain bg-center bg-no-repeat h-[500px] relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <h1 className="font-bold mt-10 lg:mt-0 text-2xl absolute -translate-y-24 lg:translate-y-14 xl:-translate-y-20 ">
              WORK EXPERIENCE
            </h1>
            {workExperience.map((work) => (
              <div
                key={work.title}
                className="flex items-center gap-x-5 bg-gradient-to-br from-[#130428] via-[#38126D] to-[#190634] py-4 px-6 rounded-xl border-t-4 border-[#4F228D]"
              >
                <span>
                  <Image
                    src={work.icon}
                    width={100}
                    height={100}
                    alt={work.title}
                    className=""
                    priority
                  />
                </span>
                <div>
                  <h1 className="font-semibold text-xl text-center">
                    {work.company}
                  </h1>
                  <h1 className="font-semibold text-lg  ">{work.title}</h1>
                  <div className="border-b-2 border-white w-20 mb-2 text-white" />
                  <ul className="list-disc">
                    {work.responsibilities.map((res, i) => (
                      <li key={i}>{res}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WidthConstraint>
  );
}
