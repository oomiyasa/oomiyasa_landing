
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { CustomButton } from "@/components/ui/custom-button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="w-full max-w-md text-center space-y-8">
        <h1 className="text-9xl font-display font-bold text-primary/20">404</h1>
        
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Page not found</h2>
          <p className="text-muted-foreground">
            We couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
        </div>
        
        <div className="pt-4">
          <Link to="/">
            <CustomButton 
              variant="primary"
              icon={<ArrowLeft className="h-4 w-4" />}
              iconPosition="left"
            >
              Return to Home
            </CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
