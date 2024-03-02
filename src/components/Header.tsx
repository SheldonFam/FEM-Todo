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
    <header className="flex  text-base font-Josefin font-bold h-130px w-full">
      <div
        style={{ backgroundImage: bgImage }}
        className="bg-no-repeat bg-center bg-cover w-full h-[200px]"
      >
        <nav className="flex justify-between w-full items-center">
          <h1 className="bold text-white text-2xl">TODO</h1>
          <button
            onClick={toggleTheme}
            className={`transition-transform duration-500 ${
              theme === "light" ? "rotate-0" : "rotate-90"
            }`}
          >
            {theme === "light" ? (
              <BsMoonFill className="text-white" />
            ) : (
              <BsSunFill className="text-white" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};
