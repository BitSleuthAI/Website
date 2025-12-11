// src/components/landing/WalletBuiltForBitcoinersSection.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ValueBadge } from "@/components/ui/value-badge";
import { Settings, Bitcoin, Users, Coins } from "lucide-react";

const bitcoinerFeatures = [
  {
    icon: <Settings />,
    title: 'Full UTXO Control',
    description: 'View and manage your UTXOs (Unspent Transaction Outputs) directly. Freeze specific UTXOs to prevent them from being spent in future transactions.',
  },
  {
    icon: <Bitcoin />,
    title: 'Modern Bitcoin Standards',
    description: 'We use BIP84 derivation for Native SegWit (Bech32) addresses, which means lower transaction fees and faster confirmations.',
  },
  {
    icon: <Users />,
    title: 'Manage Multiple Wallets',
    description: 'Easily create and manage multiple, separate wallets within the same app.',
  },
];

export function WalletBuiltForBitcoinersSection() {
  return (
    <section className="edge-to-edge-section py-20 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Built for <span className="text-primary">Bitcoiners</span></h2>
          <p className="text-lg text-muted-foreground font-normal">Designed by the Bitcoin community, for the Bitcoin community. Every feature serves the goal of financial sovereignty.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            <ValueBadge icon={Coins} text="UTXO Management" variant="primary" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {bitcoinerFeatures.map((feature, idx) => (
            <Card key={idx} className="bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
              <CardHeader className="flex flex-col items-center text-center p-6">
                <div className="p-3 mb-4 rounded-2xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <div className="text-primary [&>svg]:h-6 [&>svg]:w-6">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="font-bold text-lg text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <CardDescription className="font-normal text-center text-gray-400 leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
