import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { processSteps } from "@/lib/site";

const title = "Process | How IGR Marketing turns strategy into growth";
const description =
  "Discover, diagnose, strategize, build, launch, optimize, scale — the seven-step operating system IGR Marketing uses to turn strategy into commercial results.";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/process" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: Process,
});

function Process() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="Seven steps. No mystery."
        intro="You always know what's happening, why it's happening and what it's supposed to move."
      />
      <section className="container-igr py-20 md:py-28">
        <ol className="rule-list">
          {processSteps.map((s, i) => (
            <Reveal key={s.n} as="li" delay={i * 50}>
              <div className="grid gap-3 py-9 md:grid-cols-[6rem_1fr_1.4fr] md:items-baseline md:gap-10">
                <span className="font-display text-sm font-bold text-brand tabular-nums">{s.n}</span>
                <h2 className="display-md">{s.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>
      <FinalCTA />
    </>
  );
}
