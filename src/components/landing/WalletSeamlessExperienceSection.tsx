// src/components/landing/WalletSeamlessExperienceSection.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, QrCode, Palette, BarChart3 } from "lucide-react";

const experienceFeatures = [
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: 'Mobile-First Design',
    description: 'A clean, intuitive interface that looks and feels great on your phone.',
  },
  {
    icon: <QrCode className="h-8 w-8 text-primary" />,
    title: 'QR Code Support',
    description: 'Effortlessly send and receive Bitcoin by scanning QR codes.',
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: 'Personalized Theming',
    description: 'Switch between beautiful light and dark modes to match your preference.',
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: 'Helpful Insights',
    description: 'Track your balance and portfolio performance with clear, easy-to-read charts.',
  },
];

export function WalletSeamlessExperienceSection() {
  return (
    <section className="w-full py-20 md:py-24 lg:py-32">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gradient-title">A Seamless User Experience</h2>
          <p className="text-lg text-muted-foreground font-normal">Experience Bitcoin management that's intuitive, efficient, and tailored to you.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experienceFeatures.map((feature, idx) => (
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
