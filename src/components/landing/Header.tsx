"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { products } from "@/components/landing/products-data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown, BarChart, Lock, Rocket } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const DEFAULT_APP_URL = "https://app.bitsleuth.ai/";

function getValidatedAppUrl(): string {
  const raw = process.env.NEXT_PUBLIC_APP_URL;

  if (!raw) {
    return DEFAULT_APP_URL;
  }

  try {
    const url = new URL(raw);

    // Only allow the trusted app.bitsleuth.ai origin; fall back otherwise.
    if (url.protocol === "https:" && url.hostname === "app.bitsleuth.ai") {
      return url.toString();
    }
  } catch {
    // Ignore parsing errors and fall through to default.
  }

  return DEFAULT_APP_URL;
}

const APP_URL = getValidatedAppUrl();

const launchButtonDesktopClassName =
  "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] header-dropdown-trigger px-4 py-2.5 transition-all duration-200 group";

const launchButtonMobileClassName =
  "bg-primary hover:bg-primary/90 text-primary-foreground w-full justify-start touch-manipulation select-none";

const logoLinkClassName = cn(
  "group flex items-center justify-center gap-3 px-3 sm:px-3.5 py-2 rounded-full",
  "hover:opacity-90 transition-all duration-300 bg-background/40 backdrop-blur-sm",
  "supports-backdrop-filter:bg-background/60 border border-border/60",
  "hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
);

const logoImageClassName =
  "rounded-2xl shadow-xs group-hover:shadow-md group-hover:shadow-primary/20 transition-shadow duration-300";

const headerProductsButtonClassName = cn(
  "text-[15px] md:text-base font-semibold",
  "text-muted-foreground",
  "hover:text-foreground hover:bg-primary/5",
  "transition-all duration-200",
  "header-dropdown-trigger",
  "px-3 py-2",
  "group data-[state=open]:text-foreground"
);

interface HeaderProps {
  basePath?: string;
}

const NAV_ENABLED_PATHS = ['/analyzer', '/wallet'] as const;

export function Header({ basePath = '' }: HeaderProps) {
  const allNavLinks = [
    { href: `${basePath}/#features`, label: "Features" },
    { href: `${basePath}/#pricing`, label: "Pricing" },
    { href: `${basePath}/#faq`, label: "FAQ" },
  ];

  // Map basePath to an array of link labels to hide for that path
  const navLinksHiddenByBasePath: Record<string, string[]> = {
    '/wallet': ['Pricing'],
    // e.g., '/analyzer': ['FAQ'], etc. Add more entries as and when needed
  };
  const labelsToHide = navLinksHiddenByBasePath[basePath] || [];
  const navLinks = allNavLinks.filter(link => !labelsToHide.includes(link.label));

  const showNavLinks = (NAV_ENABLED_PATHS as readonly string[]).includes(basePath);

  const headerStyle = {
    paddingLeft: 'max(1rem, env(safe-area-inset-left))',
    paddingRight: 'max(1rem, env(safe-area-inset-right))',
  };

  const headerClassName = cn(
    "edge-to-edge-section pt-4 pb-4 flex items-center shadow-md sticky top-0 z-50",
    "bg-linear-to-b from-primary/15 via-background/95 to-background/95",
    "backdrop-blur-xl border-b border-border/40"
  );

  return (
    <header
      className={headerClassName}
      suppressHydrationWarning
      style={headerStyle}
    >
      <Link href="/" className={logoLinkClassName}>
        <Image
          src="/images/logo-icon.jpg"
          alt="BitSleuth Logo"
          width={48}
          height={48}
          className={logoImageClassName}
        />
        <span className="font-bold text-[1.35rem] leading-none tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">BitSleuth</span>
      </Link>
      <nav className="ml-auto hidden gap-9 sm:flex items-center">
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={headerProductsButtonClassName}>
              Products <ChevronDown className="h-4 w-4 ml-1 shrink-0 transition-transform duration-300 data-[state=open]:rotate-180" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56" sideOffset={8}>
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <DropdownMenuItem asChild key={product.href}>
                  <Link href={product.href} className="w-full cursor-pointer">
                    <div className="flex items-start gap-3">
                      <Icon className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <p className="font-semibold">{product.title}</p>
                        <p className="text-xs text-muted-foreground font-normal">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        {showNavLinks && navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[15px] md:text-base font-semibold text-muted-foreground hover:text-foreground transition-colors"
            prefetch={false}
          >
            {link.label}
          </Link>
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className={launchButtonDesktopClassName}>
              <Rocket className="mr-2 h-4 w-4 shrink-0 group-hover:rotate-12 transition-transform duration-300" />
              Launch App
              <ChevronDown className="h-4 w-4 ml-1 shrink-0 transition-transform duration-300 data-[state=open]:rotate-180" />
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
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="text-muted-foreground hover:text-primary font-medium"
                prefetch={false}
              >
                {product.title}
              </Link>
            ))}

            {showNavLinks && navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-primary font-medium" prefetch={false}>{link.label}</Link>
            ))}

            <div className="mt-2">
              <ThemeToggle />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className={launchButtonMobileClassName}
                  suppressHydrationWarning
                >
                  <Rocket className="mr-2 h-4 w-4" />
                  Launch App
                  <ChevronDown className="h-4 w-4 ml-auto transition-transform duration-300 data-[state=open]:rotate-180" />
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
