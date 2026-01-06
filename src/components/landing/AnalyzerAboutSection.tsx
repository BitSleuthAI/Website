// src/components/landing/AnalyzerAboutSection.tsx
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import { ValueBadge } from "@/components/ui/value-badge";
import { Bitcoin, Shield, Blocks } from "lucide-react";

export function AnalyzerAboutSection() {
  return (
    <section className="edge-to-edge-section py-12 md:py-16 lg:py-20 bg-secondary/30 relative overflow-hidden">
      <BackgroundBeams intensity="subtle" />
      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay z-10" />
              <Image
                src="/images/analyzer-about.png"
                alt="BitSleuth Analytics Visualization"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>

          {/* Content Side */}
          <div className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              About <span className="text-primary">BitSleuth Analyzer</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The BitSleuth Analyzer is built for Bitcoiners who want real transparency. Whether you're tracking address reuse, auditing wallets for OPSEC risks, or exploring the chain, our AI-powered tools help you make sense of the blockchain.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Built by privacy-focused developers who believe in open access to Bitcoin data and the sovereignty of the individual.
            </p>
            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-3">
              <ValueBadge icon={Bitcoin} text="Bitcoin Only" variant="primary" />
              <ValueBadge icon={Blocks} text="On-Chain Transparency" variant="primary" />
              <ValueBadge icon={Shield} text="Privacy Tools" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
