import { useTheme } from "../../context/theme-context";
import Card from "../Card";

export default function Project() {
  const { theme } = useTheme();

  const portfolio = [
    {
      title: "Toko Onlen",
      featuredImg:
        "toko-onlen.png",
      description: "my own project which aims to improve back end skills.",
      platform: "Web",
      tech: "Next.js",
      repository: "https://github.com/AryaNaufal/toko-onlen.git",
    },
  ];

  return (
    <div
      className={`${
        theme === "light" ? "text-slate-800" : "text-white"
      } p-5 flex flex-col justify-center`}
    >
      <h2 className="text-3xl font-bold text-center">Project 📋</h2>
      <div className="grid gap-3 mt-6 md:grid-cols-3">
        {portfolio.map((itemProps, index) => (
          <Card key={index} {...itemProps} />
        ))}
      </div>
    </div>
  );
}
