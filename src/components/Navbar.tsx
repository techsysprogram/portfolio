"use client";
import { useState } from "react";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-4 bg-white dark:bg-gray-900 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">Miguel Bellota</h1>
          <ModeToggle />
        </div>
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <div
          className={`absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md md:static md:flex md:gap-6 md:shadow-none md:w-auto md:bg-transparent transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 md:opacity-100"
          } overflow-hidden`}
        >
          <Link
            href="/"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 md:inline-block hover:text-blue-500 dark:hover:text-blue-400 transition duration-200"
          >
            Accueil
          </Link>
          <Link
            href="/projects"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 md:inline-block hover:text-blue-500 dark:hover:text-blue-400 transition duration-200"
          >
            Projets
          </Link>
          <Link
            href="/testimonials"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 md:inline-block hover:text-blue-500 dark:hover:text-blue-400 transition duration-200"
          >
            Avis
          </Link>
          <Link
            href="/posts"
            className="block px-4 py-2 text-gray-700 dark:text-gray-300 md:inline-block hover:text-blue-500 dark:hover:text-blue-400 transition duration-200"
          >
            Posts
          </Link>
        </div>
      </div>
    </nav>
  );
}
