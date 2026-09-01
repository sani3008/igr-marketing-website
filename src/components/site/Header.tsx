import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/igr-logo.png.asset.json";
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || mobileOpen || megaOpen
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="container-igr flex h-18 items-center justify-between gap-4 py-3.5">
        <Link to="/" className="flex shrink-0 items-center" aria-label="IGR Marketing — home">
          <img src={logo.url} alt="IGR Marketing" className="h-8 w-auto md:h-9" width={192} height={98} />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div key={item.to} onMouseEnter={openMega} onMouseLeave={closeMega} className="relative">
                <Link
                  to={item.to}
                  aria-expanded={megaOpen}
                  onFocus={openMega}
                  className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground data-[status=active]:text-foreground"
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
                className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground data-[status=active]:text-foreground"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <CTALink to="/contact" className="px-5 py-2.5">
            Start a Project
          </CTALink>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border lg:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 h-px w-5 bg-foreground transition-all duration-300",
                mobileOpen ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-px w-5 bg-foreground transition-all duration-300",
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
          "absolute inset-x-0 top-full hidden origin-top border-b border-border bg-background/95 backdrop-blur-xl transition-all duration-300 lg:block",
          megaOpen ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <div className="container-igr grid grid-cols-[1fr_3fr] gap-12 py-12">
          <div>
            <p className="eyebrow text-brand">Capabilities</p>
            <p className="mt-5 font-display text-2xl leading-tight tracking-tight">
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
                  className="flex items-baseline gap-2 text-sm font-bold tracking-tight uppercase"
                >
                  <span className="text-brand">{g.index}</span>
                  {g.title}
                </Link>
                <ul className="mt-3 space-y-1.5">
                  {g.items.map((i) => (
                    <li key={i}>
                      <Link
                        to="/services"
                        hash={g.id}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {i}
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
          "fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto overscroll-contain bg-background transition-all duration-300 lg:hidden",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="container-igr py-6">
          <ul className="rule-list">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="flex items-center justify-between py-4 font-display text-2xl tracking-tight"
                >
                  {item.label}
                  <span aria-hidden="true" className="text-brand">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <CTALink to="/contact" className="w-full">
              Start a Project
            </CTALink>
            <CTALink to="/work" tone="outline" className="w-full">
              Explore Our Work
            </CTALink>
          </div>
        </nav>
      </div>
    </header>
  );
}
