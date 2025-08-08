
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Search, Bot, LineChart, ShieldAlert, BookUser } from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: 'Wallet Visualization',
    description: 'See a clear, interactive graph of all transactions and fund flows.',
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: 'OPSEC Threat Detection',
    description: 'Automatically identify risks like address reuse and peel chains.',
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: 'AI Wallet Analysis',
    description: 'Ask our AI to summarize wallet activity or explain complex transactions.',
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: 'Transaction History Graphs',
    description: 'Track wallet balance and activity over time with detailed charts.',
  },
  {
    icon: <ShieldAlert className="h-8 w-8 text-primary" />,
    title: 'Privacy Risk Insights',
    description: 'Get actionable reports on potential privacy vulnerabilities in a wallet.',
  },
  {
    icon: <BookUser className="h-8 w-8 text-primary" />,
    title: 'Ask AI About Any Address',
    description: 'Use natural language to query any Bitcoin address and get instant answers.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-20 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-white">Your Bitcoin Investigation Toolkit</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {features.map((feature, idx) => (
            <Card key={idx} className="bg-card/50 hover:border-primary/50 transition-colors shadow-glow p-4 flex flex-col items-center">
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
