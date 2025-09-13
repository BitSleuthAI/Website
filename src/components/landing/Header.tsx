
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Search, ChevronDown, BarChart, Lock, Rocket } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface HeaderProps {
  basePath?: string;
}

export function Header({ basePath = '' }: HeaderProps) {
  const allNavLinks = [
    { href: `${basePath}/#features`, label: "Features" },
    { href: `${basePath}/#pricing`, label: "Pricing" },
    { href: `${basePath}/#faq`, label: "FAQ" },
  ];

  const navLinks = allNavLinks.filter(link => {
    if (basePath === '/wallet' && link.label === 'Pricing') {
      return false;
    }
    return true;
  });

  const showNavLinks = basePath === '/analyzer' || basePath === '/wallet';

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center shadow-sm sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <Link href="/" className="flex items-center justify-center">
        <Search className="h-6 w-6 text-primary" />
        <span className="ml-2 font-bold text-lg">BitSleuth</span>
      </Link>
      <nav className="ml-auto hidden gap-6 sm:flex items-center">
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Products <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="/analyzer" className="w-full">
                <div className="flex items-start gap-3">
                  <BarChart className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="font-semibold">Wallet Analyzer</p>
                    <p className="text-xs text-muted-foreground font-normal">AI-powered transaction analysis</p>
                  </div>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
               <Link href="/wallet" className="w-full">
                 <div className="flex items-start gap-3">
                    <Lock className="h-5 w-5 mt-1 text-primary" />
                    <div>
                        <p className="font-semibold">Privacy Wallet</p>
                        <p className="text-xs text-muted-foreground font-normal">Non-custodial, private BTC wallet</p>
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
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
             <Button>
              <Rocket className="mr-2 h-4 w-4" />
              Launch
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <a href="https://app.bitsleuth.ai/" target="_blank" rel="noopener noreferrer" className="w-full">
                  <div className="flex items-start gap-3">
                    <BarChart className="h-5 w-5 mt-1 text-primary" />
                    <div>
                      <p className="font-semibold">Wallet Analyzer</p>
                    </div>
                  </div>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/wallet" className="w-full">
                  <div className="flex items-start gap-3">
                      <Lock className="h-5 w-5 mt-1 text-primary" />
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
          <Button variant="outline" size="icon" className="ml-auto sm:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <Search className="h-6 w-6 text-primary" />
               <span className="ml-2 font-bold text-lg">BitSleuth</span>
            </Link>
            <Link href="/analyzer" className="text-muted-foreground hover:text-primary font-medium" prefetch={false}>Wallet Analyzer</Link>
            <Link href="/wallet" className="text-muted-foreground hover:text-primary font-medium" prefetch={false}>Privacy Wallet</Link>
            
            {showNavLinks && navLinks.map((link) => (
               <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-primary font-medium" prefetch={false}>{link.label}</Link>
            ))}
            
            <div className="mt-2">
              <ThemeToggle />
            </div>

             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>
                    <Rocket className="mr-2 h-4 w-4" />
                    Launch
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <a href="https://app.bitsleuth.ai/" target="_blank" rel="noopener noreferrer" className="w-full font-medium">
                        Wallet Analyzer
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/wallet" className="w-full font-medium">
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
