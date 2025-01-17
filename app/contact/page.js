import FormField from "@/components/form-field";
import WidthConstraint from "@/components/width-constraint";

export default function Contact() {
  return (
    <div className="mt-20 py-28">
      <WidthConstraint className="flex gap-y-2 text-xl font-semibold flex-col items-center justify-center">
        <div className="mb-10">
          <video
            width="200"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            preload="auto"
            className="rounded-full"
          >
            <source src="/contact/time.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h1 className="text-2xl font-bold text-center leading-[1.7]">
          Hey there, welcome to my contact page! 🎉
          <br className="" /> You&apos;ve made it—finally, the ticking clock
          says it&apos;s time to make your move! ⏳
        </h1>
        <p className="text-center  text-[#FFD700]">
          Got a project, an idea, or want to hire Me?
        </p>
        <p className="text-center  text-[#FFD700]">
          Don&apos;t wait too long—let&apos;s connect and make something
          incredible happen!
        </p>
        <FormField />
      </WidthConstraint>
    </div>
  );
}
