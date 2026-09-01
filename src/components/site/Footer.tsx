import { Link } from "@tanstack/react-router";

import { contact, nav, serviceGroups } from "@/lib/site";

export function Footer() {
  return (
    <footer className="grain-ink text-ink-foreground overflow-hidden">
      <div className="container-igr py-16 md:py-24">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_2fr] lg:gap-24 items-start">
          <div className="max-w-[320px]">
            <img
              src="/favicon.png"
              alt="IGR Marketing"
              className="w-48 h-auto md:w-56"
            />
            <p className="mt-8 text-sm leading-7 text-ink-muted">
              IGR Marketing is a growth partner built around commercial outcomes — strategy, marketing,
              creative and technology under one accountable team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-ink-border/50 px-5 py-2.5 text-xs font-semibold tracking-wide transition-colors hover:border-brand hover:text-brand"
              >
                WhatsApp
              </a>
              <a
                href={contact.emailHref}
                className="rounded-full border border-ink-border/50 px-5 py-2.5 text-xs font-semibold tracking-wide transition-colors hover:border-brand hover:text-brand"
              >
                Email
              </a>
              <a
                href={contact.phoneHref}
                className="rounded-full border border-ink-border/50 px-5 py-2.5 text-xs font-semibold tracking-wide transition-colors hover:border-brand hover:text-brand"
              >
                Call
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              <a
                href="https://www.instagram.com/igrmarketing/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram — IGR Marketing"
                className="flex items-center gap-2.5 text-[15px] font-medium text-ink-muted transition-colors hover:text-brand group"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-y-0.5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/igr-consultants/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn — IGR Consultants"
                className="flex items-center gap-2.5 text-[15px] font-medium text-ink-muted transition-colors hover:text-brand group"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-y-0.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-3 items-start">
            <div>
              <h2 className="text-[11px] font-bold tracking-[0.2em] text-ink-muted uppercase">Navigate</h2>
              <ul className="mt-6 space-y-3">
                {nav.map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="text-[15px] text-ink-foreground/80 transition-colors hover:text-brand">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[11px] font-bold tracking-[0.2em] text-ink-muted uppercase">Services</h2>
              <ul className="mt-6 space-y-3">
                {serviceGroups.map((g) => (
                  <li key={g.id}>
                    <Link to="/services" hash={g.id} className="text-[15px] text-ink-foreground/80 transition-colors hover:text-brand">
                      {g.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[11px] font-bold tracking-[0.2em] text-ink-muted uppercase">Contact</h2>
              <ul className="mt-6 space-y-4 text-[15px] text-ink-foreground/80">
                <li>
                  <a href={contact.phoneHref} className="transition-colors hover:text-brand">
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <a href={contact.emailHref} className="transition-colors hover:text-brand break-all">
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a href={contact.mapHref} target="_blank" rel="noreferrer noopener" className="transition-colors hover:text-brand leading-relaxed inline-block">
                    {contact.office}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="mt-24 md:mt-32 font-display text-[12vw] sm:text-[10vw] leading-[1.1] font-bold tracking-tighter text-ink-foreground/5 select-none lg:text-[140px] break-words"
        >
          Innovation · Growth · Results
        </p>

        <div className="mt-8 border-t border-ink-border/40 pt-8 text-xs text-ink-muted/80">
          <p>© {new Date().getFullYear()} IGR Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
