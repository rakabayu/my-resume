import Image from "next/image";

type Props = {
  label: string;
  blackIcon: string;
  whiteIcon: string;
};

export default function IconPillButton({ label, blackIcon, whiteIcon }: Props) {
  return (
    <button className="group flex items-center gap-2 rounded-full border border-black px-4 py-2 transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white">
      <div className="relative h-5 w-5">
        <Image
          src={blackIcon}
          alt={label}
          fill
          className="object-contain opacity-100 transition group-hover:opacity-0"
        />
        <Image
          src={whiteIcon}
          alt={label}
          fill
          className="object-contain opacity-0 transition group-hover:opacity-100"
        />
      </div>
      <div>{label}</div>
    </button>
  );
}
