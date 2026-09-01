import { Link } from "@tanstack/react-router";
import { projects, type Project } from "@/lib/site";
import { Reveal } from "./Reveal";

function Card({ project, size }: { project: Project; size: "large" | "small" }) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="group block"
      aria-label={`${project.name} — ${project.category}`}
    >
      <div className="relative overflow-hidden rounded-sm bg-ink-soft">
        <img
          src={project.image}
          alt={`${project.name} website preview`}
          loading="lazy"
          decoding="async"
          className={
            size === "large"
              ? "aspect-[16/9] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              : "aspect-[4/3] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          }
        />
        <div className="pointer-events-none absolute inset-0 bg-ink/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="pointer-events-none absolute right-5 bottom-5 grid h-12 w-12 translate-y-3 place-items-center rounded-full bg-brand text-brand-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          →
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <h3
          className={
            size === "large"
              ? "display-md transition-colors group-hover:text-brand"
              : "font-display text-xl tracking-tight transition-colors group-hover:text-brand"
          }
        >
          {project.name}
        </h3>
        <p className="mt-1 text-right text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
          {project.category}
        </p>
      </div>
    </Link>
  );
}

export function PortfolioGrid({ items = projects }: { items?: Project[] }) {
  const rows: Project[][] = [];
  let i = 0;
  let large = true;
  while (i < items.length) {
    if (large) {
      rows.push(items.slice(i, i + 1));
      i += 1;
    } else {
      rows.push(items.slice(i, i + 2));
      i += 2;
    }
    large = !large;
  }

  return (
    <div className="space-y-16 md:space-y-24">
      {rows.map((row, idx) => (
        <div key={idx} className={row.length === 1 ? "" : "grid gap-10 md:grid-cols-2 md:gap-12"}>
          {row.map((p, j) => (
            <Reveal key={p.slug} delay={j * 90}>
              <Card project={p} size={row.length === 1 ? "large" : "small"} />
            </Reveal>
          ))}
        </div>
      ))}
    </div>
  );
}
