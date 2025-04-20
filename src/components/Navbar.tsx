
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl text-primary">MowApp</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#services"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Services
          </a>
          <a
            href="#booking"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Book Now
          </a>
          <a
            href="#about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About Us
          </a>
          <Button variant="default">Contact Us</Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="flex md:hidden items-center justify-center rounded-md p-2 text-foreground"
          onClick={toggleMenu}
        >
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 z-50 bg-background w-full transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container flex flex-col gap-6 p-6">
          <a
            href="#services"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#booking"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={toggleMenu}
          >
            Book Now
          </a>
          <a
            href="#about"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={toggleMenu}
          >
            About Us
          </a>
          <Button variant="default" className="w-full" onClick={toggleMenu}>
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
