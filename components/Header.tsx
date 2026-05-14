"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastrScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastrScroll(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header
      className={`fixed top-0 z-50 w-full bg-zinc-800/80 text-white px-6 py-4 shadow transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* logo */}
        <div className="text-xl font-bold">RB</div>

        {/* navbar */}
        <nav className="flex gap-6 text-sm font-medium">
          <button
            onClick={() => scrollToSection("about")}
            className="hover:underline"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection("expertise")}
            className="hover:underline"
          >
            Core Tech
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:underline"
          >
            Projects
          </button>
        </nav>
      </div>
    </header>
  );
}
