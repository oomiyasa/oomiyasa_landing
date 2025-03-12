
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container max-w-6xl px-6 md:px-10">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-10">
          <div>
            <img 
              src="/lovable-uploads/4d440948-15b6-4e49-be05-2e3a640a27e2.png" 
              alt="oomiyasa" 
              className="w-36 md:w-48 lg:w-56 mb-4"
            />
            <p className="text-xl md:text-2xl text-muted-foreground font-light">good stuff</p>
          </div>
          
          {/* Links with no underlines */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <a 
              href="https://thegoodnobook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg md:text-xl font-medium text-primary hover:text-primary/80 transition-colors duration-200"
            >
              thegoodnobook.com
            </a>
            <a 
              href="https://ticketfence.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg md:text-xl font-medium text-primary hover:text-primary/80 transition-colors duration-200"
            >
              ticketfence.net
            </a>
            <a 
              href="https://pricepricebaby.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg md:text-xl font-medium text-primary hover:text-primary/80 transition-colors duration-200"
            >
              pricepricebaby.app
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
