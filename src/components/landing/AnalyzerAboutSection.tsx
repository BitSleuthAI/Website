// src/components/landing/AnalyzerAboutSection.tsx
export function AnalyzerAboutSection() {
  return (
    <section className="w-full py-20 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container max-w-3xl mx-auto text-center px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">About BitSleuth Analyzer</h2>
        <p className="text-lg text-muted-foreground font-normal">
          The BitSleuth Analyzer is built for Bitcoiners who want real transparency. Whether you're tracking address reuse, auditing wallets for OPSEC risks, or exploring the chain, our AI-powered tools help you make sense of the blockchain. Built by privacy-focused developers who believe in open access to Bitcoin data.
        </p>
      </div>
    </section>
  );
}
