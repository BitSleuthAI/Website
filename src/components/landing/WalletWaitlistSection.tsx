// src/components/landing/WalletWaitlistSection.tsx
import { WalletJoinWaitlistSection } from './WalletJoinWaitlistSection';

export function WalletWaitlistSection() {
  return (
    <section id="waitlist" className="edge-to-edge-section py-20 md:py-24 lg:py-32 bg-background relative overflow-hidden">

      <div className="container max-w-4xl mx-auto relative z-10">
        <WalletJoinWaitlistSection />
      </div>
    </section>
  );
}
