import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Contact", href: "/contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-4 border-b shadow-sm">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight hover:opacity-80 transition"
        >
          Entice by Nishan
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-all duration-200 hover:text-blue-600 ${
                router.pathname === item.href
                  ? "font-bold underline text-blue-600"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl px-2 py-1 border rounded hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center md:hidden gap-2 py-2 border-b">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-all duration-200 hover:text-blue-600 ${
                router.pathname === item.href
                  ? "font-bold underline text-blue-600"
                  : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Page Content */}
      <main className="flex-grow">{children}</main>

      {/* footer */}
      <footer className="bg-gray-50 text-center text-sm text-gray-400 py-6 mt-16">
        © 2025 Entice by Nishan. All rights reserved.
      </footer>

    </div>
  );
}
