import IconPillButton from "./IconPillButton";

export default function Expertise() {
  return (
    <section id="expertise" className="mx-6 mt-14">
      <h2 className="mb-5 text-lg font-bold">Expertise</h2>
      <div className="flex flex-wrap gap-3">
        {/* Typescript */}
        <IconPillButton
          label="Typescript"
          blackIcon="/typescript-black.png"
          whiteIcon="/typescript-white.png"
        />

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
          label="Tailwind"
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
