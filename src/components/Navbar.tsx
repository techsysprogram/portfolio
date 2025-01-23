"use client";

import { useState } from "react";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    /* padding lateral en tailwind */

    <nav className="fixed top-0 left-0 w-full bg-background shadow-md z-50">
      <div className="container mx-auto max-w-[1024px] flex items-center justify-between p-4">
        {/* Logo et Mode Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/" className="text-[1.4rem] font-extrabold text-primary">
            Miguel Bellota
          </Link>
          <ModeToggle />
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-6">
          <NavLink href="/">Accueil</NavLink>
          <NavLink href="/projects">Projets</NavLink>
          <NavLink href="/testimonials">Avis</NavLink>
          <NavLink href="/posts">Posts</NavLink>
        </div>

        {/* Menu Mobile avec Dropdown */}
        <div className="md:hidden">
          <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/projects" onClick={() => setIsMenuOpen(false)}>Projets</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/testimonials" onClick={() => setIsMenuOpen(false)}>Avis</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/posts" onClick={() => setIsMenuOpen(false)}>Posts</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

// Composant de lien réutilisable
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-700 dark:text-gray-300 hover:text-primary transition duration-200">
      {children}
    </Link>
  );
}
