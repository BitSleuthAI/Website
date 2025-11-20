
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";

const steps = [
  {
    title: "Step 1",
    description: "Paste a Bitcoin wallet address into the analysis bar.",
    colorScheme: "primary",
  },
  {
    title: "Step 2",
    description: "BitSleuth analyzes the transaction history and OPSEC risks.",
    colorScheme: "primary",
  },
  {
    title: "Step 3",
    description: "View visual insights and chat with our AI to understand the data.",
    colorScheme: "primary",
  },
];

export function HowItWorksSection() {
  return (
    <section className="edge-to-edge-section py-20 md:py-24 lg:py-32 relative overflow-hidden">
      <BackgroundBeams intensity="subtle" />
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-gradient-title">How It Works</h2>
          <p className="text-lg text-muted-foreground font-normal">Get started with Bitcoin analysis in three simple steps. No technical knowledge required.</p>
        </div>
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
