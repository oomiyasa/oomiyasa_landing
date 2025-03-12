
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  className,
  size = "md",
  animated = true,
}) => {
  const logoRef = useRef<SVGSVGElement>(null);

  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  useEffect(() => {
    if (animated && logoRef.current) {
      const paths = logoRef.current.querySelectorAll("path");
      
      paths.forEach((path, index) => {
        // Reset animation state
        path.style.opacity = "0";
        path.style.transform = "scale(0.9)";
        
        // Setup and trigger animation with staggered delay
        setTimeout(() => {
          path.style.transition = "opacity 0.6s ease-out, transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
          path.style.opacity = "1";
          path.style.transform = "scale(1)";
        }, 100 * index);
      });
    }
  }, [animated]);

  return (
    <svg
      ref={logoRef}
      className={cn(sizes[size], "text-primary", className)}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 5L10 11.5V24.5L20 31L30 24.5V11.5L20 5Z"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path
        d="M20 5L10 11.5V24.5L20 31L30 24.5V11.5L20 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 14L14 17.5V24.5L20 28L26 24.5V17.5L20 14Z"
        fill="currentColor"
        fillOpacity="0.3"
      />
    </svg>
  );
};

export default AnimatedLogo;
