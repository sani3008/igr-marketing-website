import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";
import { FinalCTA } from "@/components/site/FinalCTA";
import { projects } from "@/lib/site";

const title = "Work | Selected Work & Case Studies — IGR Marketing";
const description = "Explore selected work by IGR Marketing. See how we build growth systems for D2C, retail, commerce, and technology brands.";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/work" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: Work,
});

function Work() {
  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="Brands built to be remembered — and to convert."
        intro="Explore our selected work across strategy, performance, creative, and technology. We don't just build websites; we build commercial systems designed to scale."
      />
      <section className="container-igr py-20 md:py-28">
        <PortfolioGrid items={projects} />
      </section>
      <FinalCTA />
    </>
  );
}
