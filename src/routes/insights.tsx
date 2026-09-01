import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { insights } from "@/lib/site";

const title = "Insights | Growth, brand and technology thinking — IGR Marketing";
const description =
  "Editorial perspectives from IGR Marketing on growth systems, performance marketing, brand, e-commerce, AI automation and SEO.";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/insights" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: Insights,
});

function Insights() {
  const [lead, ...rest] = insights;
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Opinions we're willing to defend."
        intro="Short, specific writing on how growth actually works — no listicles, no recycled frameworks."
      />

      <section className="container-igr py-20 md:py-28">
        <Reveal className="grid gap-8 border-b border-border pb-14 md:grid-cols-[1fr_1.3fr] md:gap-16">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-brand uppercase">{lead.category}</p>
            <p className="mt-4 text-xs text-muted-foreground">{lead.readTime}</p>
          </div>
          <div>
            <h2 className="display-lg">{lead.title}</h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {lead.excerpt}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-6">
          {rest.map((a, i) => {
            // Editorial 5-item grid: Row 1 has 3 items (col-span-2), Row 2 has 2 items (col-span-3)
            const getGridClasses = (index: number) => {
              if (index < 3) return "sm:col-span-1 lg:col-span-2";
              if (index === 3) return "sm:col-span-1 lg:col-span-3";
              return "sm:col-span-2 lg:col-span-3"; // The 5th item spans 2 cols on tablet so no gap is left
            };

            return (
              <Reveal key={a.slug} delay={i * 60} className={`group flex h-full flex-col justify-between bg-background p-8 transition-colors hover:bg-ink/[0.02] md:p-10 ${getGridClasses(i)}`}>
                <a href="#" className="flex h-full flex-col">
                  <div>
                    <p className="text-xs font-bold tracking-[0.18em] text-brand uppercase">{a.category}</p>
                    <h3 className="mt-5 font-display text-2xl leading-tight tracking-tight transition-colors group-hover:text-brand">{a.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                  </div>
                  <div className="mt-8 flex flex-1 items-end justify-between border-t border-border/50 pt-6">
                    <p className="text-xs text-muted-foreground">{a.readTime}</p>
                    <span className="text-brand opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">→</span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
