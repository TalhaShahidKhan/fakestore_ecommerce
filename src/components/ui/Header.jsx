import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../contexts/themeContext";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-emerald-50 dark:bg-stone-600 text-emerald-600 dark:text-stone-50 px-4 py-3 flex justify-around items-center shadow-md border-b border-emerald-200/50 dark:border-stone-400/50">
      <div className="text-xl font-bold">FakeStore</div>

      <nav className="hidden sm:flex gap-6 items-center">
        <Link
          to="/"
          className="hover:text-emerald-500 dark:hover:text-stone-100 transition-colors px-2 py-1 rounded"
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="hover:text-emerald-500 dark:hover:text-stone-100 transition-colors px-2 py-1 rounded"
        >
          Shop
        </Link>
      </nav>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={changeTheme}
          className="relative inline-flex h-6 w-11 items-center rounded-full bg-emerald-100 dark:bg-stone-500 hover:bg-emerald-200 dark:hover:bg-stone-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:focus:ring-stone-50 focus:ring-offset-2"
        >
          <span className="sr-only">Toggle dark mode</span>
          <span
            className={`relative inline-flex h-4 w-4  items-center justify-center rounded-full bg-emerald-600 dark:bg-stone-50 shadow transition transform duration-200 ease-in-out text-white text-xs ${
              theme === "light" ? "translate-x-1" : "translate-x-5"
            }`}
          >
            {theme === "light" ? "☀️" : "🌙"}
          </span>
        </button>

        <button
          className="sm:hidden text-2xl p-1 rounded hover:bg-emerald-100 dark:hover:bg-stone-500 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <>
              <div className="font-bold text-2xl">X</div>
            </>
          ) : (
            "☰"
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-emerald-50 dark:bg-stone-600 text-emerald-600 dark:text-stone-50 p-4 shadow-lg border-b border-emerald-200/50 dark:border-stone-400/50 z-40">
          <Link
            to="/"
            className="block py-2 px-4 hover:bg-emerald-100 dark:hover:bg-stone-500 rounded transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="block py-2 px-4 hover:bg-emerald-100 dark:hover:bg-stone-500 rounded transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </Link>
        </div>
      )}
    </nav>
  );
}
