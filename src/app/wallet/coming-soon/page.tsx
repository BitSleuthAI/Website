"use client";

import { useState } from 'react';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { toast } from '@/hooks/use-toast';
import { Lock, Clock, ArrowRight, Shield, Smartphone, Download, Mail, Check } from 'lucide-react';
import Link from 'next/link';

const TESTFLIGHT_BETA_URL = 'https://testflight.apple.com/join/ydx1xxFK';

export default function ComingSoonPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "You're on the list!",
          description: "We'll be in touch soon.",
        });
        setEmail('');
      } else {
        toast({
          title: "Error",
          description: data.error || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background overflow-x-hidden">
      <Header basePath="/wallet" />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-24 lg:py-32 bg-gradient-to-br from-background to-muted dark:to-black text-foreground relative overflow-hidden">
          <BackgroundBeams />
          <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Clock className="h-4 w-4" />
                Coming Soon
              </div>
              
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gradient-title">
                BitSleuth Wallet
              </h1>
              
              <p className="text-lg text-muted-foreground md:text-xl font-normal max-w-3xl mx-auto">
                Your privacy-first Bitcoin wallet is in development. Get ready for a secure, non-custodial experience that puts you in complete control of your Bitcoin.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/wallet">
                    <Shield className="mr-2 h-5 w-5" />
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://app.bitsleuth.ai/" target="_blank" rel="noopener noreferrer">
                    Try Analyzer
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="w-full py-20 md:py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
          <BackgroundBeams intensity="subtle" />
          <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gradient-title">What to Expect</h2>
              <p className="text-lg text-muted-foreground font-normal">
                BitSleuth Wallet will be the most privacy-focused Bitcoin wallet available
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card/50 hover:border-primary/50 transition-colors shadow-glow p-6 text-center">
                <CardHeader className="p-2">
                  <Lock className="h-12 w-12 text-primary mx-auto" />
                </CardHeader>
                <CardContent className="p-2">
                  <CardTitle className="font-bold text-xl mb-2">Non-Custodial</CardTitle>
                  <CardDescription className="font-normal">
                    Your keys, your Bitcoin. We never have access to your funds or private keys.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card/50 hover:border-primary/50 transition-colors shadow-glow p-6 text-center">
                <CardHeader className="p-2">
                  <Shield className="h-12 w-12 text-primary mx-auto" />
                </CardHeader>
                <CardContent className="p-2">
                  <CardTitle className="font-bold text-xl mb-2">Privacy-First</CardTitle>
                  <CardDescription className="font-normal">
                    Built to minimize address reuse and on-chain exposure by default.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card/50 hover:border-primary/50 transition-colors shadow-glow p-6 text-center">
                <CardHeader className="p-2">
                  <Smartphone className="h-12 w-12 text-primary mx-auto" />
                </CardHeader>
                <CardContent className="p-2">
                  <CardTitle className="font-bold text-xl mb-2">Mobile Native</CardTitle>
                  <CardDescription className="font-normal">
                    Coming to iOS and Android with a beautiful, intuitive interface.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section className="w-full py-20 md:py-24 lg:py-32 bg-primary/10 relative overflow-hidden">
          <BackgroundBeams />
          <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold text-gradient-title">Be the First to Know</h2>
              <p className="text-lg text-muted-foreground font-normal max-w-2xl mx-auto">
                Join our waitlist to get early access to BitSleuth Wallet and exclusive updates on our development progress.
              </p>
              
              <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm border-border/50 shadow-glow">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Join the Waitlist</h3>
                      <p className="text-muted-foreground">
                        Get notified when BitSleuth Wallet launches
                      </p>
                    </div>
                    
                    <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                      <div className="flex gap-2">
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="flex-1 bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                          disabled={isLoading}
                        />
                        <Button type="submit" className="px-8" disabled={isLoading}>
                          <Download className="mr-2 h-4 w-4" />
                          {isLoading ? "Joining..." : "Join"}
                        </Button>
                      </div>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        We respect your privacy. No spam, just updates about BitSleuth Wallet.
                      </p>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Development Timeline */}
        <section className="w-full py-20 md:py-24 lg:py-32 bg-gradient-to-br from-background to-muted relative overflow-hidden">
          <BackgroundBeams intensity="subtle" />
          <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gradient-title">Development Timeline</h2>
              <p className="text-lg text-muted-foreground font-normal">
                Follow our progress as we build the future of Bitcoin privacy
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Core Development</h3>
                  <p className="text-muted-foreground">
                    Building the secure foundation with BIP39 passphrase support and HD wallet generation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Privacy Features</h3>
                  <p className="text-muted-foreground">
                    Implementing address reuse prevention and transaction privacy enhancements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                  <p className="text-muted-foreground">
                    Creating beautiful, intuitive interfaces for iOS and Android platforms.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Beta Testing</h3>
                  <p className="text-muted-foreground mb-3">
                    Limited beta release for early adopters and security testing.
                  </p>
                  <p className="text-sm text-primary font-medium">
                    Want to participate in the iOS beta testing? To join the BitSleuth Wallet beta, open the link{' '}
                    <a 
                      href={TESTFLIGHT_BETA_URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline hover:text-primary/80 transition-colors"
                      aria-label="Join BitSleuth Wallet TestFlight beta"
                    >
                      {TESTFLIGHT_BETA_URL}
                    </a>
                    {' '}on your iPhone after you install TestFlight and help test the beta version!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer onPrivacyClick={openPrivacyModal} onTermsClick={openTermsModal} />
      <PrivacyPolicyModal isOpen={activeModal === 'privacy'} onOpenChange={closeModal} />
      <TermsOfServiceModal 
        isOpen={activeModal === 'terms'} 
        onOpenChange={closeModal}
        onPrivacyClick={openPrivacyModal} 
      />
    </div>
  );
}
