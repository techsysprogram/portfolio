import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="p-4 bg-white dark:bg-gray-900 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">Mon Portfolio</h1>
      <div className="flex items-center gap-4">
        <Link href="/" className="hover:text-blue-500">Accueil</Link>
        <Link href="/projects" className="hover:text-blue-500">Projets</Link>
        <Link href="/testimonials" className="hover:text-blue-500">Avis</Link>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>
      </div>
    </nav>
  );
}
