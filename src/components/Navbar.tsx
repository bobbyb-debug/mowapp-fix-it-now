
import React from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background animate-in fade-in duration-700">
      <nav className="container flex h-16 items-center justify-between py-4 px-2">
        <div className="text-2xl font-bold tracking-tight">
          MowApp 🌿
        </div>
        <div className="flex items-center gap-4">
          <Button variant="link" asChild>
            <a href="/dashboard" className="text-sm font-medium">
              Dashboard
            </a>
          </Button>
          <Button variant="link" asChild>
            <a href="/clients" className="text-sm font-medium">
              Clients
            </a>
          </Button>
          <Button variant="link" asChild>
            <a href="/expenses" className="text-sm font-medium">
              Expenses
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
