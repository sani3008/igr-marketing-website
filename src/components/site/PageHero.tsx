import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="grain-ink text-ink-foreground">
      <div className="container-igr pt-36 pb-20 md:pt-48 md:pb-28">
        <Reveal className="max-w-4xl">
          <p className="eyebrow text-brand">{eyebrow}</p>
          <h1 className="display-xl mt-7">{title}</h1>
          {intro ? <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted">{intro}</p> : null}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
