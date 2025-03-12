
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle, Gem, Layers, Palette, Shield, Sparkles } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="flex flex-col p-6 rounded-xl border border-gray-100 bg-white/80 backdrop-blur-sm shadow-soft-md transition-all duration-300 hover:shadow-soft-lg"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="rounded-lg w-12 h-12 flex items-center justify-center bg-primary/5 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const features: Omit<FeatureProps, 'delay'>[] = [
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Thoughtful Design",
    description: "Every detail has been carefully considered to create a cohesive and elegant experience."
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Modular Components",
    description: "Our system is built with modular components that can be combined in countless ways."
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Polished Interactions",
    description: "Subtle animations and microinteractions make the experience feel alive and responsive."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Robust Security",
    description: "Enterprise-grade security ensures your data is protected and your privacy respected."
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Attention to Detail",
    description: "From pixel-perfect alignments to consistent spacing, no detail is too small."
  },
  {
    icon: <Gem className="h-6 w-6" />,
    title: "Premium Quality",
    description: "Built to last with high-quality code and a focus on performance and reliability."
  }
];

const Features: React.FC = () => {
  const featuresSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.feature-item');
            elements.forEach((el) => {
              el.classList.add('animate-zoom-in');
              el.classList.remove('opacity-0');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresSectionRef.current) {
      observer.observe(featuresSectionRef.current);
    }

    return () => {
      if (featuresSectionRef.current) {
        observer.unobserve(featuresSectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="features" 
      ref={featuresSectionRef}
      className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            Designed for excellence
          </h2>
          <p className="text-lg text-muted-foreground">
            Our features are crafted with precision and care to deliver an exceptional user experience.
          </p>
          <div className="separator mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-item opacity-0">
              <Feature {...feature} delay={index * 100} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
