
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ValueBadge } from "@/components/ui/value-badge";
import { Bitcoin, Search, Lock, Zap, CheckCircle } from "lucide-react";
import { useState } from "react";
import { validateBitcoinAddress, sanitizeBitcoinAddress } from "@/lib/bitcoin-validation";
import { useToast } from "@/hooks/use-toast";

export function HeroSection() {
  const [address, setAddress] = useState("");
  const { toast } = useToast();

  const handleAnalyze = () => {
    if (!address) {
      toast({
        title: "Address Required",
        description: "Please enter a Bitcoin address to analyze",
        variant: "destructive",
      });
      return;
    }

    const sanitizedAddress = sanitizeBitcoinAddress(address);
    const validation = validateBitcoinAddress(sanitizedAddress);
    
    if (!validation.isValid) {
      toast({
        title: "Invalid Address",
        description: validation.error || "Please enter a valid Bitcoin address",
        variant: "destructive",
      });
      return;
    }

    // Use window.location.assign() for better CSP compatibility
    window.location.assign(`https://app.bitsleuth.ai/address/${encodeURIComponent(sanitizedAddress)}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAnalyze();
    }
  };

  return (
    <section className="edge-to-edge-section relative overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Background Gradient - Orange from top */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/50 to-background z-0" />
      <BackgroundBeams intensity="subtle" className="opacity-30" />
      <div className="container max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground">
            BitSleuth Analyzer: Analyze <span className="text-primary">Bitcoin Wallets</span> Like a Pro
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl font-normal">
            Visualize transactions, trace flows, and spot OPSEC risks with AI-powered insights. Advanced analytics, visualized insights, and total transparency.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative flex-grow">
              <Bitcoin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Paste any BTC Address"
                className="p-3 pl-10 rounded-md w-full max-w-md bg-background/50 border-border/50 focus:border-primary/50"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <Button size="lg" className="w-full sm:w-auto shadow-none bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleAnalyze}>
              <Search className="mr-2 h-5 w-5" />
              Analyze Wallet
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <ValueBadge icon={CheckCircle} text="No Registration" variant="primary" />
            <ValueBadge icon={Lock} text="100% Private" variant="primary" />
            <ValueBadge icon={Zap} text="Instant Analysis" variant="primary" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10"></div>
          <Card className="shadow-2xl bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden transform hover:scale-105 transition-transform duration-500 shadow-primary/10 hover:border-primary/50">
            <CardContent className="p-0">
              <Image
                src="/images/dashboard-preview.png"
                width="600"
                height="400"
                alt="BitSleuth Dashboard Preview"
                data-ai-hint="bitcoin analytics dashboard"
                className="w-full object-cover"
                priority
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
