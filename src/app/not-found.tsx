
// src/app/not-found.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

const RobotIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-12 w-12 text-primary"
  >
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v2" />
    <path d="M9 13v2" />
  </svg>
);


export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-background px-4 py-12 text-center edge-to-edge-container">
      <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm border-border/50 shadow-glow">
        <CardContent className="p-10">
          <div className="mx-auto mb-6 flex justify-center">
            <RobotIcon />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-foreground">404 - Page Not Found</h1>
          <p className="mb-8 max-w-sm mx-auto text-muted-foreground font-normal">
            Oh sleuth!!! It seems BitSleuth bot got lost in the digital ether. The page you&apos;re looking for might have been moved or never existed.
          </p>
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
