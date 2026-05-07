import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="mx-6 mt-14">
      <h2 className="mb-6 text-lg font-bold">Projects</h2>
      <div className="grid gap-14 lg:grid-cols-3 lg:gap-8">
        {/*Notes App Project*/}
        <div className="flex flex-col items-center text-center transition duration-300 hover:-translate-y-1">
          <Image
            src="/notes-app.png"
            alt="Notes App"
            width={500}
            height={300}
            className="rounded-xl border object-cover"
          />
          <Link
            href="https://notes-app-six-hazel.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-xl font-bold hover:underline"
          >
            Notes App
          </Link>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-700">
            Developed a note-taking application with CRUD functionality, local
            state management, and reusable component architecture, focused on
            delivering a clean and intuitive user experience.
          </p>
          <p className="mt-3 font-bold text-gray-700">
            TypeScript · Next.js · React · Tailwind CSS
          </p>
        </div>
        {/*Weather App Projects*/}
        <div className="flex flex-col items-center text-center transition duration-300 hover:-translate-y-1">
          <Image
            src="/weather-app.png"
            alt="Weather App"
            width={500}
            height={300}
            className="rounded-xl border object-cover"
          />
          <Link
            href="https://weather-app-iota-virid-51.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-xl font-bold hover:underline"
          >
            Weather App
          </Link>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-700">
            Created to learn API integration, asynchronous data fetching, and
            responsive search functionality while displaying real-time weather
            information in a user-friendly layout.
          </p>
          <p className="mt-3 font-bold text-gray-700">
            TypeScript · Next.js · React · Tailwind CSS · REST API
          </p>
        </div>
        {/*Recipe Finder App Project*/}
        <div className="flex flex-col items-center text-center transition duration-300 hover:-translate-y-1">
          <Image
            src="/recipe-finder-app.png"
            alt="Recipe Finder app"
            width={500}
            height={300}
            className="rounded-xl border object-cover"
          />
          <Link
            href="https://recipe-finder-app-coral.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-xl font-bold hover:underline"
          >
            Recipe Finder App
          </Link>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-700">
            Designed to improve routing, dynamic pages, and API data handling
            through a recipe discovery platform with searchable meals and clean
            navigation flow.
          </p>
          <p className="mt-3 font-bold text-gray-700">
            TypeScript · Next.js · React · Tailwind CSS · REST API · Dynamic
            Routing
          </p>
        </div>
      </div>
    </section>
  );
}
