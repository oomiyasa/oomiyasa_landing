
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { CustomButton } from "./ui/custom-button";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-8 lg:px-12",
        isScrolled
          ? "py-4 backdrop-blur-lg bg-white/70 shadow-soft"
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <div className="flex flex-col items-center">
            <img src="/lovable-uploads/4d440948-15b6-4e49-be05-2e3a640a27e2.png" alt="oomiyasa logo" className="h-8" />
            <span className="text-xs text-muted-foreground mt-1">good stuff</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <CustomButton variant="secondary" size="sm">
            Sign In
          </CustomButton>
          <CustomButton variant="primary" size="sm">
            Get Started
          </CustomButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: "72px" }}
      >
        <div className="flex flex-col p-6 space-y-6">
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg font-medium py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col space-y-4 pt-4">
            <CustomButton variant="secondary" size="md" className="w-full">
              Sign In
            </CustomButton>
            <CustomButton variant="primary" size="md" className="w-full">
              Get Started
            </CustomButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
