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
    <footer className="edge-to-edge-section flex flex-col gap-6 py-12 shrink-0 border-t bg-muted text-foreground" style={{
      paddingBottom: 'max(2rem, env(safe-area-inset-bottom))',
      paddingLeft: 'max(1rem, env(safe-area-inset-left))',
      paddingRight: 'max(1rem, env(safe-area-inset-right))'
    }}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <Image src="/images/logo-icon.jpg" alt="BitSleuth Logo" width={32} height={32} className="rounded-lg grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
            <span className="font-bold text-lg text-muted-foreground">BitSleuth</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <ValueBadge icon={Bitcoin} text="Built for Bitcoin" variant="primary" />
            <ValueBadge icon={Heart} text="Made with ♥ by Bitcoiners" variant="primary" />
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-sm text-gray-400 font-normal">&copy; {new Date().getFullYear()} BitSleuth. All rights reserved.</p>

          <nav className="flex flex-wrap gap-6 justify-center sm:justify-end">
            <Link
              href="/glossary"
              className="text-sm hover:text-primary hover:underline underline-offset-4 text-gray-400 hover:text-foreground font-medium transition-colors"
              prefetch={false}
            >
              Glossary
            </Link>
            <a
              href="https://primal.net/p/nprofile1qqs9lrs07tqjg4vkvdh0sn4dkv8v38xddmz87tm2c2rkx7s8jsr426gdz006n"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-primary hover:underline underline-offset-4 text-gray-400 hover:text-foreground font-medium transition-colors"
            >
              Nostr
            </a>
            <button 
              onClick={onTermsClick} 
              type="button"
              className="text-sm hover:text-primary hover:underline underline-offset-4 text-gray-400 hover:text-foreground font-medium transition-colors cursor-pointer touch-manipulation"
            >
              Terms of Service
            </button>
            <button 
              onClick={onPrivacyClick} 
              type="button"
              className="text-sm hover:text-primary hover:underline underline-offset-4 text-gray-400 hover:text-foreground font-medium transition-colors cursor-pointer touch-manipulation"
            >
              Privacy Policy
            </button>
            <Link
              href="/company-information"
              className="text-sm hover:text-primary hover:underline underline-offset-4 text-gray-400 hover:text-foreground font-medium transition-colors"
              prefetch={false}
            >
              Company Information
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
