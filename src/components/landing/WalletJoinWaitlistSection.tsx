// src/components/landing/WalletJoinWaitlistSection.tsx
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

export function WalletJoinWaitlistSection() {
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
    } catch {
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
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4 text-foreground">
        Join the <span className="text-primary">waitlist</span>
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
          className="w-full sm:flex-1 bg-background border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
          disabled={isLoading}
        />
        <Button
          type="submit"
          className="w-full sm:w-auto shadow-none bg-primary hover:bg-primary/90 text-primary-foreground"
          disabled={isLoading}
        >
          {isLoading ? "Joining..." : "Join waitlist"}
        </Button>
      </form>
    </div>
  );
}
