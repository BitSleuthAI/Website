// src/components/landing/WalletSecuritySection.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ValueBadge } from "@/components/ui/value-badge";
import { Key, Lock, Fingerprint, ShieldCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: <Key className="h-8 w-8 text-primary" />,
    title: 'Client-Side Keys',
    description: 'Your secret recovery phrase (mnemonic) is generated and stored only on your device. We never have access to your keys or your funds.',
    colorScheme: 'primary',
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: 'PIN-Protected Encryption',
    description: 'Your recovery phrase is secured with strong AES encryption, protected by a PIN that only you know.',
    colorScheme: 'primary',
  },
  {
    icon: <Fingerprint className="h-8 w-8 text-primary" />,
    title: 'Advanced Two-Factor Authentication (2FA)',
    description: 'Add an extra layer of security with passkeys, using your device\'s biometrics or a hardware security key.',
    colorScheme: 'primary',
  },
];

export function WalletSecuritySection() {
  return (
    <section className="edge-to-edge-section py-20 md:py-24 lg:py-32 relative overflow-hidden">
      <BackgroundBeams intensity="subtle" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gradient-title">Uncompromising Security & Self-Custody</h2>
          <p className="text-lg text-muted-foreground font-normal">Your Bitcoin deserves the highest level of protection. We provide enterprise-grade security without compromising on privacy.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            <ValueBadge icon={ShieldCheck} text="Non-Custodial" variant="orange" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {securityFeatures.map((feature, idx) => (
            <Card 
              key={idx} 
              className="bg-card/50 transition-colors shadow-glow p-4 hover:border-primary/50"
            >
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
