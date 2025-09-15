import { useContext } from "react";
import { Outlet } from "react-router-dom";
import ThemeContext from "../../contexts/themeContext";
import Footer from "./Footer";
import Header from "./Header";

export default function Base() {
  const { theme } = useContext(ThemeContext);
  const themeClass = theme == "light" ? " " : "dark";
  return (
    <main className={`${themeClass}  bg-emerald-50 dark:bg-stone-600`}>
      <Header />
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
