import { useContext } from "react";
import { BsMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { ThemeContext } from "../context/Theme";

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Define the background images for light and dark themes
  const lightBgImage = "url(/bg-desktop-light.jpg)";
  const darkBgImage = "url(/bg-desktop-dark.jpg)";

  // Set the background image based on the current theme
  const bgImage = theme === "light" ? lightBgImage : darkBgImage;

  return (
    <header className="flex h-52 text-base font-Josefin font-bold">
      <div
        style={{
          backgroundImage: bgImage,
        }}
        className="bg-no-repeat bg-center bg-cover"
      >
        <nav className="flex justify-between w-screen h-10 items-center px-6 mt-11 mb-8 md:px-96">
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
