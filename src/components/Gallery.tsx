
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GalleryItem {
  title: string;
  description: string;
  imagePosition: "left" | "right" | "center";
  imageBg: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: "Precision in details",
    description: "Every pixel has been carefully placed to create a harmonious and balanced composition.",
    imagePosition: "center",
    imageBg: "bg-gray-100"
  },
  {
    title: "Seamless experience",
    description: "Interactions feel natural and intuitive, guiding users through a frictionless journey.",
    imagePosition: "right",
    imageBg: "bg-blue-50"
  },
  {
    title: "Aesthetic refinement",
    description: "Clean lines and thoughtful typography create a visual language that communicates clarity.",
    imagePosition: "left",
    imageBg: "bg-gray-50"
  }
];

const Gallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.gallery-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-blur-in');
                item.classList.remove('opacity-0');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="gallery" 
      ref={galleryRef}
      className="py-24 sm:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            Showcase of excellence
          </h2>
          <p className="text-lg text-muted-foreground">
            A gallery of our finest work showcasing our attention to detail and commitment to quality.
          </p>
          <div className="separator mx-auto"></div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className={cn(
                "gallery-item opacity-0 flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center",
                index % 2 === 1 && "md:flex-row-reverse"
              )}
            >
              <div className={cn(
                "md:p-6",
                index % 2 === 0 ? "md:pr-12" : "md:pl-12"
              )}>
                <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {item.description}
                </p>
                <div className="h-px w-16 bg-primary/20"></div>
              </div>

              <div className={cn(
                "aspect-video rounded-lg overflow-hidden shadow-soft-lg mb-8 md:mb-0",
                item.imageBg
              )}>
                <div className={cn(
                  "w-full h-full",
                  item.imagePosition === "left" && "bg-left-top",
                  item.imagePosition === "right" && "bg-right-top",
                  item.imagePosition === "center" && "bg-center"
                )}>
                  {/* Placeholder for actual images */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-lg text-muted-foreground/50 font-medium">Gallery Image {index + 1}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
