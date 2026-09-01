import { useState, type FormEvent } from "react";
import { serviceGroups } from "@/lib/site";

const budgets = [
  "Under ₹1L / month",
  "₹1L – ₹3L / month",
  "₹3L – ₹8L / month",
  "₹8L+ / month",
  "One-off project",
  "Not sure yet",
];

const field =
  "w-full rounded-sm border border-border bg-card px-4 py-3.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-brand focus:outline-none";
const label = "block text-xs font-bold tracking-[0.16em] text-muted-foreground uppercase";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Company: ${data.get("company")}`,
      `Service: ${data.get("service")}`,
      `Budget: ${data.get("budget")}`,
      "",
      String(data.get("details") ?? ""),
    ].join("\n");
    setStatus("sending");
    window.location.href = `mailto:hello@igrmarketing.com?subject=${encodeURIComponent(
      `New enquiry — ${data.get("company") || data.get("name")}`,
    )}&body=${encodeURIComponent(lines)}`;
    setTimeout(() => setStatus("sent"), 600);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className={label} htmlFor="name">
          Full name
        </label>
        <input id="name" name="name" required autoComplete="name" className={`${field} mt-2`} placeholder="Your name" />
      </div>
      <div>
        <label className={label} htmlFor="email">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={`${field} mt-2`}
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label className={label} htmlFor="phone">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={`${field} mt-2`} placeholder="+91" />
      </div>
      <div>
        <label className={label} htmlFor="company">
          Company
        </label>
        <input id="company" name="company" autoComplete="organization" className={`${field} mt-2`} placeholder="Company name" />
      </div>
      <div>
        <label className={label} htmlFor="service">
          Service
        </label>
        <select id="service" name="service" className={`${field} mt-2`} defaultValue="">
          <option value="" disabled>
            Select a practice
          </option>
          {serviceGroups.map((g) => (
            <option key={g.id} value={g.title}>
              {g.title}
            </option>
          ))}
          <option value="Multiple / not sure">Multiple / not sure</option>
        </select>
      </div>
      <div>
        <label className={label} htmlFor="budget">
          Budget range
        </label>
        <select id="budget" name="budget" className={`${field} mt-2`} defaultValue="">
          <option value="" disabled>
            Select a range
          </option>
          {budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="details">
          Project details
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          required
          className={`${field} mt-2 resize-y`}
          placeholder="Where are you today, and where do you want to be in twelve months?"
        />
      </div>
      <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-ink hover:text-ink-foreground disabled:opacity-60"
        >
          {status === "sending" ? "Opening your mail app…" : "Start the Conversation"}
          <span aria-hidden="true">→</span>
        </button>
        <p aria-live="polite" className="text-xs text-muted-foreground">
          {status === "sent"
            ? "Your email draft is ready — hit send and we'll reply within one business day."
            : "We respond to every enquiry within one business day."}
        </p>
      </div>
    </form>
  );
}
