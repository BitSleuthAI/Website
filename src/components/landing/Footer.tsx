import Link from 'next/link';
import { Search } from 'lucide-react';

interface FooterProps {
  onTermsClick: () => void;
  onPrivacyClick: () => void;
}

export function Footer({ onTermsClick, onPrivacyClick }: FooterProps) {
  return (
    <footer className="edge-to-edge-section flex flex-col gap-4 sm:flex-row py-8 shrink-0 items-center border-t bg-secondary/10" style={{ 
      paddingBottom: 'max(2rem, env(safe-area-inset-bottom))',
      paddingLeft: 'max(1rem, env(safe-area-inset-left))',
      paddingRight: 'max(1rem, env(safe-area-inset-right))'
    }}>
      <div className="flex items-center gap-2">
        <Search className="h-5 w-5 text-primary" />
        <p className="text-sm text-muted-foreground font-normal">&copy; {new Date().getFullYear()} BitSleuth. All rights reserved.</p>
      </div>
      <nav className="sm:ml-auto flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-end">
        <Link
          href="/glossary"
          className="text-sm hover:text-primary hover:underline underline-offset-4 text-muted-foreground font-medium min-h-[44px] flex items-center transition-colors"
          prefetch={false}
        >
          Glossary
        </Link>
        <a
          href="https://primal.net/p/nprofile1qqs9lrs07tqjg4vkvdh0sn4dkv8v38xddmz87tm2c2rkx7s8jsr426gdz006n"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-primary hover:underline underline-offset-4 text-muted-foreground font-medium min-h-[44px] flex items-center transition-colors"
        >
          Nostr
        </a>
        <button onClick={onTermsClick} className="text-sm hover:text-primary hover:underline underline-offset-4 text-muted-foreground font-medium min-h-[44px] flex items-center touch-manipulation transition-colors">
          Terms of Service
        </button>
        <button onClick={onPrivacyClick} className="text-sm hover:text-primary hover:underline underline-offset-4 text-muted-foreground font-medium min-h-[44px] flex items-center touch-manipulation transition-colors">
          Privacy Policy
        </button>
        <Link
          href="/company-information"
          className="text-sm hover:text-primary hover:underline underline-offset-4 text-muted-foreground font-medium min-h-[44px] flex items-center transition-colors"
          prefetch={false}
        >
          Company Information
        </Link>
      </nav>
    </footer>
  );
}
