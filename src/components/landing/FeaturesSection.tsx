
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ValueBadge } from "@/components/ui/value-badge";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BarChart3, Search, Bot, LineChart, ShieldAlert, BookUser, Zap, Bitcoin } from "lucide-react";

const features = [
  {
    icon: <BarChart3 />,
    title: 'Wallet Visualization',
    description: 'See a clear, interactive graph of all transactions and fund flows.',
    colorScheme: 'primary',
  },
  {
    icon: <Search />,
    title: 'OPSEC Threat Detection',
    description: 'Automatically identify risks like address reuse and peel chains.',
    colorScheme: 'primary',
  },
  {
    icon: <Bot />,
    title: 'AI Wallet Analysis',
    description: 'Ask our AI to summarize wallet activity or explain complex transactions.',
    colorScheme: 'primary',
  },
  {
    icon: <LineChart />,
    title: 'Transaction History Graphs',
    description: 'Track wallet balance and activity over time with detailed charts.',
    colorScheme: 'primary',
  },
  {
    icon: <ShieldAlert />,
    title: 'Privacy Risk Insights',
    description: 'Get actionable reports on potential privacy vulnerabilities in a wallet.',
    colorScheme: 'primary',
  },
  {
    icon: <BookUser />,
    title: 'Ask AI About Any Address',
    description: 'Use natural language to query any Bitcoin address and get instant answers.',
    colorScheme: 'primary',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="edge-to-edge-section py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
      <BackgroundBeams intensity="subtle" className="opacity-20" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Your Bitcoin <span className="text-primary">Investigation Toolkit</span></h2>
          <p className="text-lg text-muted-foreground font-normal">Professional-grade tools for analyzing Bitcoin transactions, detecting privacy risks, and uncovering wallet patterns with AI-powered insights.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            <ValueBadge icon={Bitcoin} text="On-Chain Analysis" variant="primary" />
            <ValueBadge icon={Zap} text="Real-Time Data" variant="primary" />
            <ValueBadge icon={Bot} text="AI-Powered" variant="primary" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-card border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center overflow-hidden group"
            >
              <CardHeader className="p-6 pb-2">
                <div className="p-3 rounded-2xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  {/* We need to clone the element to add the className if it's a React element, or just render it if we update the array */}
                  {/* For simplicity, let's assume we update the array above or just style the icon here if possible. 
                       Actually, the array has the icon as a component. Let's update the array definition instead to be cleaner, 
                       but for now let's just wrap it or style the container. 
                       The icon in the array has text-complementary. We should update the array too. */}
                  <div className="text-primary [&>svg]:h-8 [&>svg]:w-8">
                    {feature.icon}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-2 flex-grow">
                <CardTitle className="font-bold text-xl mb-2 text-foreground">{feature.title}</CardTitle>
                <CardDescription className="font-normal text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
