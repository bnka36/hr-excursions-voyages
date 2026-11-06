import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Variant = "solid" | "outline" | "outline-dark" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 whitespace-nowrap";

const variants: Record<Variant, string> = {
  solid: "bg-gold text-ink hover:bg-gold-light shadow-[0_8px_30px_-10px_rgba(173,135,75,0.6)]",
  outline: "border border-ink/15 text-ink hover:border-gold hover:text-gold-dark",
  "outline-dark": "border border-paper/30 text-paper hover:border-gold hover:text-gold-light",
  ghost: "text-ink hover:text-gold-dark",
};

export function CtaLink({
  href,
  children,
  variant = "solid",
  withArrow = false,
  className = "",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  external?: boolean;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {withArrow ? <ArrowUpRight className="h-4 w-4" /> : null}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
      {withArrow ? <ArrowUpRight className="h-4 w-4" /> : null}
    </Link>
  );
}
