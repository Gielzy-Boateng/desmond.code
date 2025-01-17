import Link from "next/link";

export default function Build() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-y-10">
      <div>
        <video
          width="200"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          className="rounded-full"
        >
          <source src="/about/connect-new.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-3">
        <h1 className="text-2xl text-center lg:text-start font-bold">
          Let&apos;s Build Something Extraordinary Together!
        </h1>
        <p className="text-center ">
          Ready to bring your ideas to life? Whether you&apos;re looking to
          build a stunning website, a functional mobile app, or innovative
          digital solutions, I&apos;m here to help. Let&apos;s collaborate and
          create something amazing together!
        </p>
        <Link
          href="/contact"
          className="mt-7 bg-[#38126D] hover:bg-white hover:text-black px-6 py-4 rounded-lg transition-all duration-300"
        >
          <p className="">Hire Me Now</p>
        </Link>
      </div>
    </div>
  );
}
