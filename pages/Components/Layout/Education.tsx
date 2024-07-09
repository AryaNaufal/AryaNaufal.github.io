import { useTheme } from "../../context/theme-context";

export default function Education() {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "light" ? "text-slate-800" : "text-white"
      } md:flex w-full justify-between p-5`}
    >
      <div className="md:w-[50%]">
        <h2 className="mb-10 text-xl font-bold md:text-3xl">
          Education 📑
        </h2>
        <ol className="relative border-gray-200 border-s dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Tangerang Selatan, ID / 2019 - 2022
            </time>
            <h3 className="text-lg font-semibold">SMK Letris Indonesia 2</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              RPL (Software Engineering)
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Tangerang Selatan, ID / 2022 - Present
            </time>
            <h3 className="text-lg font-semibold">Universitas Pamulang</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Informatic Engineering
            </p>
          </li>
        </ol>
      </div>
      <div className="md:w-[50%]">
        <h2 className="mb-10 text-xl font-bold md:text-3xl">
          Course and Training 💻
        </h2>
        <ol className="relative border-gray-200 border-s dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Tangerang Selatan, ID / Permanent
            </time>
            <h3 className="text-lg font-semibold">
              Codepolitan (KelasFullstack)
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Learn All Fundamental about Basic Front End and Basic Back End
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Tangerang Selatan, ID / 2021
            </time>
            <h3 className="text-lg font-semibold">
              Digitalent (Junior Web Developer)
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Learn Basic PHP
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
