import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="mx-6 mt-14">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <section className="flex flex-col gap-4 lg:w-1/2">
          <h2 className="text-lg font-bold">About Me</h2>
          <p className="text-gray-700">
            I&apos;m <span className="font-semibold">Raka Bayu</span>, a
            self-taught frontend developer passionate about building modern,
            responsive, and user-friendly web applications.
          </p>
          <p className="leading-relaxed text-gray-700">
            Over the past year, I have been continuosly improving my skills in{" "}
            <span className="font-semibold">
              JavaScript, React, Next.js, TypeScript{" "}
            </span>
            and <span className="font-semibold">Tailwind CSS.</span> through
            hands-on learning and personal projects.
          </p>
          <p className="leading-relaxed text-gray-700">
            I enjoy creating{" "}
            <span className="font-semibold">user interfaces</span>, solving
            technical problems, and learning how{" "}
            <span className="font-semibold">real-world applications</span> are
            designed built.
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
