import { useContext } from "react";
import { BsMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { ThemeContext } from "../context/Theme";

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex h-52 text-base font-Josefin">
      <div
        style={{
          backgroundImage: "url(/bg-desktop-light.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <nav className="flex justify-between w-screen h-10 items-center px-6 mt-11 mb-8 md:px-96">
          <h1 className="bold text-white text-2xl">TODO</h1>
          <button onClick={toggleTheme}>
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
