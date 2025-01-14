import Image from "next/image";
import WidthConstraint from "@/components/width-constraint";
import React from "react";
import EvenProject from "@/components/even-project";
import OddProject from "@/components/odd";

export default function Projects() {
  return (
    <main className=" mt-28 py-24  ">
      <WidthConstraint className="space-y-32">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-32">
          <span>
            <Image
              src={"/project/project.png"}
              width={300}
              height={300}
              alt="project"
              className="rounded-lg"
              priority
            />
          </span>
          <div className="text-4xl font-bold space-y-3 ">
            <h1 className="text-center ">MY PROJECTS</h1>
            <p className="text-2xl text-center text-[#9857D3]">
              Made with love
            </p>
          </div>
        </div>

        <div className="text-xl space-y-5 ">
          <p className="tracking-wide">
            Welcome to my Projects Portfolio! As a passionate software engineer,
            I specialize in crafting innovative, high-performance solutions
            tailored to meet diverse client needs. Here, you&apos;ll find a
            showcase of the work I&apos;ve done across various industries—from
            dynamic web applications and mobile solutions to cutting-edge
            integrations.
          </p>
          <p>
            Each project reflects a commitment to excellence, attention to
            detail, and a collaborative approach to problem-solving. Whether
            you&apos;re looking for inspiration or insights into how I can help
            bring your ideas to life, explore the results I&apos;ve delivered
            for clients just like you.
          </p>
        </div>

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
          projectDescription="Wedey Farms is dedicated to producing fresh, high-quality crops and livestock through sustainable farming practices. With a strong focus on innovation, eco-friendly methods, and advanced techniques, it supports local communities, promotes healthy living, and ensures a greener future for all."
        />

        <OddProject
          projectImage="/homepage/pic-3.png"
          projectDescription="A website designed for showcasing Fifth Avenue Luxury Apartments, featuring modern layouts, detailed property listings, and high-quality visuals. Built to provide users with a seamless experience for exploring premium apartments, booking viewings, and contacting management."
          projectLink="https://www.fifthavenueluxuryapartments.com/"
          projectTitle="FIFTH AVENUE LUXURY APARTMENTS"
        />
        <EvenProject
          projectImage="/homepage/pic-2.png"
          projectDescription="A football club based in Kumasi, Ghana, focused on developing talent through elite training programs. Players grow technically, tactically, and mentally, with a strong emphasis on discipline, leadership, and excellence, preparing them for success in local and global competitions."
          projectLink="https://adansiunitedfc.com/"
          projectTitle="ADANSI UNITED FC"
        />
        <OddProject
          projectImage="/homepage/pic-6.png"
          projectDescription="A website designed for Wedey Farms to showcase their fresh, organic local produce grown directly on their farms. Built to connect customers with high-quality food at affordable prices, the platform highlights their commitment to sustainability, transparency, and healthy living."
          projectLink="http://wedeyfarms.com/"
          projectTitle="WEDEY FARMS OFFICIAL SITE"
        />
        <EvenProject
          projectImage="/homepage/pic-10.png"
          projectDescription="A web application built to provide users with an intuitive and reliable currency conversion tool. Designed for speed and accuracy, it supports multiple currencies, updates exchange rates in real-time, and ensures a seamless user experience for international transactions or travel planning."
          projectLink="https://currency-converter-chi-self.vercel.app/"
          projectTitle="CURRENCY CONVERTER"
        />
        <OddProject
          projectImage="/homepage/pic-9.png"
          projectDescription="A website developed for Kobby's Apartments Lodge to showcase modern accommodation options. Featuring detailed room listings, high-quality visuals, and easy booking functionality, the platform ensures a user-friendly experience for guests seeking comfort and convenience."
          projectLink="https://kobbysapartments.vercel.app/"
          projectTitle="KOBBY'S APT AND LODGE"
        />
        <EvenProject
          projectImage="/homepage/pic-8.png"
          projectDescription="A website crafted for Authentic Phones Technic, highlighting their expertise in phone repair and maintenance. Designed with user-friendly navigation, it offers detailed service listings, appointment booking features, and insights into their commitment to quality and customer satisfaction."
          projectLink="https://authentic-phones-technique.vercel.app/"
          projectTitle="AUTHENTIC PHONES TECHNIQUE"
        />
        <OddProject
          projectImage="/homepage/pic-11.png"
          projectDescription="A basic yet functional bill checker website developed to verify and manage bills efficiently. While the platform is fully operational, it features a minimal design without added styling, focusing solely on practicality and delivering accurate results for users."
          projectLink="https://bill-checker-five.vercel.app/"
          projectTitle="BILL CHECKER"
        />
        <EvenProject
          projectImage="/homepage/pic-12.png"
          projectDescription="A website built to streamline travel planning, enabling users to create and manage personalized packing lists and itineraries. While the platform is fully functional, it features a clean and minimal design, offering an easy-to-use experience for organizing trips."
          projectLink="https://travel-list-one-psi.vercel.app/"
          projectTitle="HOME COMING TRAVEL LIST"
        />
      </WidthConstraint>
    </main>
  );
}

// bg-[#1A0B2E]
