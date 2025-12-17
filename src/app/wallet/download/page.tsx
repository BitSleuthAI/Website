"use client";

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PrivacyPolicyModal } from '@/components/landing/PrivacyPolicyModal';
import { TermsOfServiceModal } from '@/components/landing/TermsOfServiceModal';
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function DownloadPage() {
    const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

    const APP_STORE_LINK = "https://apps.apple.com/app/bitsleuth-wallet/id6753949588";
    const PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=ai.bitsleuth.wallet";

    const openPrivacyModal = () => setActiveModal('privacy');
    const openTermsModal = () => setActiveModal('terms');
    const closeModal = () => setActiveModal(null);

    useEffect(() => {
        // Smart redirection for mobile devices
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

        // iOS detection
        if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
            window.location.href = APP_STORE_LINK;
        }
        // Android detection
        else if (/android/i.test(userAgent)) {
            window.location.href = PLAY_STORE_LINK;
        }
    }, []);

    return (
        <div className="flex flex-col min-h-dvh bg-background">
            <Header basePath="/wallet" />

            <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden min-h-[80vh]">
                {/* Background Styles matching Wallet Page */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/50 to-background z-0" />
                <BackgroundBeams intensity="subtle" className="opacity-30" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none text-foreground drop-shadow-sm">
                            Download <br className="hidden sm:block" />
                            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                                BitSleuth Wallet
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
                            Your Bitcoin. Your Keys. Take full control with our privacy-first, non-custodial wallet.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                        {/* App Store Image Link */}
                        <a
                            href={APP_STORE_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-105 transition-transform duration-200"
                        >
                            <img
                                src="/images/app-store-black.png"
                                alt="Download on the App Store"
                                className="h-[64px] w-auto block dark:hidden"
                            />
                            <img
                                src="/images/app-store-white.png"
                                alt="Download on the App Store"
                                className="h-[64px] w-auto hidden dark:block"
                            />
                        </a>

                        {/* Google Play Image Link */}
                        <a
                            href={PLAY_STORE_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-105 transition-transform duration-200"
                        >
                            <img
                                src="/images/google-play-black.png"
                                alt="Get it on Google Play"
                                className="h-[64px] w-auto block dark:hidden"
                            />
                            <img
                                src="/images/google-play-white.png"
                                alt="Get it on Google Play"
                                className="h-[64px] w-auto hidden dark:block rounded-lg"
                            />
                        </a>
                    </div>

                    <div className="pt-8">
                        <Button asChild size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-white border-none shadow-md">
                            <Link href="/">
                                <ArrowLeft className="mr-2 h-5 w-5" /> Return to Home
                            </Link>
                        </Button>
                    </div>
                </div>
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
