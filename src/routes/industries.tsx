import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { IndustryExplorer } from "@/components/site/IndustryExplorer";
import { FinalCTA } from "@/components/site/FinalCTA";

const title = "Industries | Category-fluent growth partner — IGR Marketing";
const description =
  "FMCG, D2C, retail, healthcare, education, technology, manufacturing, real estate, hospitality and luxury — category benchmarks and channel economics from day one.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="We start with your category, not a template."
        intro="Every sector has its own economics, buying cycle and creative language. We bring the benchmarks with us."
      />
      <section className="grain-ink text-ink-foreground">
        <div className="container-igr py-20 md:py-28">
          <IndustryExplorer />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
