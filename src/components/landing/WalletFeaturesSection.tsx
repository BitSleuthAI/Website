
// src/components/landing/WalletFeaturesSection.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ValueBadge } from "@/components/ui/value-badge";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Fingerprint, KeyRound, ShieldOff } from "lucide-react";

const features = [
  {
    icon: <KeyRound />,
    title: 'Truly Non-Custodial',
    description: 'You control your keys, you control your Bitcoin. We never have access to your funds or your passphrase.',
    colorScheme: 'complementary',
  },
  {
    icon: <Fingerprint />,
    title: 'On-Chain Privacy',
    description: 'Designed to mitigate address reuse and protect your transaction history from trivial blockchain analysis.',
    colorScheme: 'complementary',
  },
  {
    icon: <ShieldOff />,
    title: 'No Accounts or Tracking',
    description: 'No email sign-ups, no personal information collected. Your privacy is paramount from the moment you start.',
    colorScheme: 'complementary',
  },
];

export function WalletFeaturesSection() {
  return (
    <section id="features" className="edge-to-edge-section py-20 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <BackgroundBeams intensity="subtle" className="opacity-20" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Your Wallet, <span className="text-primary">Your Privacy</span></h2>
          <p className="text-lg text-muted-foreground font-normal">Keep control of your Bitcoin from the moment you start.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            <ValueBadge icon={KeyRound} text="Self-Custody" variant="primary" />
            <ValueBadge icon={Fingerprint} text="Biometric" variant="primary" />
            <ValueBadge icon={ShieldOff} text="Private" variant="primary" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-card border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
            >
              <CardHeader className="flex flex-row items-start gap-4 p-6 pb-2">
                <div className="p-3 rounded-2xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <div className="text-primary [&>svg]:h-6 [&>svg]:w-6">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="font-bold text-xl pt-1 text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <CardDescription className="font-normal text-muted-foreground leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
