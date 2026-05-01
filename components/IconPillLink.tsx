import Image from "next/image";
import Link from "next/link";

type Props = {
  label: string;
  blackIcon: string;
  whiteIcon: string;
  href: string;
};

export default function IconPillLink({
  label,
  blackIcon,
  whiteIcon,
  href,
}: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 rounded-full border border-black px-5 py-2 transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
    >
      <div className="relative h-5 w-5">
        <Image
          src={blackIcon}
          alt={label}
          fill
          className="object-contain opacity-100 transition duration-300 group-hover:opacity-0"
        />
        <Image
          src={whiteIcon}
          alt={label}
          fill
          className="object-contain opacity-0 transition duration-300 group-hover:opacity-100"
        />
      </div>
      <span>{label}</span>
    </Link>
  );
}
