
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-primary">MowApp</span>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <a href="#services" className="text-sm font-medium hover:text-primary">
            Services
          </a>
          <a href="#booking" className="text-sm font-medium hover:text-primary">
            Book Now
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary">
            About
          </a>
          <Link to="/dashboard" className="text-sm font-medium hover:text-primary">
            Dashboard
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link to="/dashboard">
              Business Portal
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
