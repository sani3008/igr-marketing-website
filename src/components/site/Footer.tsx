import { Link } from "@tanstack/react-router";
import logo from "@/assets/igr-logo.png.asset.json";
import { contact, nav, serviceGroups } from "@/lib/site";

export function Footer() {
  return (
    <footer className="grain-ink text-ink-foreground">
      <div className="container-igr py-20 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-sm">
            <img
              src={logo.url}
              alt="IGR Marketing"
              className="h-10 w-auto rounded-sm bg-ink-foreground px-3 py-2"
              width={192}
              height={98}
            />
            <p className="mt-6 text-sm leading-relaxed text-ink-muted">
              IGR Marketing is a growth partner built around commercial outcomes — strategy, marketing,
              creative and technology under one accountable team.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-ink-border px-4 py-2 text-xs font-semibold transition-colors hover:bg-ink-foreground hover:text-ink"
              >
                WhatsApp
              </a>
              <a
                href={contact.emailHref}
                className="rounded-full border border-ink-border px-4 py-2 text-xs font-semibold transition-colors hover:bg-ink-foreground hover:text-ink"
              >
                Email
              </a>
              <a
                href={contact.phoneHref}
                className="rounded-full border border-ink-border px-4 py-2 text-xs font-semibold transition-colors hover:bg-ink-foreground hover:text-ink"
              >
                Call
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <h2 className="text-xs font-bold tracking-[0.2em] text-ink-muted uppercase">Navigate</h2>
              <ul className="mt-5 space-y-2.5">
                {nav.map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="link-underline text-sm text-ink-foreground/85">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-bold tracking-[0.2em] text-ink-muted uppercase">Services</h2>
              <ul className="mt-5 space-y-2.5">
                {serviceGroups.map((g) => (
                  <li key={g.id}>
                    <Link to="/services" hash={g.id} className="link-underline text-sm text-ink-foreground/85">
                      {g.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-bold tracking-[0.2em] text-ink-muted uppercase">Contact</h2>
              <ul className="mt-5 space-y-3 text-sm text-ink-foreground/85">
                <li>
                  <a href={contact.phoneHref} className="link-underline">
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <a href={contact.emailHref} className="link-underline break-all">
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a href={contact.mapHref} target="_blank" rel="noreferrer noopener" className="link-underline">
                    {contact.office}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="mt-20 font-display text-[13vw] leading-none font-bold tracking-tighter text-ink-foreground/8 select-none lg:text-[9rem]"
        >
          Innovation · Growth · Results
        </p>

        <div className="mt-10 flex flex-col gap-4 border-t border-ink-border pt-8 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} IGR Marketing. All rights reserved.</p>
          <p className="font-semibold tracking-[0.2em] text-brand uppercase">Innovation • Growth • Results</p>
        </div>
      </div>
    </footer>
  );
}
