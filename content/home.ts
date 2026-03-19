// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ... [Type declarations as before] ...

export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults — FleetOps Branding ───────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Launch",
    badgeOuter: "FleetOps SaaS starter is ready",
    titleBefore: "FleetOps –",
    titleHighlight: "Smarter Vehicle Management",
    titleAfter: "for Logistics Teams",
    subtitle:
      "Effortlessly manage your fleet, track assignments, and keep your logistics operations running smoothly with FleetOps.",
    primaryCta: { label: "Get Started", href: "/auth#signup" },
    secondaryCta: { label: "Learn More", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "FleetOps dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Powered by trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why FleetOps",
    heading: "Logistics Visibility and Fleet Control",
    description:
      "Built for businesses that want to streamline logistics and vehicle management, FleetOps delivers a central dashboard and a modern, reliable user experience.",
    items: [
      {
        icon: "Blocks",
        title: "Centralized Fleet Dashboard",
        description: "See all your vehicles, assignments, and key metrics in one place. Stay on top of your operations with real-time insights.",
      },
      {
        icon: "LineChart",
        title: "Easy Vehicle Management",
        description: "Add, organize, and update your vehicles in just a few clicks. Keep your fleet data accurate and accessible.",
      },
      {
        icon: "Goal",
        title: "Optimize Operations",
        description: "Assign vehicles, monitor usage, and ensure timely maintenance. Keep your logistics moving efficiently.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Everything You Need for Smarter Logistics",
    subtitle:
      "FleetOps combines ease-of-use with management power so you can control your operations and fleet performance from anywhere.",
    items: [
      { icon: "TabletSmartphone", title: "Responsive Dashboard", description: "Use on mobile or desktop—no extra setup required." },
      { icon: "BadgeCheck", title: "Vehicle Monitoring", description: "Track key details and statuses for every vehicle." },
      { icon: "PictureInPicture", title: "Assignments", description: "Assign vehicles to drivers or routes in one click." },
      { icon: "Sparkle", title: "Maintenance Reminders", description: "Ensure vehicles stay in top shape with timely reminders." },
      { icon: "MousePointerClick", title: "Easy Team Management", description: "Support for managers and operators with role-based access." },
      { icon: "Wallet", title: "Data Export", description: "Quickly export fleet and usage reports as you grow." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "Core Capabilities",
    subtitle:
      "Ready-to-use tools for tracking, optimizing, and reporting on all aspects of your fleet operations.",
    items: [
      { title: "Authentication", description: "Simple, secure login and team setup.", pro: false },
      { title: "Vehicle Management", description: "Easily add, update, and organize vehicles.", pro: false },
      { title: "Assignment Tracking", description: "Create and monitor vehicle assignments.", pro: false },
      { title: "Maintenance Integration", description: "Never miss crucial service dates again.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Logistics Teams that Rely on FleetOps",
    reviews: [
      {
        image: "/demo-img.jpg",
        name: "Aarav Shah",
        role: "Fleet Manager",
        comment: "FleetOps gave our team complete visibility over our vehicles and streamlined our daily operations.",
        rating: 5.0,
      },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the FleetOps Team",
    members: [],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Flexible Pricing for Fleets of Any Size",
    subtitle: "Simple plans that grow with your operations.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Perfect for small teams or evaluations.",
        buttonText: "Start for free",
        benefits: [
          "Up to 5 vehicles",
          "Team dashboard",
          "Support via email",
        ],
      },
      {
        title: "Team",
        popular: true,
        price: 39,
        description: "Best for active logistics businesses.",
        buttonText: "Start Team Trial",
        benefits: [
          "Unlimited vehicles",
          "Assignments & history",
          "Basic maintenance reminders",
          "Full team access",
        ],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 199,
        description: "For large or regulated fleets.",
        buttonText: "Contact sales",
        benefits: [
          "Priority support",
          "Custom integrations",
          "Reporting suite",
        ],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Reach FleetOps",
    description:
      "Have questions or need a FleetOps demo for your team? Reach out anytime.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-led • India" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "chirag@bidx.ai" },
      hours: { label: "Visit us", value: ["Monday - Friday", "9AM - 6PM IST"] },
    },
    formSubjects: ["Demo Request", "FleetOps Inquiry", "Enterprise Setup"],
    formSubmitLabel: "Send Message",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "FleetOps Frequently Asked Questions",
    items: [
      { question: "How do I add my first vehicle?", answer: "Just sign up and click 'Add Vehicle' in your dashboard." },
      { question: "Can I manage assignments?", answer: "Yes, assign vehicles to drivers or routes in the Assignments tab." },
      { question: "Is there a trial for paid plans?", answer: "All paid plans start with a free trial—no card required." },
      { question: "Can I export my fleet data?", answer: "Easily export your vehicles and histories from the dashboard." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "FleetOps",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
        ],
      },
    ],
    copyright: "© 2026 FleetOps. All rights reserved.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "FleetOps",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/hero-image-light.jpeg", alt: "FleetOps preview" },
    features: [
      { title: "Fleet Dashboard", description: "All your vehicles tracked in one place." },
      { title: "Assignments", description: "Assign and monitor vehicles with ease." },
      { title: "Maintenance", description: "Log service events and get reminders." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Sign up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "View FleetOps on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}