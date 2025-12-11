"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export function WalletHeroSection() {
  return (
    <section className="edge-to-edge-section relative overflow-hidden py-20 md:py-24 lg:py-32">
      {/* Background Gradient - Orange from top */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/50 to-background z-0" />
      <BackgroundBeams intensity="subtle" className="opacity-30" />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none text-foreground drop-shadow-sm">
              BitSleuth Wallet: <br />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Your Bitcoin. Your Keys.
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl font-normal leading-relaxed mx-auto lg:mx-0">
              Take full control of your Bitcoin with BitSleuth Wallet - a privacy-first, non-custodial wallet designed for security, privacy, and ease of use.
              <br /><br />
              Minimize address reuse and on-chain exposure without compromising features or safety.
              <br />
              No accounts. No tracking. Just you and your keys!
              <br /><br />
              <span className="font-medium text-foreground/80">
                Available in iOS App Store and Android Google Play Store.
              </span>
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Non-Custodial</span>
              </div>
            </div>
          </div>

          {/* Right side - Mockup Image */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-md lg:max-w-full perspective-1000">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 rounded-full blur-3xl -z-10" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10 transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700">
              <Image
                src="/images/wallet-mockup.png"
                alt="BitSleuth Wallet Mobile App Interface"
                width={600}
                height={1200}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
