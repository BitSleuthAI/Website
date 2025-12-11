"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ValueBadge } from "@/components/ui/value-badge";
import {
  BarChart,
  ShieldCheck,
  Bitcoin,
  Zap,
  Users,
  BookOpen,
  Clock,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export function EnhancedHomeHeroSection() {
  return (
    <>
      {/* Main Hero Section with Cinematic Image */}
      <section className="edge-to-edge-section relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
        {/* Background Gradient - Orange from top */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/50 to-background z-0" />
        <BackgroundBeams intensity="subtle" className="opacity-30" />

        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side - Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6 animate-in fade-in duration-700 slide-in-from-bottom-4">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none text-foreground drop-shadow-sm">
                  One Brand. <br />
                  <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                    Two Powerful Tools.
                  </span>
                </h1>
                <p className="max-w-2xl text-lg text-muted-foreground md:text-xl font-normal leading-relaxed mx-auto lg:mx-0">
                  Whether you're analyzing blockchain data or securing your assets with a privacy-first wallet, BitSleuth provides the tools you need for Bitcoin transparency and sovereignty.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                  <ValueBadge icon={Bitcoin} text="Bitcoin Only" variant="primary" />
                  <ValueBadge icon={Zap} text="Free to Use" variant="primary" />
                  <ValueBadge icon={Users} text="Built by Bitcoiners" variant="primary" />
                </div>
              </div>

              {/* Quick Links to Learning Resources */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="outline" asChild className="group border-primary/20 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300">
                  <Link href="/learn">
                    <BookOpen className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Learning Hub
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="group border-primary/20 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300">
                  <Link href="/history">
                    <Clock className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Bitcoin History
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right side - Cinematic Image */}
            <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 animate-in fade-in duration-1000 slide-in-from-right-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
              <img
                src="/images/hero.png"
                alt="Global Bitcoin Culture"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards Section */}
      <section className="py-12 md:py-24 bg-background relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="group text-left bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full overflow-hidden">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="p-3 rounded-2xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">Wallet Analyzer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-8 font-normal text-base leading-relaxed text-muted-foreground">
                  For analysts & investigators. Visualize transactions, trace fund flows, and detect OPSEC risks with AI-powered insights.
                </CardDescription>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-foreground font-semibold shadow-none rounded-xl h-12 transition-all group-hover:shadow-xl">
                  <Link href="/analyzer">Explore Analyzer</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group text-left bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full overflow-hidden">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="p-3 rounded-2xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">Privacy Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-8 font-normal text-base leading-relaxed text-muted-foreground">
                  For privacy-conscious holders. A secure, non-custodial wallet built to minimize address reuse and on-chain exposure.
                </CardDescription>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-foreground font-semibold shadow-none rounded-xl h-12 transition-all group-hover:shadow-xl">
                  <Link href="/wallet">Explore Wallet</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
