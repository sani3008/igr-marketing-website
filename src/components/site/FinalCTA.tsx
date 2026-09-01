import { contact } from "@/lib/site";
import { CTALink } from "./ui";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="grain-ink text-ink-foreground">
      <div className="container-igr py-24 md:py-32">
        <Reveal className="max-w-4xl">
          <p className="eyebrow text-brand">Next step</p>
          <h2 className="display-xl mt-7">
            Have a growth problem
            <br />
            worth solving?
          </h2>
          <p className="mt-7 max-w-xl text-lg text-ink-muted">
            Tell us where you want to go. We'll help you map the path — and come back with a point of view,
            not a template deck.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <CTALink to="/contact">Start a Project</CTALink>
            <CTALink href={contact.whatsapp} tone="onInk" target="_blank" rel="noreferrer noopener">
              WhatsApp Us
            </CTALink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
