import { useTheme } from "../../context/theme-context";

export default function About() {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "light" ? "text-slate-800" : "text-white"
      } container md:flex w-full justify-between p-5`}
    >
      <div className="flex flex-col justify-center mx-auto overflow-hidden">
        <h2 className="mb-5 text-xl font-bold md:text-3xl">About</h2>
        <div className="mx-5">
          <p className="items-baseline text-sm italic font-semibold md:text-justify md:text-lg">
            Hello everyone!👋, I am Arya Naufal, a web developer. I am a
            intermediate experienced and I hope with this I can always learning
            something new to be able to invent digital applications that can
            help many people in the future. Could work independently or in a
            team.
          </p>
        </div>
      </div>
    </div>
  );
}
