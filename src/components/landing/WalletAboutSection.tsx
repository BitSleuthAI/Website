// src/components/landing/WalletAboutSection.tsx
import { ValueBadge } from "@/components/ui/value-badge";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Bitcoin, Shield, UserX, Blocks } from "lucide-react";

export function WalletAboutSection() {
  return (
    <section className="edge-to-edge-section py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
      <BackgroundBeams intensity="subtle" className="opacity-20" />
      <div className="container max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-foreground">About <span className="text-primary">BitSleuth Wallet</span></h2>
        <p className="text-lg text-muted-foreground font-normal">
          The BitSleuth Wallet is built for privacy-conscious Bitcoiners. We believe in self-custody and minimizing your on-chain footprint. Our wallet is non-custodial, requires no personal information, and is designed to help you transact with greater privacy. Built by developers who believe in financial sovereignty. The Privacy Wallet is fully open source — review or contribute to the code on{" "}
          <a
            href="https://github.com/BitSleuthAI/Wallet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium transition-colors duration-200 hover:underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-6">
          <ValueBadge icon={Bitcoin} text="Bitcoin Only" variant="primary" />
          <ValueBadge icon={Shield} text="Privacy First" variant="primary" />
          <ValueBadge icon={UserX} text="No KYC" variant="primary" />
          <ValueBadge icon={Blocks} text="Self-Custody" variant="primary" />
        </div>
      </div>
    </section>
  );
}
