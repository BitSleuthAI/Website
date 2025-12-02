"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
  BookOpen,
  Clock,
  Lightbulb,
  Network,
  Shield,
  Zap,
  ArrowRight,
  FileText
} from "lucide-react";
import Link from "next/link";

export function EducationalSection() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <BookOpen className="mr-2 h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Educational Resources</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl mb-6">
            Learn About <span className="text-primary">Bitcoin</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore comprehensive guides, historical insights, and educational content to deepen your understanding of Bitcoin and blockchain technology.
          </p>
        </div>

        {/* Main Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Learning Hub Card - Featured with Image */}
          <Card className="group bg-card border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
              <img
                src="/images/educational.png"
                alt="Bitcoin Education"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <CardContent className="p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Learning Hub</h3>
                  <p className="text-sm text-muted-foreground">Master Bitcoin fundamentals</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed flex-1">
                Understand how Bitcoin works, from basic concepts to advanced topics. Learn about transactions, mining, wallets, and the revolutionary technology behind the world's first decentralized currency.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Network className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">How Bitcoin Works</div>
                    <div className="text-xs text-muted-foreground">Blockchain, mining, and consensus</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">Security & Privacy</div>
                    <div className="text-xs text-muted-foreground">Keys, wallets, and best practices</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">Getting Started</div>
                    <div className="text-xs text-muted-foreground">How to acquire, store, and use Bitcoin</div>
                  </div>
                </div>
              </div>

              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
                <Link href="/learn">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Bitcoin History Card */}
          <Card className="group bg-card border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
              <img
                src="/images/history.png"
                alt="Bitcoin History"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <CardContent className="p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Bitcoin History</h3>
                  <p className="text-sm text-muted-foreground">From whitepaper to global phenomenon</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed flex-1">
                Discover the fascinating story of Bitcoin, from Satoshi Nakamoto's revolutionary whitepaper to its lasting impact on global finance and technology.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">The Whitepaper</div>
                    <div className="text-xs text-muted-foreground">Satoshi's vision simplified</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">Genesis Block</div>
                    <div className="text-xs text-muted-foreground">The birth of Bitcoin in 2009</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Network className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">Global Impact</div>
                    <div className="text-xs text-muted-foreground">How Bitcoin changed finance forever</div>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
                  <Link href="/history">
                    Explore History
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Glossary Callout */}
        <Card className="bg-primary/5 border-primary/20 overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <CardContent className="p-8 md:p-10 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="p-5 rounded-2xl bg-primary/10 shrink-0">
                <BookOpen className="h-12 w-12 text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3">Bitcoin Terminology Glossary</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Explore our comprehensive glossary of Bitcoin terms, from basic concepts to advanced technical terminology. Perfect for beginners and experts alike.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="text-sm px-4 py-1.5 rounded-full bg-background border border-border font-medium text-muted-foreground">Blockchain</span>
                  <span className="text-sm px-4 py-1.5 rounded-full bg-background border border-border font-medium text-muted-foreground">Mining</span>
                  <span className="text-sm px-4 py-1.5 rounded-full bg-background border border-border font-medium text-muted-foreground">Wallet</span>
                  <span className="text-sm px-4 py-1.5 rounded-full bg-background border border-border font-medium text-muted-foreground">UTXO</span>
                  <span className="text-sm px-4 py-1.5 rounded-full bg-background border border-border font-medium text-primary">+ 15 more</span>
                </div>
              </div>
              <Button asChild size="lg" className="shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                <Link href="/glossary">
                  Browse Glossary
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
