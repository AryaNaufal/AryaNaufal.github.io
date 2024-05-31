import Image from "next/image";

const LANG = {
  javascript: {
    image: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
    alt: "Javascript"
  },
  typescript: {
    image: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
    alt: "Typescript"
  },
  php: {
    image: "https://icon.icepanel.io/Technology/svg/PHP.svg",
    alt: "PHP"
  },
  astro: {
    image: "https://icon.icepanel.io/Technology/png-shadow-512/Astro.png",
    alt: "Astro"
  },
}

const DB = {
  mysql: {
    image: "https://icon.icepanel.io/Technology/svg/MySQL.svg",
    alt: "MySql"
  },
  postgre: {
    image: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
    alt: "PostgreSql"
  },
  mongodb: {
    image: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
    alt: "MongoDB"
  },
}

const Frameworks = {
  react: {
    image: "https://icon.icepanel.io/Technology/svg/React.svg",
    alt: "React JS"
  },

  expressjs: {
    image: "https://icon.icepanel.io/Technology/png-shadow-512/Express.png",
    alt: "Express JS"
  },
  nextjs: {
    image: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png",
    alt: "Next JS"
  },
  tailwind: {
    image: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    alt: "Tailwind"
  },
  bootstrap: {
    image: "https://icon.icepanel.io/Technology/svg/Bootstrap.svg",
    alt: "Bootstrap"
  },
}

const Others = {
  html: {
    image: "https://icon.icepanel.io/Technology/svg/HTML5.svg",
    alt: "HTML"
  },
  css: {
    image: "https://icon.icepanel.io/Technology/svg/CSS3.svg",
    alt: "CSS"
  },

  figma: {
    image: "https://icon.icepanel.io/Technology/svg/Figma.svg",
    alt: "Figma"
  },
  git: {
    image: "https://icon.icepanel.io/Technology/svg/Git.svg",
    alt: "Git"
  },
  insomnia: {
    image: "https://icon.icepanel.io/Technology/svg/Insomnia.svg",
    alt: "Insomnia"
  },
}
export default function About() {
  return (
    <div className="container flex flex-col justify-center py-16 mx-auto overflow-hidden md:py-20">

      <h1 className="mb-5 text-xl font-bold md:text-3xl">About</h1>
      <div className="my-5">
        <p className="items-baseline mx-5 text-sm italic font-semibold md:text-lg">
        Hi, Im Arya Naufal, I from the city of South Tangerang, I graduated from SMK Letris Indonesia 2 majoring in software engineering. I am interested with technology.
        </p>
      </div>

      <hr className="border-1 border-slate-400" />

      {/* Skill */}
      <div className="my-10 overflow-hidden">

        <h2 className="mb-5 text-xl font-bold md:text-3xl">Technical Skills</h2>
        <div className="p-5 rounded">
          <div className="flex flex-col gap-3">

            <div className="flex flex-col gap-3">
              <span className="font-semibold">Language:</span>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {Object.keys(LANG).map((key): any => {
                  return (
                    <Image
                      key={key}
                      src={LANG[key].image}
                      alt={LANG[key].alt}
                      width={45}
                      height={45}
                      title={LANG[key].alt}
                      className="p-2 text-xl transition-all rounded bg-slate-200 md:w-14 hover:scale-110"
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-semibold">Database:</span>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {Object.keys(DB).map((key) => {
                  return (
                    <Image
                      key={key}
                      src={DB[key].image}
                      alt={DB[key].alt}
                      width={45}
                      height={45}
                      title={DB[key].alt}
                      className="p-2 transition-all rounded bg-slate-200 md:w-14 hover:scale-110"
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-semibold">Frameworks:</span>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {Object.keys(Frameworks).map((key) => {
                  return (
                    <Image
                      key={key}
                      src={Frameworks[key].image}
                      alt={Frameworks[key].alt}
                      width={45}
                      height={45}
                      title={Frameworks[key].alt}
                      className="p-2 transition-all rounded bg-slate-200 md:w-14 hover:scale-110"
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-semibold">Others:</span>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {Object.keys(Others).map((key) => {
                  return (
                    <Image
                      key={key}
                      src={Others[key].image}
                      alt={Others[key].alt}
                      width={45}
                      height={45}
                      title={Others[key].alt}
                      className="p-2 transition-all rounded bg-slate-200 md:w-14 hover:scale-110"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </div>

      <hr className="border-1 border-slate-400" />

      <div className="education">
        <h2 className="mt-10 mb-2 text-xl font-bold md:text-3xl">Education</h2>
        <div className="mx-5">
          <div className="flex flex-col justify-between text-sm md:flex-row-reverse">
            <p className="text-xs text-slate-500">Tangerang Selatan, ID / 2022</p>
            <p className="font-bold">SMK Letris Indonesia 2</p>
          </div>
          <p className="text-xs text-slate-500">Software Engineer</p>
        </div>

        <div className="course">
          <h2 className="mt-10 mb-2 text-xl font-bold md:text-3xl">Course/Training</h2>

          <div className="mx-5 mb-7">
            <div className="flex flex-col justify-between text-sm md:flex-row-reverse">
              <p className="text-xs text-slate-500">Tangerang Selatan, ID / 2020</p>
              <p className="font-bold">Codepolitan (KelasFullstack)</p>
            </div>
            <p className="text-xs text-slate-500">Learn All Fundamental about Basic Front End and Basic Back End</p>
          </div>

          <div className="mx-5 mb-7">
            <div className="flex flex-col justify-between text-sm md:flex-row-reverse">
              <p className="text-xs text-slate-500">Tangerang Selatan, ID / 2021</p>
              <p className="font-bold">Digitalent (Junior Web Developer)</p>
            </div>
            <p className="text-xs text-slate-500">Learn basic PHP</p>
          </div>



        </div>




      </div>













      {/* <div className="flex items-center justify-center">
        <div className="relative w-56 p-5 bg-red-300 rounded card">
          <img
            src="https://i.pinimg.com/736x/f6/53/5b/f6535b0b53983ade21d904d572441d9c.jpg"
            alt=""
            className="top-0"
          />
          <div className="my-5">
            <h1 className="text-xl font-bold">Judul</h1>
            <span className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, saepe?</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center transition ease-in bg-blue-300 bg-opacity-50 opacity-0 duration-750 hover:opacity-100">
            <Button className="bg-blue-500 hover:bg-blue-700" text="Button" />
          </div>

        </div>
      </div> */}

    </div >
  )
}