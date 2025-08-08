
// src/components/landing/WalletHeroSection.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

export function WalletHeroSection() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-background to-black text-foreground">
      <div className="container max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 md:px-6">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">
            Secure, Non-Custodial & Private by Default
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl font-normal">
            A privacy-first Bitcoin wallet built to minimize address reuse and on-chain exposure, without compromising security. No accounts, no tracking, just you and your keys.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="w-full sm:w-auto shadow-glow" asChild>
                <a href="https://wallet.bitsleuth.ai/">
                    <ShieldCheck className="mr-2 h-5 w-5" />
                    Launch Wallet
                </a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10"></div>
          <Card className="shadow-2xl bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden transform hover:scale-105 transition-transform duration-500 shadow-glow">
            <CardContent className="p-0">
              <Image
                src="/images/wallet-preview.png"
                width="600"
                height="400"
                alt="BitSleuth Privacy Wallet"
                data-ai-hint="bitcoin wallet privacy"
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
