import { BsMoon } from "react-icons/bs";

const Header = () => {
  return (
    <header
      className="flex h-48 text-base font-Josefin"
      style={{
        backgroundImage: "url(/bg-mobile-dark.jpg)",
        backgroundRepeat: "no-repeat",
        // height: "200px",
      }}
    >
      <nav className="flex justify-between w-screen h-10 items-center px-6 mt-11 mb-8">
        <h1 className="bold text-white text-2xl">TODO</h1>
        <BsMoon className="text-white" />
      </nav>
    </header>
  );
};

export default Header;
