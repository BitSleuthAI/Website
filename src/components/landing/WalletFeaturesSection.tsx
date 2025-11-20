
// src/components/landing/WalletFeaturesSection.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ValueBadge } from "@/components/ui/value-badge";
import { Fingerprint, KeyRound, ShieldOff, Bitcoin, Lock, UserX } from "lucide-react";

const features = [
  {
    icon: <KeyRound className="h-8 w-8 text-primary" />,
    title: 'Truly Non-Custodial',
    description: 'You control your keys, you control your Bitcoin. We never have access to your funds or your passphrase.',
    colorScheme: 'primary',
  },
  {
    icon: <Fingerprint className="h-8 w-8 text-primary" />,
    title: 'On-Chain Privacy',
    description: 'Designed to mitigate address reuse and protect your transaction history from trivial blockchain analysis.',
    colorScheme: 'primary',
  },
  {
    icon: <ShieldOff className="h-8 w-8 text-primary" />,
    title: 'No Accounts or Tracking',
    description: 'No email sign-ups, no personal information collected. Your privacy is paramount from the moment you start.',
    colorScheme: 'primary',
  },
];

export function WalletFeaturesSection() {
  return (
    <section id="features" className="edge-to-edge-section py-20 md:py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <BackgroundBeams intensity="subtle" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gradient-title">Your Wallet, Your Privacy</h2>
          <p className="text-lg text-muted-foreground font-normal">Keep control of your Bitcoin from the moment you start.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            <ValueBadge icon={Bitcoin} text="Bitcoin Only" variant="orange" />
            <ValueBadge icon={Lock} text="Self-Custody" variant="orange" />
            <ValueBadge icon={UserX} text="Anonymous" variant="orange" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {features.map((feature, idx) => (
            <Card 
              key={idx} 
              className="bg-card/50 transition-colors shadow-glow p-4 hover:border-primary/50"
            >
              <CardHeader className="flex flex-row items-start gap-4 p-2">
                 {feature.icon}
                <CardTitle className="font-bold text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-2 pt-0">
                <CardDescription className="font-normal">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
