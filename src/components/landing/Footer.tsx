import Link from 'next/link';
import { Search } from 'lucide-react';
import { useScrollPosition } from '@/hooks/use-scroll-position';

interface FooterProps {
  onTermsClick: () => void;
  onPrivacyClick: () => void;
}

export function Footer({ onTermsClick, onPrivacyClick }: FooterProps) {
  const { scrollY, scrollDirection, isAtBottom } = useScrollPosition();
  
  // Calculate footer state based on scroll
  // Footer should show when scrolling up, hide when scrolling down (unless at bottom)
  const shouldShowFooter = isAtBottom || scrollDirection === 'up';
  
  
  return (
    <footer 
      className={`edge-to-edge-section flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6 border-t sticky bottom-0 z-40 bg-background/80 backdrop-blur-sm transition-all duration-300 ease-in-out ${
        shouldShowFooter ? 'visible' : 'hidden'
      }`}
      style={{ 
        paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))',
        transform: shouldShowFooter ? 'translateY(0)' : 'translateY(100%)'
      }}
    >
      <div className="flex items-center gap-2">
        <Search className="h-6 w-6 text-primary" />
        <p className="text-sm text-muted-foreground font-normal">&copy; {new Date().getFullYear()} BitSleuth. All rights reserved.</p>
      </div>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/glossary"
          className="text-sm hover:underline underline-offset-4 text-muted-foreground font-medium"
          prefetch={false}
        >
          Glossary
        </Link>
        <a
          href="https://primal.net/p/nprofile1qqs9lrs07tqjg4vkvdh0sn4dkv8v38xddmz87tm2c2rkx7s8jsr426gdz006n"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline underline-offset-4 text-muted-foreground font-medium"
        >
          Nostr
        </a>
        <button onClick={onTermsClick} className="text-sm hover:underline underline-offset-4 text-muted-foreground font-medium">
          Terms of Service
        </button>
        <button onClick={onPrivacyClick} className="text-sm hover:underline underline-offset-4 text-muted-foreground font-medium">
          Privacy Policy
        </button>
      </nav>
    </footer>
  );
}
