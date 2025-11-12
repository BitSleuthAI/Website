
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BackgroundBeams } from "@/components/ui/background-beams";

const plans = [
  {
    title: 'Free (Full Access During Beta)',
    price: '$0/mo',
    desc: <>Basic insights <span className="line-through">& 1 address lookup per day.</span></>,
    features: ['Wallet Analysis', 'Transaction History'],
    cta: 'Get Started',
    href: 'https://app.bitsleuth.ai/'
  },
  {
    title: 'Pro',
    price: '$9/mo',
    desc: 'For power users and analysts.',
    features: ['Unlimited Lookups', 'AI Chat Analysis', 'OPSEC Threat Detection', 'Export Tools'],
    cta: 'Go Pro',
    comingSoon: true,
  },
  {
    title: 'Enterprise',
    price: 'Contact Us',
    desc: 'For businesses and teams.',
    features: ['Bulk Address Access', 'Dedicated API', 'Priority Support'],
    cta: 'Contact Sales',
    comingSoon: true,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="edge-to-edge-section py-20 md:py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <BackgroundBeams intensity="subtle" />
      <div className="container max-w-6xl mx-auto text-center px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gradient-title">Pricing Plans</h2>
          <p className="text-lg text-muted-foreground font-normal">Choose the plan that fits your Bitcoin analysis needs. Start free during our beta period.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <Card key={idx} className={`relative flex flex-col text-left overflow-hidden shadow-glow ${plan.comingSoon ? 'blur-sm pointer-events-none' : ''}`}>
              {plan.comingSoon && (
                  <Badge variant="secondary" className="absolute top-4 right-4 text-xs font-bold py-1 px-3 z-10 blur-none">COMING SOON</Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                <p className="text-3xl text-primary font-bold">{plan.price}</p>
                <CardDescription className="font-normal">{plan.desc}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <ul className="space-y-2 mb-8 flex-grow font-medium">
                    {plan.features.map(feature => <li key={feature} className="flex items-center gap-2">✅<span>{feature}</span></li>)}
                </ul>
                <Button asChild variant="outline" className="w-full">
                  {plan.href ? <a href={plan.href}>{plan.cta}</a> : <span>{plan.cta}</span>}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
