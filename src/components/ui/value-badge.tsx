// src/components/ui/value-badge.tsx
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ValueBadgeProps {
  icon: LucideIcon;
  text: string;
  variant?: "orange" | "primary" | "secondary" | "accent" | "complementary";
  className?: string;
}

export function ValueBadge({ icon: Icon, text, variant = "orange", className }: ValueBadgeProps) {
  const variantStyles = {
    orange: "bg-[#F7931A]/10 border-[#F7931A]/30 text-[#F7931A] dark:bg-[#F7931A]/5 dark:border-[#F7931A]/20",
    primary: "bg-primary/10 border-primary/20 text-primary",
    secondary: "bg-secondary/50 border-secondary/70 text-secondary-foreground",
    accent: "bg-accent/30 border-accent/50 text-accent-foreground",
    complementary: "bg-complementary/10 border-complementary/30 text-complementary dark:bg-complementary/5 dark:border-complementary/20"
  };

  return (
    <div className={cn(
      "flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300",
      "hover:scale-105 hover:shadow-none",
      variantStyles[variant],
      className
    )}>
      <Icon className="h-4 w-4 font-semibold" />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
