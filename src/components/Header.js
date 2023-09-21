import React from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="flex items-center justify-between text-white px-6 py-4 h-16 max-w-5xl mx-auto mt-12 bg-transparent">
      <span></span>
      <button
        className="px-6 py-2 bg-slate-800 dark:bg-yellow-600 text-white rounded-md font-semibold uppercase"
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <span>
            <MdLightMode />
          </span>
        ) : (
          <span>
            <MdDarkMode />
          </span>
        )}
      </button>
    </header>
  );
};

export default Header;
