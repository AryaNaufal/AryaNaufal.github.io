import Image from "next/image";
import { useTheme } from "../../context/theme-context";

const LANG = {
  javascript: {
    image: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
    alt: "Javascript",
  },
  typescript: {
    image: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
    alt: "Typescript",
  },
  php: {
    image: "https://icon.icepanel.io/Technology/svg/PHP.svg",
    alt: "PHP",
  },
  astro: {
    image: "https://icon.icepanel.io/Technology/png-shadow-512/Astro.png",
    alt: "Astro",
  },
};

const DB = {
  mysql: {
    image: "https://icon.icepanel.io/Technology/svg/MySQL.svg",
    alt: "MySql",
  },
  postgre: {
    image: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
    alt: "PostgreSql",
  },
  mongodb: {
    image: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
    alt: "MongoDB",
  },
};

const Frameworks = {
  react: {
    image: "https://icon.icepanel.io/Technology/svg/React.svg",
    alt: "React JS",
  },

  expressjs: {
    image: "https://icon.icepanel.io/Technology/png-shadow-512/Express.png",
    alt: "Express JS",
  },
  nextjs: {
    image: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png",
    alt: "Next JS",
  },
  tailwind: {
    image: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    alt: "Tailwind",
  },
  bootstrap: {
    image: "https://icon.icepanel.io/Technology/svg/Bootstrap.svg",
    alt: "Bootstrap",
  },
};

const Others = {
  html: {
    image: "https://icon.icepanel.io/Technology/svg/HTML5.svg",
    alt: "HTML",
  },
  css: {
    image: "https://icon.icepanel.io/Technology/svg/CSS3.svg",
    alt: "CSS",
  },

  figma: {
    image: "https://icon.icepanel.io/Technology/svg/Figma.svg",
    alt: "Figma",
  },
  git: {
    image: "https://icon.icepanel.io/Technology/svg/Git.svg",
    alt: "Git",
  },
  insomnia: {
    image: "https://icon.icepanel.io/Technology/svg/Insomnia.svg",
    alt: "Insomnia",
  },
};

export default function Skills() {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "light" ? "text-slate-800" : "text-white"
      } w-full justify-between p-5`}
    >
      <h2 className="mb-5 text-xl font-bold md:text-3xl">Skills 🕹️</h2>
      <div className="mx-5">
        
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
  );
}
