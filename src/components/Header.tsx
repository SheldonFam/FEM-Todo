import { useContext } from "react";
import { BsMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { ThemeContext } from "../context/Theme";

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Define the background images for light and dark themes
  const lightBgImage = "url(/bg-desktop-light.jpg)";
  const darkBgImage = "url(/bg-desktop-dark.jpg)";
  const lightMobileBgImage = "url(/bg-mobile-light.jpg)";
  const darkMobileBgImage = "url(/bg-mobile-dark.jpg)";

  // Set the background image based on the current theme
  const bgImage = theme === "light" ? lightBgImage : darkBgImage;
  const mobileBgImage =
    theme === "light" ? lightMobileBgImage : darkMobileBgImage;

  return (
    <header className="w-full">
      <div className="max-w-[540px] mx-auto px-6 pt-12 md:pt-16">
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
