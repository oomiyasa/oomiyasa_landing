
import React, { useEffect, useRef } from "react";
import { CustomButton } from "./ui/custom-button";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = heroRef.current?.querySelectorAll('.reveal');
            elements?.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('animate-slide-up');
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToNextSection = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gray-100/30 filter blur-3xl animate-float opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-gray-100/20 filter blur-3xl animate-float opacity-20" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container max-w-6xl px-6 md:px-10">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-10">
          <div className="reveal">
            <img 
              src="/lovable-uploads/4d440948-15b6-4e49-be05-2e3a640a27e2.png" 
              alt="oomiyasa" 
              className="w-36 md:w-48 lg:w-56 mb-4"
            />
            <p className="text-xl md:text-2xl text-muted-foreground font-light">good stuff</p>
          </div>
          
          {/* Links with improved visibility */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 reveal">
            <a 
              href="https://thegoodnobook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg md:text-xl font-medium text-primary hover:text-primary/80 transition-colors duration-200 underline decoration-2 underline-offset-4 hover:decoration-primary"
            >
              thegoodnobook.com
            </a>
            <a 
              href="https://ticketfence.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg md:text-xl font-medium text-primary hover:text-primary/80 transition-colors duration-200 underline decoration-2 underline-offset-4 hover:decoration-primary"
            >
              ticketfence.net
            </a>
            <a 
              href="https://pricepricebaby.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg md:text-xl font-medium text-primary hover:text-primary/80 transition-colors duration-200 underline decoration-2 underline-offset-4 hover:decoration-primary"
            >
              pricepricebaby.app
            </a>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight max-w-4xl reveal">
            Quality products for <br />everyday moments
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl reveal">
            Crafting premium quality essentials that enhance your daily life through thoughtful design and exceptional materials.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 reveal">
            <CustomButton
              size="lg"
              className="group"
              icon={<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
              iconPosition="right"
            >
              Browse Products
            </CustomButton>
            
            <CustomButton size="lg" variant="secondary">
              About Us
            </CustomButton>
          </div>
          
          <div className="w-full max-w-4xl mt-16 md:mt-20 relative reveal">
            <div className="aspect-video rounded-lg overflow-hidden shadow-glass border border-white/30 bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="oomiyasa product"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-center">
              <button 
                onClick={scrollToNextSection} 
                className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-soft border border-white/30 text-foreground/70 hover:text-foreground hover:bg-white transition-colors animate-float"
                aria-label="Scroll to next section"
              >
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
