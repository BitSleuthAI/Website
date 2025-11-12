import { BackgroundBeams } from "@/components/ui/background-beams";

export function AboutSection() {
  return (
    <section className="edge-to-edge-section py-20 md:py-24 lg:py-32 bg-secondary/20 relative overflow-hidden">
      <BackgroundBeams intensity="subtle" />
      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-title">About BitSleuth</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed max-w-3xl mx-auto">
            BitSleuth is built for Bitcoiners who want real transparency. Whether you're tracking
            address reuse, auditing wallets, or exploring the chain, BitSleuth helps you make sense
            of the blockchain. Built by privacy-focused developers who believe in open access to
            Bitcoin data.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="font-semibold text-primary">🔍</span>
              <span>Transparency First</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="font-semibold text-primary">🔐</span>
              <span>Privacy Focused</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="font-semibold text-primary">🚀</span>
              <span>Community Built</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
