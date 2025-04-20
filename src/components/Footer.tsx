
import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl text-primary">MowApp</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting homeowners with professional lawn care services. Quality work, simplified booking, beautiful yards.
            </p>
          </div>
          
          <nav className="space-y-4">
            <h3 className="text-sm font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#booking" className="text-sm hover:text-primary transition-colors">
                  Book Now
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Contact Us</h3>
            <address className="not-italic space-y-2 text-sm text-muted-foreground">
              <p>1234 Lawn Avenue</p>
              <p>Greenville, GA 30303</p>
              <p>Email: info@mowapp.com</p>
              <p>Phone: (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 MowApp. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
