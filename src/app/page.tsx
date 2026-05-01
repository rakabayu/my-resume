import AboutMe from "../../components/AboutMe";
import Greeting from "../../components/Greeting";
import Expertise from "../../components/Expertise";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Header from "../../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="mx-12 mt-24">
          <Greeting />
          <AboutMe />
          <Expertise />
          <Projects />
        </div>

        <Contact />
      </main>
    </>
  );
}
