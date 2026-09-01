import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHead } from "@/components/site/ui";
import { FinalCTA } from "@/components/site/FinalCTA";
import { differentiators } from "@/lib/site";

const title = "About IGR Marketing | A growth partner built around outcomes";
const description =
  "IGR Marketing brings strategy, marketing, creative and technology under one accountable team — built for commercial outcomes, senior execution and long-term partnerships.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A growth partner built around commercial outcomes."
        intro="IGR Marketing exists because growth stalls in the gaps — between strategy and execution, marketing and technology, creative and performance. We removed the gaps."
      />

      <section className="container-igr py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow text-brand">What we are</p>
            <h2 className="display-lg mt-6">One team. Four disciplines. One number that matters.</h2>
          </Reveal>
          <Reveal delay={100} className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              We partner with founders and leadership teams to design growth systems that compound — combining
              market strategy, performance marketing, brand, commerce and product engineering inside a single
              accountable team.
            </p>
            <p>
              That structure isn't a convenience. It's the reason work ships faster, campaigns run on
              platforms built for them, and nobody spends a quarter arguing about whose number the drop was.
            </p>
            <p>
              We measure ourselves the way our clients do: pipeline, revenue, margin and the durability of the
              brand behind them.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-sand">
        <div className="container-igr py-24 md:py-32">
          <SectionHead eyebrow="How we operate" title="Six commitments we hold ourselves to." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 60} className="bg-background p-8 md:p-10">
                <p className="font-display text-xl tracking-tight">{d.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-igr py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="eyebrow text-brand">Mission</p>
            <p className="mt-6 font-display text-2xl leading-snug tracking-tight md:text-3xl">
              To help ambitious businesses convert strategy into measurable, durable growth through disciplined
              execution.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow text-brand">Vision</p>
            <p className="mt-6 font-display text-2xl leading-snug tracking-tight md:text-3xl">
              To be the growth partner category-defining brands trust across India and global markets.
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
