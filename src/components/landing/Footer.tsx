import Link from 'next/link';
import { Search } from 'lucide-react';

interface FooterProps {
  onTermsClick: () => void;
  onPrivacyClick: () => void;
}

export function Footer({ onTermsClick, onPrivacyClick }: FooterProps) {
  return (
    <footer className="edge-to-edge-section flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6 border-t" style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}>
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
        <Link
          href="/company-information"
          className="text-sm hover:underline underline-offset-4 text-muted-foreground font-medium"
          prefetch={false}
        >
          Company Information
        </Link>
      </nav>
    </footer>
  );
}
