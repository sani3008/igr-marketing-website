import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ServiceExplorer } from "@/components/site/ServiceExplorer";
import { FinalCTA } from "@/components/site/FinalCTA";
import { serviceGroups } from "@/lib/site";

const title = "Services | Strategy, Marketing, Creative, Technology & Commerce — IGR";
const description =
  "Explore IGR Marketing's six practices: strategy, performance marketing, creative, technology, commerce and data — over 25 capabilities delivered by senior teams.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "IGR Marketing services",
          itemListElement: serviceGroups.flatMap((g, gi) =>
            g.items.map((item, i) => ({
              "@type": "ListItem",
              position: gi * 10 + i + 1,
              item: { "@type": "Service", name: item, provider: { "@type": "Organization", name: "IGR Marketing" } },
            })),
          ),
        }),
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Everything a growth plan needs. Nothing it doesn't."
        intro="Six practices, orchestrated around one roadmap. Pick the pieces you need — or hand us the whole system."
      />
      <section className="container-igr py-20 md:py-28">
        <ServiceExplorer expandAll />
      </section>
      <FinalCTA />
    </>
  );
}
