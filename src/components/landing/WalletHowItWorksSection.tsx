
// src/components/landing/WalletHowItWorksSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";

const steps = [
  {
    title: "Step 1",
    description: "Generate or import your secure BIP39 passphrase. Write it down and store it safely offline.",
    colorScheme: "primary",
  },
  {
    title: "Step 2",
    description: "Receive Bitcoin to your wallet. Each transaction can use a new address to protect your privacy.",
    colorScheme: "complementary",
  },
  {
    title: "Step 3",
    description: "Send Bitcoin with peace of mind. You are always in full control of your private keys.",
    colorScheme: "primary",
  },
];

export function WalletHowItWorksSection() {
  return (
    <section className="edge-to-edge-section py-20 md:py-24 lg:py-32 relative overflow-hidden">
      <BackgroundBeams intensity="subtle" />
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-gradient-title">Simple, Secure, Self-Custody</h2>
          <p className="text-lg text-muted-foreground font-normal">Managing your Bitcoin should be effortless - and safe.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <Card key={idx} className="bg-secondary/30 text-left shadow-glow">
                <CardHeader>
                    <CardTitle className={`text-lg font-bold mb-2 ${
                      step.colorScheme === 'complementary' ? 'text-complementary' : 'text-primary'
                    }`}>{step.title}</CardTitle>
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
