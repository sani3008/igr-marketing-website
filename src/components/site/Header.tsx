import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

import { nav, serviceGroups } from "@/lib/site";
import { CTALink } from "./ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        scrolled || mobileOpen || megaOpen
          ? "border-ink-border bg-ink"
          : "border-transparent bg-ink",
      )}
    >
      <div className="container-igr grid h-[64px] md:h-[72px] lg:h-[80px] items-center justify-between grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-4">
        <div className="flex justify-start">
          <Link to="/" className="flex shrink-0 items-center" aria-label="IGR Marketing — home">
            <img src="/favicon.png" alt="IGR Marketing" className="w-[70px] md:w-[76px] lg:w-[84px] h-auto" />
          </Link>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex lg:justify-center">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div key={item.to} onMouseEnter={openMega} onMouseLeave={closeMega} className="relative">
                <Link
                  to={item.to}
                  aria-expanded={megaOpen}
                  onFocus={openMega}
                  className="inline-flex items-center gap-1.5 rounded-full px-2 py-2 text-sm font-medium text-white/80 transition-colors hover:text-brand data-[status=active]:text-white"
                >
                  {item.label}
                  <span aria-hidden="true" className={cn("text-[10px] transition-transform", megaOpen && "rotate-180")}>
                    ▾
                  </span>
                </Link>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-2 py-2 text-sm font-medium text-white/80 transition-colors hover:text-brand data-[status=active]:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:flex lg:justify-end">
          <CTALink to="/contact" className="px-5 py-2.5">
            Start a Project
          </CTALink>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border lg:hidden justify-self-end"
        >
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 h-px w-5 bg-white transition-all duration-300",
                mobileOpen ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-px w-5 bg-white transition-all duration-300",
                mobileOpen ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>

      {/* Mega menu */}
      <div
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
        className={cn(
          "absolute inset-x-0 top-full hidden origin-top border-b border-ink-border bg-ink transition-all duration-300 lg:block",
          megaOpen ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <div className="container-igr grid grid-cols-[1fr_3fr] gap-12 py-12">
          <div>
            <p className="eyebrow text-brand">Capabilities</p>
            <p className="mt-5 font-display text-2xl leading-tight tracking-tight text-ink-foreground">
              Six practices. One accountable team.
            </p>
            <Link to="/services" className="link-underline mt-5 inline-block text-sm font-semibold text-brand">
              Explore all capabilities →
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-x-10 gap-y-9">
            {serviceGroups.map((g) => (
              <div key={g.id}>
                <Link
                  to="/services"
                  hash={g.id}
                  className="flex items-baseline gap-2 text-sm font-bold tracking-tight uppercase text-ink-foreground"
                >
                  <span className="text-brand">{g.index}</span>
                  {g.title}
                </Link>
                <ul className="mt-3 space-y-1.5">
                  {g.items.map((i) => (
                    <li key={i.slug}>
                      <Link
                        to={`/services/${i.slug}`}
                        className="text-sm text-ink-muted transition-colors hover:text-ink-foreground"
                      >
                        {i.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-x-0 top-[64px] bottom-0 z-40 overflow-y-auto overscroll-contain bg-ink transition-all duration-300 lg:hidden md:top-[72px]",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="container-igr flex min-h-[calc(100vh-64px)] flex-col justify-between py-8 md:min-h-[calc(100vh-72px)] md:py-10">
          <ul className="rule-list border-t border-ink-border">
            {nav.map((item) => (
              <li key={item.to} className="border-b border-ink-border">
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="flex items-center justify-between py-5 font-display text-[26px] tracking-tight text-[#F5F5F0] transition-colors hover:text-brand md:text-3xl"
                >
                  {item.label}
                  <span aria-hidden="true" className="text-brand">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 pb-12">
            <CTALink to="/contact" className="w-full justify-center py-4 text-base">
              Start a Project
            </CTALink>
          </div>
        </nav>
      </div>
    </header>
  );
}
