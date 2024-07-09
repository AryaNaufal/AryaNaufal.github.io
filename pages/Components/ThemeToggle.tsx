import { useTheme } from '../context/theme-context';
import { IoMoon, IoSunnyOutline } from "react-icons/io5";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`p-4 md:p-6 fixed bottom-5 right-5 text-black  rounded-full ${theme === 'light' ? 'bg-slate-700 text-white' : 'bg-gray-200'}`}
      onClick={toggleTheme}
    >
      {theme === 'light' ? (<IoMoon />) : (<IoSunnyOutline />)}
    </button>
  );
};

export default ThemeToggle;
