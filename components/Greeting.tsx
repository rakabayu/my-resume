export default function Greeting() {
  return (
    <section id="greeting" className="mx-6 mt-10 flex flex-col gap-4">
      <p className="text-sm tracking-wide text-gray-600">Hi, my name is</p>
      <p className="text-5xl font-bold leading-none md:text-6xl">
        <span className="block">Raka</span>
        <span className="ml-6 block md:ml-10 lg:ml-16">Bayu</span>
      </p>
      <p className="max-w-md text-base leading-relaxed text-gray-700">
        I&apos;m a <span className="font-semibold">frontend-focused</span>{" "}
        software engineer dedicated to deliverig seamless user experience
        through clean design and modern web development.
      </p>
    </section>
  );
}
