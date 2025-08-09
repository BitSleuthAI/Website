
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Bitcoin, Search } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [address, setAddress] = useState("");

  const handleAnalyze = () => {
    if (address) {
      window.location.href = `https://app.bitsleuth.ai/address/${address}`;
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAnalyze();
    }
  };

  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-background to-muted dark:to-black text-foreground">
      <div className="container max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 md:px-6">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">
            Analyze Bitcoin Wallets Like a Pro
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
                className="p-3 pl-10 rounded-md w-full max-w-md bg-background/50 border-border/50"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <Button size="lg" className="w-full sm:w-auto shadow-glow" onClick={handleAnalyze}>
                <Search className="mr-2 h-5 w-5" />
                Analyze Wallet
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10"></div>
          <Card className="shadow-2xl bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden transform hover:scale-105 transition-transform duration-500 shadow-glow">
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
