import Link from "next/link";
// import button from "./Elements/button";
import { IoClose, IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useTheme } from "../context/theme-context";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className={`${
          theme === "light" ? "bg-white" : "bg-slate-900 text-white"
        } z-50 sticky top-0 flex items-center w-full h-16 lg:h-24 overflow-hidden shadow-md`}
      >
        <div className="container flex items-center justify-between mx-auto">
          <Link href="/">
            <h1 className="font-mono text-lg font-bold text-transparent bg-red-400 md:text-2xl bg-clip-text bg-gradient-to-r from-blue-500 to-red-400">
              Arya Naufal
            </h1>
          </Link>

          <div className="flex items-center gap-2">
            <div className="hidden gap-5 list-none md:flex">
              <li>
                <Link href="#about">
                  <button
                    className={`${
                      theme === "light" ? "text-slate-900" : "text-gray-200"
                    } text-sm font-bold text-center bg-transparent md:text-lg hover:text-blue-500 active:text-blue-500`}
                  >
                    About
                  </button>
                </Link>
              </li>
              <li>
                <Link href="#skills">
                  <button
                    className={`${
                      theme === "light" ? "text-slate-900" : "text-gray-200"
                    } text-sm font-bold text-center bg-transparent md:text-lg hover:text-blue-500 active:text-blue-500`}
                  >
                    Skills
                  </button>
                </Link>
              </li>
              <li>
                <Link href="#education">
                  <button
                    className={`${
                      theme === "light" ? "text-slate-900" : "text-gray-200"
                    } text-sm font-bold text-center bg-transparent md:text-lg hover:text-blue-500 active:text-blue-500`}
                  >
                    Education
                  </button>
                </Link>
              </li>
              <li>
                <Link href="#project">
                  <button
                    className={`${
                      theme === "light" ? "text-slate-900" : "text-gray-200"
                    } text-sm font-bold text-center bg-transparent md:text-lg hover:text-blue-500 active:text-blue-500`}
                  >
                    Project
                  </button>
                </Link>
              </li>
            </div>

            <div className="md:hidden">
              {open ? (
                <IoClose className="z-50 text-2xl" onClick={toggleMenu} />
              ) : (
                <IoMenu className="text-2xl" onClick={toggleMenu} />
              )}
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`${
          theme === "light" ? "bg-white" : "bg-slate-900 text-white"
        } fixed z-10 md:hidden w-60 list-none h-screen top-16 right-0 transition-transform transform ${
          open ? "translate-x-0" : "translate-x-full h-screen"
        } ease-out duration-300 shadow-md`}
      >
        <div className="w-full mx-12 mt-3">
          <li className="py-2">
            <Link href="#about" onClick={handleLinkClick}>
              <button
                className={`${
                  theme === "light" ? "text-slate-900" : "text-gray-200"
                } font-bold w-32 bg-transparent hover:text-blue-500 active:text-blue-500`}
              >
                About
              </button>
            </Link>
          </li>
          <li className="py-2">
            <Link href="#skills" onClick={handleLinkClick}>
              <button
                className={`${
                  theme === "light" ? "text-slate-900" : "text-gray-200"
                } font-bold w-32 bg-transparent hover:text-blue-500 active:text-blue-500`}
              >
                Skills
              </button>
            </Link>
          </li>
          <li className="py-2">
            <Link href="#education" onClick={handleLinkClick}>
              <button
                className={`${
                  theme === "light" ? "text-slate-900" : "text-gray-200"
                } font-bold w-32 bg-transparent hover:text-blue-500 active:text-blue-500`}
              >
                Education
              </button>
            </Link>
          </li>
          <li className="py-2">
            <Link href="#project" onClick={handleLinkClick}>
              <button
                className={`${
                  theme === "light" ? "text-slate-900" : "text-gray-200"
                } font-bold w-32 bg-transparent hover:text-blue-500 active:text-blue-500`}
              >
                Project
              </button>
            </Link>
          </li>
        </div>
      </div>
    </>
  );
}
