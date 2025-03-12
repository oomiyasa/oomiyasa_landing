
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-8 lg:px-12",
        isScrolled
          ? "py-4 backdrop-blur-lg bg-white/70 shadow-soft"
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <Link 
          to="/" 
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <div className="flex flex-col items-center">
            <img src="/lovable-uploads/4d440948-15b6-4e49-be05-2e3a640a27e2.png" alt="oomiyasa logo" className="h-8" />
            <span className="text-xs text-muted-foreground mt-1">good stuff</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
