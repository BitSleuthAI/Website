
// src/components/landing/WalletHowItWorksSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    title: "Step 1",
    description: "Generate or import your secure BIP39 passphrase. Write it down and store it safely offline.",
  },
  {
    title: "Step 2",
    description: "Receive Bitcoin to your wallet. Each transaction can use a new address to protect your privacy.",
  },
  {
    title: "Step 3",
    description: "Send Bitcoin with peace of mind. You are always in full control of your private keys.",
  },
];

export function WalletHowItWorksSection() {
  return (
    <section className="w-full py-20 md:py-24 lg:py-32">
      <div className="container max-w-5xl mx-auto text-center px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">Simple, Secure, Self-Custody</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <Card key={idx} className="bg-secondary/30 text-left shadow-glow">
                <CardHeader>
                    <CardTitle className="text-lg font-bold mb-2 text-primary">{step.title}</CardTitle>
                </CardHeader>
              <CardContent>
                <p className="font-normal">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
