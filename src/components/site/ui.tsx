import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "solid" | "outline" | "ghost" | "onInk";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 min-h-11";

const tones: Record<Tone, string> = {
  solid: "bg-brand text-brand-foreground hover:bg-ink hover:text-ink-foreground",
  outline: "border border-foreground/20 text-foreground hover:border-brand hover:text-brand",
  ghost: "text-foreground hover:text-brand",
  onInk: "border border-ink-border text-ink-foreground hover:bg-ink-foreground hover:text-ink",
};

export function Arrow({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("transition-transform duration-300 group-hover:translate-x-1", className)}
    >
      →
    </span>
  );
}

export function CTALink({
  to,
  href,
  tone = "solid",
  children,
  className,
  arrow = true,
  ...rest
}: {
  to?: string;
  href?: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
  arrow?: boolean;
} & Record<string, unknown>) {
  const cls = cn(base, tones[tone], className);
  const inner = (
    <>
      {children}
      {arrow ? <Arrow /> : null}
    </>
  );
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={cls} {...rest}>
      {inner}
    </Link>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  onInk = false,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  onInk?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className={cn("eyebrow", onInk ? "text-brand" : "text-brand")}>{eyebrow}</p>
      <h2 className={cn("display-lg mt-6", onInk ? "text-ink-foreground" : "text-foreground")}>{title}</h2>
      {intro ? (
        <p className={cn("mt-6 text-base leading-relaxed md:text-lg", onInk ? "text-ink-muted" : "text-muted-foreground")}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
