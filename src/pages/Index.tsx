
import React, { useEffect } from "react";
import Hero from "@/components/Hero";

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "oomiyasa - good stuff";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
};

export default Index;
