import IconPillLink from "./IconPillLink";

export default function Contact() {
  return (
    <section id="contact" className="mt-16 pb-16 bg-zinc-100 py-6">
      <div className="text-center mx-12">
        <h2 className="mb-4 text-lg font-bold">Get In Touch</h2>
        <p className="mx-auto max-w-2xl leading-relaxed text-gray-700">
          I am currently seeking new opportunities as a frontend developer and
          open to collaborating on meaningful projects or joining a great team.
          If you would like to discuss potential opportunities, projects, or
          simply connect, feel free to reach out. I&apos;ll do my best to
          respond as soon as possible.
        </p>{" "}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {/* My Resume */}
          <IconPillLink
            label="My Resume"
            blackIcon="/cv-black.png"
            whiteIcon="/cv-white.png"
            href="/rakabayu-cv.pdf"
          />

          {/* Repository */}
          <IconPillLink
            label="GitHub"
            blackIcon="/github-black.png"
            whiteIcon="/github-white.png"
            href="https://github.com/rakabayu"
          />
        </div>
      </div>
    </section>
  );
}
