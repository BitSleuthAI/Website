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
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      <BackgroundBeams intensity="subtle" />
      <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <BookOpen className="mr-2 h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Educational Resources</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl mb-4 text-gradient-title">
            Learn About Bitcoin
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore comprehensive guides, historical insights, and educational content to deepen your understanding of Bitcoin and blockchain technology.
          </p>
        </div>

        {/* Main Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Learning Hub Card */}
          <Card className="group bg-gradient-to-br from-background to-secondary/20 border-primary/30 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
            <CardContent className="p-8">
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Learning Hub</h3>
                  <p className="text-sm text-muted-foreground">Master Bitcoin fundamentals</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Understand how Bitcoin works, from basic concepts to advanced topics. Learn about transactions, mining, wallets, and the revolutionary technology behind the world's first decentralized currency.
              </p>

              {/* Feature List */}
              <div className="space-y-3 mb-6">
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

              {/* CTA Button */}
              <Button asChild className="w-full group-hover:shadow-md transition-shadow">
                <Link href="/learn">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Bitcoin History Card */}
          <Card className="group bg-gradient-to-br from-background to-secondary/20 border-primary/30 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
            <CardContent className="p-8">
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Clock className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Bitcoin History</h3>
                  <p className="text-sm text-muted-foreground">From whitepaper to global phenomenon</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Discover the fascinating story of Bitcoin, from Satoshi Nakamoto's revolutionary whitepaper to its lasting impact on global finance and technology.
              </p>

              {/* Feature List */}
              <div className="space-y-3 mb-6">
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

              {/* CTA Button */}
              <Button asChild className="w-full group-hover:shadow-md transition-shadow">
                <Link href="/history">
                  Explore History
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Glossary Callout */}
        <Card className="bg-primary/5 border-primary/30">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 rounded-xl bg-primary/10 shrink-0">
                <BookOpen className="h-12 w-12 text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Bitcoin Terminology Glossary</h3>
                <p className="text-muted-foreground mb-4">
                  Explore our comprehensive glossary of Bitcoin terms, from basic concepts to advanced technical terminology. Perfect for beginners and experts alike.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="text-xs px-3 py-1 rounded-full bg-secondary border border-border">Blockchain</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-secondary border border-border">Mining</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-secondary border border-border">Wallet</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-secondary border border-border">UTXO</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-secondary border border-border">15+ more terms</span>
                </div>
              </div>
              <Button asChild variant="outline" size="lg" className="shrink-0">
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
