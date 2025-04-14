import { useContext } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { ThemeContext } from "../context/Theme";

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="w-full">
      <div className="max-w-[540px] mx-auto pt-3">
        <nav className="flex justify-between w-full items-center">
          <h1 className="text-3xl md:text-4xl tracking-[0.3em] uppercase text-white">
            TODO
          </h1>
          <button
            onClick={toggleTheme}
            className="transition-transform duration-500 p-1 hover:opacity-80"
          >
            {theme === "light" ? (
              <BsMoonFill className="text-white w-5 h-5 md:w-6 md:h-6" />
            ) : (
              <BsSunFill className="text-white w-5 h-5 md:w-6 md:h-6" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};
