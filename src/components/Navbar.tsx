
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
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link to="/dashboard" className="text-sm font-medium hover:text-primary">
            Dashboard
          </Link>
          <Link to="/clients" className="text-sm font-medium hover:text-primary">
            Clients
          </Link>
          <Link to="/expenses" className="text-sm font-medium hover:text-primary">
            Expenses
          </Link>
          <a href="#services" className="text-sm font-medium hover:text-primary">
            Services
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary">
            About
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden sm:flex">
            <Link to="/dashboard">
              Business Portal
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
