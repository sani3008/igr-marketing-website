import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getServiceBySlug, servicesData } from "@/lib/servicesData";
import { CTALink } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/services_/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) {
      throw notFound();
    }
    const currentIndex = servicesData.findIndex((s) => s.slug === params.slug);
    const prev = currentIndex > 0 ? servicesData[currentIndex - 1] : null;
    const next = currentIndex < servicesData.length - 1 ? servicesData[currentIndex + 1] : null;

    return { service, prev, next };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { service } = loaderData;
    return {
      meta: [
        { title: service.seoTitle },
        { name: "description", content: service.seoDescription },
        { property: "og:title", content: service.seoTitle },
        { property: "og:description", content: service.seoDescription },
        { property: "og:type", content: "website" },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service, prev, next } = Route.useLoaderData();

  return (
    <>
      <article className="pt-24 md:pt-32">
        <div className="container-igr">
          {/* A. Breadcrumb / context */}
          <Reveal className="mb-12">
            <nav className="flex text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <Link to="/" className="hover:text-brand transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-brand transition-colors">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{service.title}</span>
            </nav>
          </Reveal>

          {/* Hero Section */}
          <Reveal delay={100} className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="text-sm font-bold text-brand tabular-nums">{service.categoryNumber}</span>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/70">{service.category}</span>
              </div>
              <h1 className="font-display text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {service.shortDescription}
              </p>
              <div className="mt-10">
                <CTALink to={`/contact?service=${service.slug}`} className="px-6 py-3">
                  Start a Project
                </CTALink>
              </div>
            </div>
            
            <div className="flex flex-col justify-end">
              <div className="border-t border-border pt-8">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">Overview</h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {service.overview}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Deliverables & Process */}
        <div className="mt-20 border-t border-border bg-ink/[0.02] py-20 md:mt-32 md:py-32">
          <div className="container-igr">
            <div className="grid gap-20 lg:grid-cols-2 lg:gap-32">
              
              {/* Deliverables */}
              <Reveal delay={200}>
                <h2 className="mb-10 font-display text-2xl tracking-tight md:text-3xl">What we deliver</h2>
                <ul className="grid gap-y-4">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 border-b border-border/70 pb-4">
                      <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span className="text-base font-medium text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Process */}
              <Reveal delay={300}>
                <h2 className="mb-10 font-display text-2xl tracking-tight md:text-3xl">Our Approach</h2>
                <div className="grid gap-6">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex gap-6">
                      <span className="font-display text-sm font-bold text-brand tabular-nums mt-0.5">
                        0{i + 1}
                      </span>
                      <p className="text-base font-medium text-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Why IGR */}
        <section className="border-t border-border py-20 md:py-32">
          <div className="container-igr text-center">
            <Reveal>
              <h2 className="mb-6 font-display text-3xl tracking-tight md:text-4xl">Why IGR for {service.title}?</h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Consulting rigour. Studio craft. Engineering depth. We don't just execute isolated tasks; we build commercial systems designed to perform under pressure. Every solution is grounded in empirical research and held accountable to your contribution margin.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Navigation Footer */}
        <div className="border-t border-border bg-background">
          <div className="container-igr grid grid-cols-2 divide-x divide-border">
            {prev ? (
              <Link to={`/services/${prev.slug}`} className="group flex flex-col items-start p-8 transition-colors hover:bg-ink/[0.02] md:p-12">
                <span className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-brand">Previous Service</span>
                <span className="font-display text-xl tracking-tight md:text-2xl">{prev.title}</span>
              </Link>
            ) : (
              <div className="p-8 md:p-12" />
            )}
            
            {next ? (
              <Link to={`/services/${next.slug}`} className="group flex flex-col items-end text-right p-8 transition-colors hover:bg-ink/[0.02] md:p-12">
                <span className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-brand">Next Service</span>
                <span className="font-display text-xl tracking-tight md:text-2xl">{next.title}</span>
              </Link>
            ) : (
              <div className="p-8 md:p-12" />
            )}
          </div>
        </div>
      </article>

      <FinalCTA />
    </>
  );
}
