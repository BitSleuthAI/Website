import Link from 'next/link';
import Image from 'next/image';
import { ValueBadge } from '@/components/ui/value-badge';
import { Bitcoin, Heart } from 'lucide-react';

interface FooterProps {
  onTermsClick: () => void;
  onPrivacyClick: () => void;
}

export function Footer({ onTermsClick, onPrivacyClick }: FooterProps) {
  return (
    <footer className="edge-to-edge-section flex flex-col gap-3 py-4 shrink-0 border-t border-border/40 bg-muted/40 text-foreground relative z-10 mt-auto w-full" style={{
      paddingBottom: 'max(1rem, env(safe-area-inset-bottom))',
      paddingLeft: 'max(1rem, env(safe-area-inset-left))',
      paddingRight: 'max(1rem, env(safe-area-inset-right))'
    }}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          <Link href="/" className="group flex items-center gap-2 transition-all duration-200">
            <Image src="/images/logo-icon.jpg" alt="BitSleuth Logo" width={32} height={32} className="rounded-lg grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:shadow-md group-hover:shadow-primary/20 transition-all duration-300" />
            <span className="font-bold text-base sm:text-lg text-muted-foreground group-hover:text-primary transition-colors duration-200">BitSleuth</span>
          </Link>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <ValueBadge icon={Bitcoin} text="Built for Bitcoin" variant="primary" />
            <ValueBadge icon={Heart} text="Made with ♥ by Bitcoiners" variant="primary" />
          </div>
        </div>

        <div className="border-t border-border/40 pt-4 pb-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-xs sm:text-sm text-muted-foreground font-normal text-center sm:text-left">&copy; {new Date().getFullYear()} BitSleuth. All rights reserved.</p>

          <nav className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-end text-center relative z-50">
            <Link
              href="/glossary"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary font-medium transition-colors duration-200 hover:underline underline-offset-4"
              prefetch={false}
            >
              Glossary
            </Link>
            <a
              href="https://primal.net/p/nprofile1qqs9lrs07tqjg4vkvdh0sn4dkv8v38xddmz87tm2c2rkx7s8jsr426gdz006n"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary font-medium transition-colors duration-200 hover:underline underline-offset-4"
            >
              Nostr
            </a>
            <button 
              onClick={onTermsClick} 
              type="button"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary font-medium transition-colors duration-200 hover:underline underline-offset-4 cursor-pointer active:scale-[0.98]"
            >
              Terms of Service
            </button>
            <button 
              onClick={onPrivacyClick} 
              type="button"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary font-medium transition-colors duration-200 hover:underline underline-offset-4 cursor-pointer active:scale-[0.98]"
            >
              Privacy Policy
            </button>
            <Link
              href="/company-information"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary font-medium transition-colors duration-200 hover:underline underline-offset-4"
              prefetch={false}
            >
              Company Information
            </Link>
            <a
              href="https://www.pingara.io/status/bitsleuth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Status (opens in new tab)"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary font-medium transition-colors duration-200 hover:underline underline-offset-4"
            >
              Status
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
