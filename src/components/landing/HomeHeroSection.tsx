
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BarChart, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function HomeHeroSection() {
  return (
    <section className="edge-to-edge-section py-20 md:py-24 lg:py-32 bg-gradient-to-br from-background via-background/95 to-muted dark:to-black text-foreground relative overflow-hidden">
      <BackgroundBeams />
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4 animate-in fade-in duration-700">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gradient-title drop-shadow-sm">
              One Brand. Two Powerful Bitcoin Tools.
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl font-normal leading-relaxed">
              Whether you're analyzing blockchain data or securing your assets with a privacy-first wallet, BitSleuth provides the tools you need for Bitcoin transparency and sovereignty.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 pt-4 max-w-4xl mx-auto">
            <Card className="group text-left bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-primary/70 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02] min-h-[200px]">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <BarChart className="h-8 w-8 text-primary"/>
                    </div>
                    <CardTitle className="text-2xl font-bold">Wallet Analyzer</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="mb-6 font-normal text-base leading-relaxed">
                       For analysts & investigators. Visualize transactions, trace fund flows, and detect OPSEC risks with AI-powered insights.
                    </CardDescription>
                    <Button asChild className="w-full group-hover:shadow-md transition-shadow">
                        <Link href="/analyzer">Explore Analyzer</Link>
                    </Button>
                </CardContent>
            </Card>
            <Card className="group text-left bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-primary/70 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02] min-h-[200px]">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <ShieldCheck className="h-8 w-8 text-primary"/>
                    </div>
                    <CardTitle className="text-2xl font-bold">Privacy Wallet</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="mb-6 font-normal text-base leading-relaxed">
                        For privacy-conscious holders. A secure, non-custodial wallet built to minimize address reuse and on-chain exposure.
                    </CardDescription>
                    <Button asChild className="w-full group-hover:shadow-md transition-shadow">
                        <Link href="/wallet">Explore Wallet</Link>
                    </Button>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
