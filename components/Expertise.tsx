import IconPillButton from "./IconPillButton";

export default function Expertise() {
  return (
    <section id="expertise" className="mx-6 mt-14">
      <h2 className="mb-5 text-lg font-bold">Core Technologies</h2>
      <h2 className="mt-5 mb-2 text-m font-semibold">Frontend</h2>

      <div className="flex flex-wrap gap-3">
        {/* HTML */}
        <IconPillButton
          label="HTML"
          blackIcon="/html-black.png"
          whiteIcon="/html-white.png"
        />

        {/* CSS */}
        <IconPillButton
          label="CSS"
          blackIcon="/css-black.png"
          whiteIcon="/css-white.png"
        />

        {/* JavaScript */}
        <IconPillButton
          label="JavaScript"
          blackIcon="/javascript-black.png"
          whiteIcon="/javascript-white.png"
        />

        {/* Typescript */}
        <IconPillButton
          label="TypeScript"
          blackIcon="/typescript-black.png"
          whiteIcon="/typescript-white.png"
        />
      </div>

      <h2 className="mt-5 mb-2 text-m font-semibold">Framework & Tools</h2>
      <div className="flex flex-wrap gap-3">
        {/* React */}
        <IconPillButton
          label="React"
          blackIcon="/react-black.png"
          whiteIcon="/react-white.png"
        />

        {/* Next */}
        <IconPillButton
          label="Next.js"
          blackIcon="/next-black.png"
          whiteIcon="/next-white.png"
        />

        {/* Tailwind */}
        <IconPillButton
          label="Tailwind CSS"
          blackIcon="/tailwind-black.png"
          whiteIcon="/tailwind-white.png"
        />

        {/* Github */}
        <IconPillButton
          label="GitHub"
          blackIcon="/github-black.png"
          whiteIcon="/github-white.png"
        />
      </div>
    </section>
  );
}
