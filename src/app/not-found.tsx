
// src/app/not-found.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Bot, Home, BookOpen, Shield, Wallet, GraduationCap } from 'lucide-react';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function NotFound() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const openPrivacyModal = () => setActiveModal('privacy');
  const openTermsModal = () => setActiveModal('terms');
  const closeModal = () => setActiveModal(null);

  const quickLinks = [
    { href: '/history', label: 'History', icon: BookOpen },
    { href: '/learn', label: 'Learn', icon: GraduationCap },
    { href: '/analyzer', label: 'Analyzer', icon: Shield },
    { href: '/wallet', label: 'Wallet', icon: Wallet },
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section className="edge-to-edge-section py-20 md:py-24 lg:py-32 text-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/50 to-background z-0" />
          <BackgroundBeams intensity="subtle" className="opacity-30" />
          <div className="container max-w-5xl mx-auto px-4 md:px-6 relative z-10">
            <div className="space-y-8">
              {/* Main 404 Card */}
              <Card className="bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-xl">
                <CardContent className="p-10 md:p-16">
                  <div className="text-center space-y-8">
                    <div className="mx-auto flex justify-center">
                      <div className="p-6 rounded-2xl bg-primary/10 animate-pulse">
                        <Bot className="h-20 w-20 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl text-foreground">
                        404
                      </h1>
                      <h2 className="text-2xl font-semibold sm:text-3xl text-foreground">
                        Page Not Found
                      </h2>
                      <p className="text-lg text-gray-400 max-w-lg mx-auto leading-relaxed">
                        Oh sleuth!!! It seems BitSleuth bot got lost in the digital ether. The page you're looking for might have been moved or never existed.
                      </p>
                    </div>
                    <div className="pt-2">
                      <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-none">
                        <Link href="/">
                          <ArrowLeft className="mr-2 h-5 w-5" />
                          Return to Home
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-6">Or explore these pages</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {quickLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="group">
                      <Card className="bg-gray-100 dark:bg-[#1a1a1a] border-none shadow-none hover:shadow-xl transition-all duration-300 h-full">
                        <CardContent className="p-6 flex flex-col items-center gap-3">
                          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <link.icon className="h-8 w-8 text-primary" />
                          </div>
                          <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                            {link.label}
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
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
