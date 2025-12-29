
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
    <section id="pricing" className="edge-to-edge-section py-20 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <BackgroundBeams intensity="subtle" className="opacity-20" />
      <div className="container max-w-6xl mx-auto text-center relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Pricing <span className="text-primary">Plans</span></h2>
          <p className="text-lg text-muted-foreground font-normal">Choose the plan that fits your Bitcoin analysis needs. Start free during our beta period.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative flex flex-col text-left overflow-hidden shadow-xl bg-card border-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${plan.comingSoon ? 'blur-sm pointer-events-none opacity-70' : ''
                }`}
            >
              {plan.comingSoon && (
                <Badge variant="secondary" className="absolute top-4 right-4 text-xs font-bold py-1 px-3 z-10 blur-none bg-primary/20 text-primary border-primary/20">COMING SOON</Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">{plan.title}</CardTitle>
                <p className="text-3xl text-primary font-bold">{plan.price}</p>
                <CardDescription className="font-normal text-gray-400">{plan.desc}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <ul className="space-y-2 mb-8 flex-grow font-medium text-muted-foreground">
                  {plan.features.map(feature => <li key={feature} className="flex items-center gap-2"><span className="text-primary">✅</span><span>{feature}</span></li>)}
                </ul>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-none">
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
