
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ValueBadge } from "@/components/ui/value-badge";
import { BarChart3, Search, Bot, LineChart, ShieldAlert, BookUser, Zap, Bitcoin } from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: 'Wallet Visualization',
    description: 'See a clear, interactive graph of all transactions and fund flows.',
    colorScheme: 'primary',
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: 'OPSEC Threat Detection',
    description: 'Automatically identify risks like address reuse and peel chains.',
    colorScheme: 'primary',
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: 'AI Wallet Analysis',
    description: 'Ask our AI to summarize wallet activity or explain complex transactions.',
    colorScheme: 'primary',
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: 'Transaction History Graphs',
    description: 'Track wallet balance and activity over time with detailed charts.',
    colorScheme: 'primary',
  },
  {
    icon: <ShieldAlert className="h-8 w-8 text-primary" />,
    title: 'Privacy Risk Insights',
    description: 'Get actionable reports on potential privacy vulnerabilities in a wallet.',
    colorScheme: 'primary',
  },
  {
    icon: <BookUser className="h-8 w-8 text-primary" />,
    title: 'Ask AI About Any Address',
    description: 'Use natural language to query any Bitcoin address and get instant answers.',
    colorScheme: 'primary',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="edge-to-edge-section py-20 md:py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <BackgroundBeams intensity="subtle" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gradient-title">Your Bitcoin Investigation Toolkit</h2>
          <p className="text-lg text-muted-foreground font-normal">Professional-grade tools for analyzing Bitcoin transactions, detecting privacy risks, and uncovering wallet patterns with AI-powered insights.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            <ValueBadge icon={Bitcoin} text="On-Chain Analysis" variant="orange" />
            <ValueBadge icon={Zap} text="Real-Time Data" variant="orange" />
            <ValueBadge icon={Bot} text="AI-Powered" variant="orange" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {features.map((feature, idx) => (
            <Card 
              key={idx} 
              className="bg-card/50 transition-colors shadow-glow p-4 flex flex-col items-center hover:border-primary/50"
            >
              <CardHeader className="p-2">
                 {feature.icon}
              </CardHeader>
              <CardContent className="p-2 flex-grow">
                <CardTitle className="font-bold text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="font-normal">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
