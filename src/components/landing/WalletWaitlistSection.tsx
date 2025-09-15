// src/components/landing/WalletWaitlistSection.tsx
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

export function WalletWaitlistSection() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "You're on the list!",
          description: "We'll be in touch soon.",
        });
        setEmail('');
      } else {
        toast({
          title: "Error",
          description: data.error || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-background to-muted dark:to-black text-foreground">
      <div className="container max-w-4xl mx-auto px-4 md:px-6">
        {/* Join the waitlist section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient-title">
            Join the waitlist
          </h2>
          <p className="text-lg text-muted-foreground font-normal mb-8">
            Receive all the latest news and updates, as well as early access to the beta.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              className="w-full sm:w-auto shadow-glow bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isLoading}
            >
              {isLoading ? "Joining..." : "Join waitlist"}
            </Button>
          </form>
        </div>

        {/* Promotional message section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4 text-gradient-title">
            Get ready to experience a better way to manage<br />
            your Bitcoin.
          </h3>
          <p className="text-lg text-muted-foreground font-normal">
            Stay tuned for the official launch!
          </p>
        </div>
      </div>
    </section>
  );
}
