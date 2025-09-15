import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-emerald-50 dark:bg-stone-600 text-emerald-600 dark:text-stone-50 border-t border-emerald-200/50 dark:border-stone-400/50 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm">
              &copy; 2024 FakeStore Ecommerce. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-6 items-center">
            <Link
              to="/"
              className="hover:text-emerald-500 dark:hover:text-stone-100 transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="hover:text-emerald-500 dark:hover:text-stone-100 transition-colors text-sm"
            >
              Shop
            </Link>
            <Link
              to="/cart"
              className="hover:text-emerald-500 dark:hover:text-stone-100 transition-colors text-sm"
            >
              Cart
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
