import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import { ValueBadge } from "@/components/ui/value-badge";
import { Eye, Shield, Bitcoin, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section className="edge-to-edge-section py-20 md:py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <BackgroundBeams intensity="subtle" className="opacity-40" />
      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay z-10" />
              <Image
                src="/images/about.png"
                alt="BitSleuth Team Collaboration"
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-background border border-border shadow-sm mb-2">
              <Users className="mr-2 h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Our Mission</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Built for Bitcoiners, <br />
              <span className="text-primary">By Bitcoiners.</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              BitSleuth is built for those who demand real transparency. Whether you're tracking
              address reuse, auditing wallets, or exploring the chain, we provide the tools to make sense
              of the blockchain.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a team of privacy-focused developers who believe in open access to Bitcoin data
              and the sovereignty of the individual.
            </p>

            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-3">
              <ValueBadge icon={Eye} text="Transparency First" variant="primary" />
              <ValueBadge icon={Shield} text="Privacy Focused" variant="primary" />
              <ValueBadge icon={Bitcoin} text="Bitcoin Native" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
