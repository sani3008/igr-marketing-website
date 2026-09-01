import { createFileRoute, useNavigate, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { servicesData } from "@/lib/servicesData";
import { Reveal } from "@/components/site/Reveal";

// Define the route with search params for pre-selecting a service
export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      service: typeof search.service === "string" ? search.service : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Contact | IGR Marketing" },
      { name: "description", content: "Get in touch with IGR Marketing. Let's discuss your growth strategy, performance marketing, and technology requirements." },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid work email"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select what you need help with"),
  requirements: z.string().min(10, "Please provide some details about your project"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function ContactPage() {
  const search = Route.useSearch();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: search.service || "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("submitting");
    setErrorMessage("");

    try {
      const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
      
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }
      } else {
        // Fallback simulated submission if no endpoint is configured
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Something went wrong while sending your enquiry. Please try again.");
    }
  };

  return (
    <article className="min-h-screen pt-24 pb-20 md:pt-32 md:pb-32 bg-[#F9F9F7]">
      <div className="container-igr">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24 items-start">
          
          {/* LEFT: Context */}
          <Reveal>
            <div className="lg:sticky lg:top-32 max-w-lg">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Contact</span>
              <h1 className="mt-8 font-display text-4xl leading-tight tracking-tight md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
                Let’s talk about your next growth move.
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
                Share your business and project requirements with us. Our team will review your needs and get back to you shortly to discuss how we can build a commercial system designed to scale.
              </p>
            </div>
          </Reveal>

          {/* RIGHT: Form */}
          <Reveal delay={100}>
            <div className="rounded-sm border border-border/40 bg-white p-8 shadow-sm md:p-12">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>
                  </div>
                  <h3 className="font-display text-2xl tracking-tight text-foreground">Thanks — your enquiry has been received.</h3>
                  <p className="mt-4 text-base text-muted-foreground">
                    Our team will review your requirements and get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      reset();
                      setStatus("idle");
                    }}
                    className="mt-8 text-sm font-semibold text-brand underline-offset-4 hover:underline transition-all"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8">
                  {status === "error" && (
                    <div className="rounded border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-500">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
                    <div className="grid gap-2.5">
                      <label htmlFor="fullName" className="text-sm font-medium text-foreground/80">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        disabled={status === "submitting"}
                        className="w-full rounded-sm border border-border/60 bg-transparent px-4 py-3.5 text-base text-foreground transition-all placeholder:text-muted-foreground/60 hover:border-border focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand disabled:opacity-50"
                        placeholder="John Doe"
                        {...register("fullName")}
                      />
                      {errors.fullName && <span className="text-xs text-red-500">{errors.fullName.message}</span>}
                    </div>

                    <div className="grid gap-2.5">
                      <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                        Work Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        disabled={status === "submitting"}
                        className="w-full rounded-sm border border-border/60 bg-transparent px-4 py-3.5 text-base text-foreground transition-all placeholder:text-muted-foreground/60 hover:border-border focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand disabled:opacity-50"
                        placeholder="john@company.com"
                        {...register("email")}
                      />
                      {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
                    <div className="grid gap-2.5">
                      <label htmlFor="company" className="text-sm font-medium text-foreground/80">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        disabled={status === "submitting"}
                        className="w-full rounded-sm border border-border/60 bg-transparent px-4 py-3.5 text-base text-foreground transition-all placeholder:text-muted-foreground/60 hover:border-border focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand disabled:opacity-50"
                        placeholder="Your Company Ltd"
                        {...register("company")}
                      />
                    </div>

                    <div className="grid gap-2.5">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground/80">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        disabled={status === "submitting"}
                        className="w-full rounded-sm border border-border/60 bg-transparent px-4 py-3.5 text-base text-foreground transition-all placeholder:text-muted-foreground/60 hover:border-border focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand disabled:opacity-50"
                        placeholder="+91 98765 43210"
                        {...register("phone")}
                      />
                    </div>
                  </div>

                  <div className="grid gap-2.5">
                    <label htmlFor="service" className="text-sm font-medium text-foreground/80">
                      What do you need help with? *
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        disabled={status === "submitting"}
                        className="w-full appearance-none rounded-sm border border-border/60 bg-transparent px-4 py-3.5 pr-10 text-base text-foreground transition-all hover:border-border focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand disabled:opacity-50"
                        {...register("service")}
                      >
                        <option value="" disabled className="text-muted-foreground">Select a capability...</option>
                        {servicesData.map((s) => (
                          <option key={s.slug} value={s.slug}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                    </div>
                    {errors.service && <span className="text-xs text-red-500">{errors.service.message}</span>}
                  </div>

                  <div className="grid gap-2.5">
                    <label htmlFor="requirements" className="text-sm font-medium text-foreground/80">
                      Project / Requirements *
                    </label>
                    <textarea
                      id="requirements"
                      rows={4}
                      disabled={status === "submitting"}
                      className="w-full resize-none rounded-sm border border-border/60 bg-transparent px-4 py-3.5 text-base text-foreground transition-all placeholder:text-muted-foreground/60 hover:border-border focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand disabled:opacity-50"
                      placeholder="Tell us about your current challenges, goals, and what you're looking to achieve..."
                      {...register("requirements")}
                    />
                    {errors.requirements && <span className="text-xs text-red-500">{errors.requirements.message}</span>}
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-sm bg-brand px-8 py-4 text-sm font-semibold tracking-wide text-brand-foreground transition-all hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-[#F9F9F7] disabled:opacity-70"
                    >
                      {status === "submitting" ? "Sending..." : (
                        <>
                          Send Enquiry
                          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

        </div>
      </div>
    </article>
  );
}
