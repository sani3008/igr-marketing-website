import { useState } from "react";
import { industries } from "@/lib/site";
import { cn } from "@/lib/utils";

export function IndustryExplorer() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
      <ul className="rule-list border-ink-border" onMouseLeave={() => setActive(active)}>
        {industries.map((ind, i) => (
          <li key={ind.name} className="border-ink-border">
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className="flex w-full items-center justify-between gap-6 py-4 text-left md:py-5"
            >
              <span
                className={cn(
                  "font-display text-2xl tracking-tight transition-all duration-300 md:text-3xl",
                  active === i ? "text-ink-foreground md:translate-x-2" : "text-ink-foreground/45",
                )}
              >
                {ind.name}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  "text-brand transition-all duration-300",
                  active === i ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0",
                )}
              >
                →
              </span>
            </button>
            <p
              className={cn(
                "overflow-hidden text-sm text-ink-muted transition-all duration-300 lg:hidden",
                active === i ? "max-h-32 pb-4 opacity-100" : "max-h-0 opacity-0",
              )}
            >
              {ind.note}
            </p>
          </li>
        ))}
      </ul>

      <div className="hidden lg:block">
        <div className="sticky top-32 rounded-sm border border-ink-border bg-ink-soft p-10">
          <p className="text-xs font-bold tracking-[0.22em] text-brand uppercase">
            {industries[active].focus}
          </p>
          <p className="mt-6 font-display text-3xl tracking-tight text-ink-foreground">
            {industries[active].name}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-ink-muted">{industries[active].note}</p>
        </div>
      </div>
    </div>
  );
}
