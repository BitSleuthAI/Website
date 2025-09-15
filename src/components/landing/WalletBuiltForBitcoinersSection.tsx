// src/components/landing/WalletBuiltForBitcoinersSection.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Bitcoin, Users } from "lucide-react";

const bitcoinerFeatures = [
  {
    icon: <Settings className="h-8 w-8 text-primary" />,
    title: 'Full UTXO Control',
    description: 'View and manage your UTXOs (Unspent Transaction Outputs) directly. Freeze specific UTXOs to prevent them from being spent in future transactions.',
  },
  {
    icon: <Bitcoin className="h-8 w-8 text-primary" />,
    title: 'Modern Bitcoin Standards',
    description: 'We use BIP84 derivation for Native SegWit (Bech32) addresses, which means lower transaction fees and faster confirmations.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Manage Multiple Wallets',
    description: 'Easily create and manage multiple, separate wallets within the same app.',
  },
];

export function WalletBuiltForBitcoinersSection() {
  return (
    <section className="w-full py-20 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gradient-title">Built for Bitcoiners</h2>
          <p className="text-lg text-muted-foreground font-normal">Designed by the Bitcoin community, for the Bitcoin community. Every feature serves the goal of financial sovereignty.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {bitcoinerFeatures.map((feature, idx) => (
            <Card key={idx} className="bg-card/50 hover:border-primary/50 transition-colors shadow-glow p-4">
              <CardHeader className="flex flex-col items-center text-center p-2">
                {feature.icon}
                <CardTitle className="font-bold text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-2 pt-0">
                <CardDescription className="font-normal text-center">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
