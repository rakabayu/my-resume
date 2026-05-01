import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="mx-6 mt-14">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <section className="flex flex-col gap-4 lg:w-1/2">
          <h2 className="text-lg font-bold">About Me</h2>
          <p className="text-gray-700">
            Greetings! I&apos;m Raka Bayu, you can call me{" "}
            <span className="font-semibold">Raka</span>
          </p>
          <p className="leading-relaxed text-gray-700">
            I am a self-taught frontend developer who enjoys building modern,
            responsive web applications whie continuosly improving my skills in{" "}
            <span className="font-semibold">
              Javascript, React, Next.js, Typescript{" "}
            </span>
            and <span className="font-semibold">Tailwind CSS.</span>
          </p>
          <p className="leading-relaxed text-gray-700">
            Through personal projects and hands-on practice, I have developed a
            strong interest in creating clean{" "}
            <span className="font-semibold">
              user interfaces, solving problems
            </span>{" "}
            and learning how{" "}
            <span className="font-semibold">real-world applications</span> are
            built.
          </p>
        </section>
        <section className="flex justify-center lg:w-1/2">
          <Image
            src="/profile.png"
            alt="Raka Bayu"
            width={280}
            height={280}
            className="rounded-full object-cover grayscale transition duration-500 hover:scale-105 hover:grayscale-0"
          />
        </section>
      </div>
    </section>
  );
}
