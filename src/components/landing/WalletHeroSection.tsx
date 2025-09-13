
// src/components/landing/WalletHeroSection.tsx
"use client";


export function WalletHeroSection() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-background to-muted dark:to-black text-foreground">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gradient-title">
            Secure, Non-Custodial & Private by Default
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl font-normal">
            A privacy-first Bitcoin wallet built to minimize address reuse and on-chain exposure, without compromising security. No accounts, no tracking, just you and your keys.
          </p>
        </div>
      </div>
    </section>
  );
}
