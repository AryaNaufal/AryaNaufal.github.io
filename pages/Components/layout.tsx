import { useTheme } from "../context/theme-context";
import Navbar from "./navbar";

export default function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <>
      <main
        className={`${
          theme === "light"
            ? "bg-white text-slate-900"
            : "bg-slate-900 text-white"
        } min-h-screen  md:pb-5 `}
      >
        <Navbar />
        {children}
      </main>
    </>
  );
}
