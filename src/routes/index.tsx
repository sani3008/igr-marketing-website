import { createFileRoute, Link } from "@tanstack/react-router";
import { CTALink, SectionHead } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { ServiceExplorer } from "@/components/site/ServiceExplorer";
import { IndustryExplorer } from "@/components/site/IndustryExplorer";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";
import { FinalCTA } from "@/components/site/FinalCTA";
import { differentiators, insights, processSteps, projects } from "@/lib/site";

const title = "IGR Marketing | Growth, Marketing & Technology Partner";
const description =
  "IGR Marketing builds growth systems for ambitious brands — strategy, performance marketing, creative, commerce and technology delivered by one accountable team in Delhi.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="grain-ink relative overflow-hidden text-ink-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.5) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage: "radial-gradient(120% 90% at 70% 0%, black, transparent 70%)",
        }}
      />
      <div className="container-igr relative pt-36 pb-20 md:pt-52 md:pb-28">
        <div className="grid items-end gap-14 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <Reveal>
              <p className="eyebrow text-brand">Innovation • Growth • Results</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display-xl mt-8">
                Growth isn't a campaign.
                <br />
                <span className="text-brand">It's a system.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-9 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
                IGR Marketing combines strategy, creative, marketing and technology into one operating system
                for growth — built for ambitious businesses that measure results in revenue, not impressions.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-11 flex flex-wrap gap-3">
                <CTALink to="/contact">Start a Project</CTALink>
                <CTALink to="/work" tone="onInk">
                  Explore Our Work
                </CTALink>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-10 text-sm text-ink-muted">
                Working with founders and leadership teams across D2C, retail, commerce and technology — from
                Delhi, for India and global markets.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:pb-3">
            <div className="rounded-sm border border-ink-border bg-ink-soft/70 p-8 backdrop-blur-sm">
              <p className="text-xs font-bold tracking-[0.22em] text-brand uppercase">The IGR model</p>
              <ul className="mt-7 space-y-5">
                {[
                  ["Diagnose", "Find the real constraint on growth."],
                  ["Design", "Build the model that removes it."],
                  ["Deploy", "Ship creative, media and technology together."],
                  ["Compound", "Optimise, then scale what proves out."],
                ].map(([t, b], i) => (
                  <li key={t} className="flex gap-4 border-b border-ink-border pb-5 last:border-0 last:pb-0">
                    <span className="font-display text-sm font-bold text-brand tabular-nums">0{i + 1}</span>
                    <div>
                      <p className="font-display text-lg tracking-tight">{t}</p>
                      <p className="mt-1 text-sm text-ink-muted">{b}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    ["Six practices", "Strategy, marketing, creative, technology, commerce and data under one team."],
    ["Ten industries", "Category benchmarks and channel economics from day one."],
    ["One roadmap", "Every capability orchestrated against a single growth plan."],
    ["Senior ownership", "The people who plan the work are accountable for shipping it."],
  ];
  return (
    <section className="border-b border-border bg-sand">
      <div className="container-igr py-16 md:py-20">
        <Reveal>
          <h2 className="display-md max-w-2xl">Built for businesses that want measurable growth.</h2>
        </Reveal>
        <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([t, b], i) => (
            <Reveal key={t} delay={i * 70}>
              <div className="border-t border-foreground/15 pt-5">
                <p className="font-display text-xl tracking-tight">{t}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />

      <section className="container-igr py-24 md:py-32">
        <SectionHead
          eyebrow="Capabilities"
          title="One partner across strategy, marketing, creative and technology."
          intro="Six practices, orchestrated around a single growth plan — so nothing gets lost between the strategy deck and the thing that actually ships."
        />
        <div className="mt-14">
          <ServiceExplorer />
        </div>
      </section>

      <section className="grain-ink text-ink-foreground">
        <div className="container-igr py-24 md:py-32">
          <SectionHead
            eyebrow="Industries"
            onInk
            title="Category fluency, not generic playbooks."
            intro="We bring benchmarks, channel economics and creative patterns specific to your category from the first week."
          />
          <div className="mt-14">
            <IndustryExplorer />
          </div>
        </div>
      </section>

      <section className="container-igr py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead eyebrow="Selected work" title="Brands built to be remembered — and to convert." />
          <Link to="/work" className="group flex items-center gap-2 pb-2 text-sm font-semibold text-brand transition-colors hover:text-brand/80">
            View All Work
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
        <div className="mt-20 md:mt-24">
          <PortfolioGrid items={projects} />
        </div>
      </section>

      <section className="border-y border-border bg-sand">
        <div className="container-igr py-24 md:py-32">
          <SectionHead
            eyebrow="Why IGR"
            title="Consulting rigour. Studio craft. Engineering depth."
            intro="Most partners give you one of the three. IGR was built so all three sit inside one accountable team."
          />
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
        <SectionHead
          eyebrow="Process"
          title="A seven-step operating system for growth."
          intro="Repeatable, transparent and built so you always know what is happening, why, and what comes next."
        />
        <ol className="mt-14 rule-list">
          {processSteps.map((s, i) => (
            <Reveal key={s.n} as="li" delay={i * 50}>
              <div className="grid gap-3 py-7 md:grid-cols-[6rem_1fr_1.4fr] md:items-baseline md:gap-10">
                <span className="font-display text-sm font-bold text-brand tabular-nums">{s.n}</span>
                <h3 className="display-md">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-t border-border">
        <div className="container-igr py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHead eyebrow="Insights" title="Perspectives on growth, brand and technology." />
            <Link to="/insights" className="link-underline pb-2 text-sm font-semibold text-brand">
              Read all insights →
            </Link>
          </div>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {insights.slice(0, 3).map((a, i) => (
              <Reveal key={a.slug} delay={i * 70} className="group flex h-full flex-col justify-between bg-background p-8 transition-colors hover:bg-ink/[0.02] md:p-10">
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
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
