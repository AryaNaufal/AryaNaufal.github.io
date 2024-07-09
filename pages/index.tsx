import Image from "next/image";
import About from "./Components/Layout/About";
import Project from "./Components/Layout/Project";
import Education from "./Components/Layout/Education";
import Skills from "./Components/Layout/Skills";

export default function Home() {
  return (
    <>
      <section className="container flex flex-col justify-center gap-5 mx-auto mt-20">
        <Image
          src={"354a06f6-3e4d-4238-bb1c-60b8fd5f2275.jpeg"}
          alt=""
          width={50}
          height={50}
          className="object-cover mx-auto rounded-full h-60 w-60"
        />
        <div className="text-center">
          <h1 className="mb-3 text-4xl font-bold md:text-5xl">Arya Naufal</h1>
          <span className="font-semibold text-md md:text-xl">
            Software Engineer
          </span>
        </div>
      </section>

      <section id="about" className="container pt-16 lg:pt-24">
        <About />
      </section>

      <section id="skills" className="container pt-16 lg:pt-24">
        <Skills />
      </section>

      <section id="education" className="container pt-16 lg:pt-24">
        <Education />
      </section>

      <section id="project" className="container pt-16 lg:pt-24">
        <Project />
      </section>
    </>
  );
}
