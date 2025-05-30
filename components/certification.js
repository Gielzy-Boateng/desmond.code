import Image from "next/image";

export default function Certification() {
  return (
    <div className="flex flex-col items-center gap-y-10 mt-20">
      <Image
        src="/about/certification.jpg"
        width={200}
        height={200}
        alt="Certification"
        className="rounded-full"
      />
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-3xl font-bold underline underline-offset-4">
          Certifications
        </h1>
        <h3 className="text-center lg:text-start">
          I have completed several certifications to build and strengthen my
          expertise in web development ;
        </h3>
        <ul className="list-disc space-y-2 px-3">
          <li>
            <strong>HTML & CSS Certification</strong> – Udemy, Sololearn
          </li>
          <li>
            <strong>JavaScript Programming</strong> – Udemy
          </li>
          <li>
            <strong>Web Development Certification</strong> – Udemy
          </li>
          <li>
            <strong>React – The Complete Guide</strong> – Udemy
          </li>
          <li>
            <strong>Computer Science Degree</strong> – Udemy
          </li>
        </ul>
      </div>
    </div>
  );
}
