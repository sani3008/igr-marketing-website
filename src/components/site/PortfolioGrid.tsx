
import { projects, type Project } from "@/lib/site";
import { Reveal } from "./Reveal";

function Card({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-md border border-border/40 bg-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)] transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.06)] hover:border-border/80"
      aria-label={`${project.name} — ${project.category}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border/20 bg-ink-soft/10">
        <img
          src={project.image}
          alt={`${project.name} website preview`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
        <div className="pointer-events-none absolute inset-0 bg-ink/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      
      <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
        <div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl tracking-tight text-foreground transition-colors group-hover:text-foreground/90">
              {project.name}
            </h3>
            <span className="mt-1 flex-shrink-0 text-muted-foreground/60 transition-colors duration-400 group-hover:text-brand">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </span>
          </div>
          <p className="mt-4 text-sm font-medium leading-relaxed text-muted-foreground/70">
            {project.capabilities.join(" • ")}
          </p>
        </div>
      </div>
    </a>
  );
}

export function PortfolioGrid({ items = projects }: { items?: Project[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {items.map((p, idx) => (
        <Reveal key={p.slug} delay={idx * 50}>
          <Card project={p} />
        </Reveal>
      ))}
    </div>
  );
}
