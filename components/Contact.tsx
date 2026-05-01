import IconPillLink from "./IconPillLink";

export default function Contact() {
  return (
    <section id="contact" className="mt-16 pb-16 bg-zinc-100 py-6">
      <div className="text-center mx-12">
        <h2 className="mb-4 text-lg font-bold">Feel Free to Reach Out!</h2>
        <p className="mx-auto max-w-2xl leading-relaxed text-gray-700">
          I am actively seeking new opprtunities at the moment, I am open to
          exploring any potential opprtunities that come my way. Feel free to
          reach out if you have any inquiries or just want to connect. I will do
          my best to respond promptly!
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
            label="Repository"
            blackIcon="/github-black.png"
            whiteIcon="/github-white.png"
            href="https://github.com/rakabayu"
          />
        </div>
      </div>
    </section>
  );
}
