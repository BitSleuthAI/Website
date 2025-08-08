
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function HomeHeroSection() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-background to-black text-foreground">
      <div className="container max-w-4xl mx-auto text-center px-4 md:px-6">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">
            One Brand. Two Powerful Bitcoin Tools.
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl font-normal">
            Whether you're analyzing blockchain data or securing your assets with a privacy-first wallet, BitSleuth provides the tools you need for Bitcoin transparency and sovereignty.
          </p>
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <Card className="text-left bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors shadow-glow">
                <CardHeader className="flex flex-row items-center gap-4">
                    <BarChart className="h-8 w-8 text-primary"/>
                    <CardTitle className="text-2xl font-bold">Wallet Analyzer</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="mb-6 font-normal">
                       For analysts & investigators. Visualize transactions, trace fund flows, and detect OPSEC risks with AI-powered insights.
                    </CardDescription>
                    <Button asChild className="w-full">
                        <Link href="/analyzer">Explore Analyzer</Link>
                    </Button>
                </CardContent>
            </Card>
            <Card className="text-left bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors shadow-glow">
                <CardHeader className="flex flex-row items-center gap-4">
                    <ShieldCheck className="h-8 w-8 text-primary"/>
                    <CardTitle className="text-2xl font-bold">Privacy Wallet</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="mb-6 font-normal">
                        For privacy-conscious holders. A secure, non-custodial wallet built to minimize address reuse and on-chain exposure.
                    </CardDescription>
                    <Button asChild className="w-full">
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
