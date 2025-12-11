// src/components/landing/WalletAboutSection.tsx
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ValueBadge } from "@/components/ui/value-badge";
import { Bitcoin, Shield, UserX, Blocks } from "lucide-react";

export function WalletAboutSection() {
  return (
    <section className="edge-to-edge-section py-20 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-foreground">About <span className="text-primary">BitSleuth Wallet</span></h2>
        <p className="text-lg text-muted-foreground font-normal">
          The BitSleuth Wallet is built for privacy-conscious Bitcoiners. We believe in self-custody and minimizing your on-chain footprint. Our wallet is non-custodial, requires no personal information, and is designed to help you transact with greater privacy. Built by developers who believe in financial sovereignty.
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
