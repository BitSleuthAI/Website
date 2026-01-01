"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown, BarChart, Lock, Rocket, GraduationCap, ScrollText } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const APP_URL = "https://app.bitsleuth.ai/";

interface HeaderProps {
  basePath?: string;
}

export function Header({ basePath = '' }: HeaderProps) {
  const allNavLinks = [
    { href: `${basePath}/#features`, label: "Features" },
    { href: `${basePath}/#pricing`, label: "Pricing" },
    { href: `${basePath}/#faq`, label: "FAQ" },
  ];

  // Map basePath to an array of link labels to hide for that path
  const navLinksHiddenByBasePath: { [key: string]: string[] } = {
    '/wallet': ['Pricing'],
    // e.g., '/analyzer': ['FAQ'], etc. Add more entries as and when needed
  };
  const labelsToHide = navLinksHiddenByBasePath[basePath] || [];
  const navLinks = allNavLinks.filter(link => !labelsToHide.includes(link.label));

  const showNavLinks = basePath === '/analyzer' || basePath === '/wallet';

  const headerStyle = {
    paddingTop: 'calc(1rem + env(safe-area-inset-top))',
    paddingBottom: '1rem',
    paddingLeft: 'max(1rem, env(safe-area-inset-left))',
    paddingRight: 'max(1rem, env(safe-area-inset-right))',
    minHeight: 'calc(4rem + env(safe-area-inset-top))',
    height: 'calc(4rem + env(safe-area-inset-top))',
  };

  return (
    <header
      className="edge-to-edge-section flex items-center shadow-sm sticky top-0 z-50 bg-gradient-to-b from-primary/10 via-background/95 to-background/95 backdrop-blur-md border-b border-border/40"
      suppressHydrationWarning
      style={headerStyle}
    >
      <Link href="/" className="flex items-center justify-center hover:opacity-90 transition-opacity">
        <Image src="/images/logo-icon.jpg" alt="BitSleuth Logo" width={40} height={40} className="rounded-xl shadow-sm" />
        <span className="ml-3 font-bold text-xl tracking-tight text-foreground">BitSleuth</span>
      </Link>
      <nav className="ml-auto hidden gap-8 sm:flex items-center">
        <ThemeToggle />
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors touch-manipulation" suppressHydrationWarning>
              Products <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56" sideOffset={8}>
            <DropdownMenuItem asChild>
              <Link href="/analyzer" className="w-full cursor-pointer">
                <div className="flex items-start gap-3">
                  <BarChart className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <p className="font-semibold">Wallet Analyzer</p>
                    <p className="text-xs text-muted-foreground font-normal">AI-powered transaction analysis</p>
                  </div>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/wallet" className="w-full cursor-pointer">
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <p className="font-semibold">Privacy Wallet</p>
                    <p className="text-xs text-muted-foreground font-normal">Non-custodial, private BTC wallet</p>
                  </div>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/learn" className="w-full cursor-pointer">
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <p className="font-semibold">Learning Hub</p>
                    <p className="text-xs text-muted-foreground font-normal">Bitcoin Educational Hub</p>
                  </div>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/history" className="w-full cursor-pointer">
                <div className="flex items-start gap-3">
                  <ScrollText className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <p className="font-semibold">Bitcoin History</p>
                    <p className="text-xs text-muted-foreground font-normal">History of Bitcoin</p>
                  </div>
                </div>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {showNavLinks && navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            prefetch={false}
          >
            {link.label}
          </Link>
        ))}

        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-none touch-manipulation" suppressHydrationWarning>
              <Rocket className="mr-2 h-4 w-4" />
              Launch App
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={8}>
            <DropdownMenuItem asChild>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="w-full cursor-pointer">
                <div className="flex items-start gap-3">
                  <BarChart className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <p className="font-semibold">Wallet Analyzer</p>
                  </div>
                </div>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/wallet/download" className="w-full cursor-pointer">
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <p className="font-semibold">Privacy Wallet</p>
                  </div>
                </div>
              </Link>
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>

      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="ml-auto sm:hidden" suppressHydrationWarning>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <Image src="/images/logo-icon.jpg" alt="BitSleuth Logo" width={32} height={32} className="rounded-lg" />
              <span className="ml-2 font-bold text-lg">BitSleuth</span>
            </Link>
            <Link href="/analyzer" className="text-muted-foreground hover:text-primary font-medium" prefetch={false}>Wallet Analyzer</Link>
            <Link href="/wallet" className="text-muted-foreground hover:text-primary font-medium" prefetch={false}>Privacy Wallet</Link>
            <Link href="/learn" className="text-muted-foreground hover:text-primary font-medium" prefetch={false}>Learning Hub</Link>
            <Link href="/history" className="text-muted-foreground hover:text-primary font-medium" prefetch={false}>Bitcoin History</Link>

            {showNavLinks && navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-primary font-medium" prefetch={false}>{link.label}</Link>
            ))}

            <div className="mt-2">
              <ThemeToggle />
            </div>

            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full justify-start touch-manipulation" suppressHydrationWarning>
                  <Rocket className="mr-2 h-4 w-4" />
                  Launch App
                  <ChevronDown className="h-4 w-4 ml-auto" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full" sideOffset={8}>
                <DropdownMenuItem asChild>
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="w-full font-medium">
                    Wallet Analyzer
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wallet/download" className="w-full font-medium">
                    Privacy Wallet
                  </Link>
                </DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
