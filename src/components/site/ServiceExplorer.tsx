import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { serviceGroups } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function ServiceExplorer({ expandAll = false }: { expandAll?: boolean }) {
  const [open, setOpen] = useState<string | null>(serviceGroups[0].id);

  return (
    <div className="rule-list">
      {serviceGroups.map((g) => {
        const isOpen = expandAll || open === g.id;
        return (
          <Reveal key={g.id} as="section" id={g.id} className="scroll-mt-28">
            <div className="group">
              <button
                type="button"
                onClick={() => setOpen(isOpen && !expandAll ? null : g.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-5 py-7 text-left md:gap-10"
              >
                <span className="font-display text-sm font-bold text-brand tabular-nums">{g.index}</span>
                <h3
                  className={cn(
                    "display-md flex-1 transition-colors",
                    isOpen ? "text-foreground" : "text-foreground/60 group-hover:text-foreground",
                  )}
                >
                  {g.title}
                </h3>
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-sm transition-transform duration-300",
                    isOpen && "rotate-45 border-brand text-brand",
                  )}
                >
                  +
                </span>
              </button>
              <div
                className={cn(
                  "grid transition-all duration-500 ease-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-8 pb-10 md:grid-cols-[1fr_1.2fr] md:gap-16 md:pl-[4.5rem]">
                    <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                      {g.summary}
                    </p>
                    <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                      {g.items.map((item) => (
                        <li key={item} className="border-b border-border/70 py-2 text-sm font-medium">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
      <div className="pt-8">
        <Link to="/services" className="link-underline text-sm font-semibold text-brand">
          Explore all capabilities →
        </Link>
      </div>
    </div>
  );
}
