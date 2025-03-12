
import React, { useState } from "react";
import { CustomButton } from "./ui/custom-button";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      
      // Reset submission state after showing success message
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
              Get in touch
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Have questions or ready to start your next project? Reach out and let's create something amazing together.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-medium">Contact Info</h4>
                  <p className="text-muted-foreground mt-1">+1 (555) 000-0000</p>
                  <p className="text-muted-foreground">hello@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-medium">Location</h4>
                  <p className="text-muted-foreground mt-1">123 Design Street</p>
                  <p className="text-muted-foreground">San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg blur-lg opacity-30"></div>
            <div className="relative glass-card rounded-lg p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-8">
                  <div className="rounded-full bg-green-100 p-3 text-green-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={cn(
                        "w-full rounded-md border border-input bg-background/50 backdrop-blur-sm px-4 py-2",
                        "focus:outline-none focus:ring-2 focus:ring-primary/30"
                      )}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={cn(
                        "w-full rounded-md border border-input bg-background/50 backdrop-blur-sm px-4 py-2",
                        "focus:outline-none focus:ring-2 focus:ring-primary/30"
                      )}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={cn(
                        "w-full rounded-md border border-input bg-background/50 backdrop-blur-sm px-4 py-2 min-h-[120px]",
                        "focus:outline-none focus:ring-2 focus:ring-primary/30"
                      )}
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  
                  <CustomButton
                    type="submit"
                    className="w-full"
                    isLoading={isSubmitting}
                    icon={<Send className="h-4 w-4" />}
                    iconPosition="right"
                  >
                    Send Message
                  </CustomButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
