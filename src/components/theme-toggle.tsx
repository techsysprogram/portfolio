"use client"; // Ajoute cette ligne en haut du fichier

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Attendre que le composant soit monté avant d'afficher le bouton
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Empêche l'affichage du bouton avant que le thème ne soit chargé

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
