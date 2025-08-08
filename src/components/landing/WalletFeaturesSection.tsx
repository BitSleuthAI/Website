
// src/components/landing/WalletFeaturesSection.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Fingerprint, KeyRound, ShieldOff } from "lucide-react";

const features = [
  {
    icon: <KeyRound className="h-8 w-8 text-primary" />,
    title: 'Truly Non-Custodial',
    description: 'You control your keys, you control your Bitcoin. We never have access to your funds or your passphrase.',
  },
  {
    icon: <Fingerprint className="h-8 w-8 text-primary" />,
    title: 'On-Chain Privacy',
    description: 'Designed to mitigate address reuse and protect your transaction history from trivial blockchain analysis.',
  },
  {
    icon: <ShieldOff className="h-8 w-8 text-primary" />,
    title: 'No Accounts or Tracking',
    description: 'No email sign-ups, no personal information collected. Your privacy is paramount from the moment you start.',
  },
];

export function WalletFeaturesSection() {
  return (
    <section id="features" className="w-full py-20 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">Your Wallet, Your Privacy</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {features.map((feature, idx) => (
            <Card key={idx} className="bg-card/50 hover:border-primary/50 transition-colors shadow-glow p-4">
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
