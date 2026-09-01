import tsuyosaImg from "@/assets/tsuyosa.jpg.asset.json";
import juttilandImg from "@/assets/juttiland.jpg.asset.json";
import wakeufreshImg from "@/assets/wakeufresh.jpg.asset.json";
import latchanamImg from "@/assets/latchanam.jpg.asset.json";
import mocaraImg from "@/assets/mocara.jpg.asset.json";
import top07Img from "@/assets/top07number.jpg.asset.json";

export const contact = {
  phone: "+91 93543 30293",
  phoneHref: "tel:+919354330293",
  whatsapp: "https://wa.me/919354330293",
  email: "hello@igrmarketing.com",
  emailHref: "mailto:hello@igrmarketing.com",
  office: "D Mall, Netaji Subhash Place, Delhi",
  mapHref: "https://maps.google.com/?q=D+Mall+Netaji+Subhash+Place+Delhi",
};

export type NavItem = { label: string; to: string };

export const nav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Work", to: "/work" },
  { label: "Process", to: "/process" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export type ServiceGroup = {
  id: string;
  index: string;
  title: string;
  summary: string;
  items: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "strategy",
    index: "01",
    title: "Strategy",
    summary:
      "The commercial thinking that comes before spend. We diagnose the constraint, then design the growth model around it.",
    items: ["Brand Strategy", "Growth Strategy", "Market Research", "Go-To-Market Strategy"],
  },
  {
    id: "marketing",
    index: "02",
    title: "Marketing",
    summary:
      "Full-funnel demand built on channel economics — acquisition, nurture and retention operating as one system.",
    items: [
      "Performance Marketing",
      "Search Engine Optimization",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "WhatsApp Marketing",
      "Lead Generation",
    ],
  },
  {
    id: "creative",
    index: "03",
    title: "Creative",
    summary:
      "Studio-grade identity and campaign work, made to earn attention and hold up under performance pressure.",
    items: ["Branding", "Graphic Design", "Video Production & Editing", "Creative Campaigns"],
  },
  {
    id: "technology",
    index: "04",
    title: "Technology",
    summary:
      "Sites, apps and platforms engineered for speed, search and conversion — shipped by senior engineers.",
    items: [
      "Website Development",
      "Web Application Development",
      "Mobile App Development",
      "E-commerce Development",
      "CRM Solutions",
      "AI Automation",
    ],
  },
  {
    id: "commerce",
    index: "05",
    title: "Commerce",
    summary:
      "Marketplace and quick-commerce operations run end to end: catalogue, content, pricing, visibility and ads.",
    items: ["Amazon Marketing", "Flipkart Marketing", "Marketplace Management", "Quick Commerce"],
  },
  {
    id: "data",
    index: "06",
    title: "Data & Automation",
    summary:
      "Clean measurement and honest reporting, so every decision is made on numbers leadership can trust.",
    items: ["Analytics & Tracking", "Conversion Rate Optimization", "Dashboards & Reporting", "Attribution"],
  },
];

export type Industry = {
  name: string;
  focus: string;
  note: string;
};

export const industries: Industry[] = [
  { name: "FMCG", focus: "Velocity & distribution", note: "Assortment, visibility and retail media working together across modern and quick commerce." },
  { name: "D2C", focus: "Acquisition & retention", note: "Contribution-margin growth models that balance new customers against repeat revenue." },
  { name: "Retail", focus: "Omnichannel demand", note: "Store, marketplace and owned channels measured on one commercial view." },
  { name: "Healthcare", focus: "Trust-led demand", note: "Compliant messaging, credible content and lead systems built for regulated categories." },
  { name: "Education", focus: "Enrolment pipelines", note: "Counsellor-ready lead flow, nurture journeys and admissions-season campaign planning." },
  { name: "Technology", focus: "Pipeline & positioning", note: "Category point of view, account-based demand and a site that converts evaluators." },
  { name: "Manufacturing", focus: "B2B lead systems", note: "Technical content, distributor enablement and export-market discovery." },
  { name: "Real Estate", focus: "Qualified site visits", note: "Project positioning, micro-market targeting and CRM-connected lead routing." },
  { name: "Hospitality", focus: "Direct bookings", note: "Brand-led demand and lifecycle marketing that reduces dependence on aggregators." },
  { name: "Luxury", focus: "Desire & discretion", note: "Restrained brand worlds, clienteling and high-intent, low-noise media." },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  url: string;
  image: string;
  featured: boolean;
  overview: string;
  challenge: string;
  approach: string;
  capabilities: string[];
  takeaways: string[];
};

export const projects: Project[] = [
  {
    slug: "tsuyosa",
    name: "Tsuyosa",
    category: "DTC / Brand & Growth",
    url: "https://tsuyosa.com/",
    image: tsuyosaImg.url,
    featured: true,
    overview:
      "A direct-to-consumer brand built to hold a premium position while scaling acquisition across owned and paid channels.",
    challenge:
      "Standing out in a crowded DTC category where discounting is the default lever and brand memory is thin.",
    approach:
      "A brand-first storefront, a clear product narrative and a media structure that protects margin while opening new demand.",
    capabilities: ["Brand Strategy", "E-commerce Development", "Performance Marketing", "Creative Campaigns"],
    takeaways: [
      "Positioning and storefront designed as one system rather than separate projects.",
      "Creative built to be tested, not just admired.",
      "Measurement in place before spend scaled.",
    ],
  },
  {
    slug: "juttiland",
    name: "Juttiland",
    category: "Fashion / E-commerce",
    url: "https://juttiland.com/",
    image: juttilandImg.url,
    featured: false,
    overview:
      "A heritage-craft footwear label translated into a modern e-commerce experience for a national audience.",
    challenge:
      "Communicating craft, fit and authenticity online for a product traditionally bought in person.",
    approach:
      "Detail-led product storytelling, a simplified purchase journey and always-on social to build category demand.",
    capabilities: ["E-commerce Development", "Social Media Marketing", "Graphic Design", "Conversion Rate Optimization"],
    takeaways: [
      "Product detail pages treated as the primary conversion surface.",
      "Craft communicated through imagery, not adjectives.",
      "Journey simplified to reduce drop-off on mobile.",
    ],
  },
  {
    slug: "wakeufresh",
    name: "WakeUFresh",
    category: "Sleep & Comfort",
    url: "https://www.wakeufresh.com/",
    image: wakeufreshImg.url,
    featured: false,
    overview:
      "A sleep and comfort brand positioned around everyday wellbeing, with a commerce experience built for considered purchases.",
    challenge:
      "Long consideration cycles and high price sensitivity in a category dominated by specification comparison.",
    approach:
      "Benefit-led messaging, comparison clarity and lifecycle communication that supports the decision over time.",
    capabilities: ["Brand Strategy", "Website Development", "Content Marketing", "Email Marketing"],
    takeaways: [
      "Comparison made easy instead of hidden.",
      "Content built for the consideration window, not just the click.",
      "Retention treated as part of acquisition economics.",
    ],
  },
  {
    slug: "latchanam",
    name: "Latchanam",
    category: "Luxury / Silk Sarees",
    url: "https://www.latchanam.com/",
    image: latchanamImg.url,
    featured: true,
    overview:
      "A luxury silk saree house presented with the restraint and richness the category demands, online and in campaign.",
    challenge:
      "Carrying heritage craftsmanship and price integrity into a digital experience without diluting either.",
    approach:
      "An editorial visual system, considered typography and a catalogue experience that lets the weave lead.",
    capabilities: ["Branding", "E-commerce Development", "Creative Campaigns", "Analytics & Tracking"],
    takeaways: [
      "Restraint used as a signal of quality.",
      "Imagery given room; interface kept quiet.",
      "Discovery structured around occasion and craft.",
    ],
  },
  {
    slug: "mocara",
    name: "Mocara",
    category: "Premium Perfumes",
    url: "https://shopmocara.com/",
    image: mocaraImg.url,
    featured: false,
    overview:
      "A premium fragrance brand built for online discovery, where scent has to be communicated entirely through design and language.",
    challenge:
      "Selling an unsmellable product — building confidence without the sampling moment.",
    approach:
      "A scent language, strong art direction and a discovery flow that guides customers to the right note family.",
    capabilities: ["Branding", "E-commerce Development", "Performance Marketing", "Content Marketing"],
    takeaways: [
      "Language engineered to carry the product experience.",
      "Discovery designed around notes, not SKUs.",
      "Repeat purchase built into the lifecycle from launch.",
    ],
  },
  {
    slug: "top07number",
    name: "Top07Number",
    category: "UK Telecom",
    url: "https://www.easyvipmobilenumber.co.uk/",
    image: top07Img.url,
    featured: false,
    overview:
      "A UK VIP mobile number marketplace where inventory scale, search visibility and instant trust decide the sale.",
    challenge:
      "Making a large, fast-changing inventory searchable while establishing credibility for high-value purchases.",
    approach:
      "Search-led architecture, structured filtering and a checkout experience designed to reduce hesitation.",
    capabilities: ["Web Application Development", "Search Engine Optimization", "Conversion Rate Optimization", "Analytics & Tracking"],
    takeaways: [
      "Inventory architecture treated as an SEO asset.",
      "Filtering built for intent, not for feature count.",
      "Trust signals placed at the moment of doubt.",
    ],
  },
];

export const processSteps = [
  { n: "01", title: "Discover", body: "Commercial diagnostics, market and competitor research, channel audit and data hygiene review." },
  { n: "02", title: "Diagnose", body: "We isolate the actual constraint on growth — demand, conversion, retention, margin or capacity." },
  { n: "03", title: "Strategize", body: "Positioning, growth model, channel mix and a quarter-by-quarter roadmap with owned KPIs." },
  { n: "04", title: "Build", body: "Creative, sites, automation and campaign infrastructure shipped by senior pods on a sprint cadence." },
  { n: "05", title: "Launch", body: "Coordinated go-live across channels with tracking verified before spend scales." },
  { n: "06", title: "Optimize", body: "Continuous experimentation across creative, journeys and pricing to compound performance." },
  { n: "07", title: "Scale", body: "Expand into new channels, categories and markets using playbooks proven inside your business." },
];

export const differentiators = [
  { title: "Strategy + Execution", body: "The people who write the plan are accountable for shipping it. No handover, no dilution." },
  { title: "Marketing + Technology", body: "Campaigns and the platforms they run on are built by one team, so the funnel is never someone else's problem." },
  { title: "Creative + Performance", body: "Work is judged on both craft and contribution. Beautiful that doesn't convert is unfinished." },
  { title: "Data + Decision Making", body: "Tracking is set up first. Reporting shows what changed, what it cost and what we do next." },
  { title: "Senior Ownership", body: "Senior practitioners stay on the account after the pitch — not just at the start of it." },
  { title: "Transparent Reporting", body: "One shared view of performance, refreshed on a fixed cadence, with the uncomfortable numbers included." },
];

export type Insight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
};

export const insights: Insight[] = [
  {
    slug: "growth-is-a-system",
    category: "Growth",
    title: "Growth is a system, not a campaign",
    excerpt: "Why brands that treat acquisition, conversion and retention as one model outlast the ones optimising a single channel.",
    readTime: "6 min read",
  },
  {
    slug: "contribution-margin-marketing",
    category: "Marketing",
    title: "Reporting on contribution margin changes the conversation",
    excerpt: "Impressions and ROAS flatter the deck. Margin tells leadership whether the growth is worth having.",
    readTime: "5 min read",
  },
  {
    slug: "brand-in-a-performance-world",
    category: "Brand",
    title: "Brand is the cheapest performance lever you own",
    excerpt: "What happens to cost per acquisition when people already know who you are before the ad loads.",
    readTime: "7 min read",
  },
  {
    slug: "quick-commerce-playbook",
    category: "E-commerce",
    title: "The quick-commerce shelf is a different discipline",
    excerpt: "Assortment, packs and visibility on Blinkit, Zepto and Instamart behave nothing like a marketplace listing.",
    readTime: "6 min read",
  },
  {
    slug: "ai-automation-marketing-ops",
    category: "AI",
    title: "Where automation actually pays back in marketing ops",
    excerpt: "A practical view on which manual workflows are worth automating first — and which ones are not.",
    readTime: "5 min read",
  },
  {
    slug: "technical-seo-compounding",
    category: "SEO",
    title: "Technical SEO is an infrastructure decision",
    excerpt: "Site architecture choices made once quietly determine how much organic demand you can ever compound.",
    readTime: "8 min read",
  },
];
