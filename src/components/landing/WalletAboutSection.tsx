// src/components/landing/WalletAboutSection.tsx
export function WalletAboutSection() {
  return (
    <section className="w-full py-20 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container max-w-3xl mx-auto text-center px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-6 text-gradient-title">About BitSleuth Wallet</h2>
        <p className="text-lg text-muted-foreground font-normal">
          The BitSleuth Wallet is built for privacy-conscious Bitcoiners. We believe in self-custody and minimizing your on-chain footprint. Our wallet is non-custodial, requires no personal information, and is designed to help you transact with greater privacy. Built by developers who believe in financial sovereignty.
        </p>
      </div>
    </section>
  );
}
