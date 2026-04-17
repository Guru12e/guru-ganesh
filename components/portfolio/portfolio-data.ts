export const navItems = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "education", label: "Credentials" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export const heroStats = [
  { label: "Case studies launched", value: "12+" },
  { label: "Design systems built", value: "7" },
  { label: "Avg. prototype cycle", value: "5 days" },
  { label: "Research-backed flows", value: "100%" },
] as const;

export const designPrinciples = [
  {
    title: "Empathy-led discovery",
    description:
      "Every product decision starts with interviews, workflow mapping, and uncovering friction from the user's point of view.",
  },
  {
    title: "Systems over one-offs",
    description:
      "Interfaces are designed as scalable systems with accessible patterns, reusable components, and a consistent visual rhythm.",
  },
  {
    title: "Prototype, test, refine",
    description:
      "Fast clickable prototypes and usability testing keep ideas grounded in evidence before engineering effort begins.",
  },
] as const;

export const techStack = [
  {
    name: "Figma",
    category: "UI tool",
    icon: "figma",
    description: "Component libraries, auto-layout systems, and high-fidelity handoff.",
  },
  {
    name: "Adobe XD",
    category: "UI tool",
    icon: "pen",
    description: "Rapid ideation, flow mapping, and polished interaction concepts.",
  },
  {
    name: "HTML, CSS & JavaScript",
    category: "Frontend",
    icon: "code",
    description: "Production-aware design choices informed by browser behavior and performance.",
  },
  {
    name: "React",
    category: "Frontend",
    icon: "react",
    description: "Designing reusable UI patterns that translate cleanly into scalable interfaces.",
  },
  {
    name: "Framer Motion",
    category: "Motion",
    icon: "sparkles",
    description: "Micro-interactions and scroll storytelling that add clarity without noise.",
  },
  {
    name: "Lenis + motion systems",
    category: "Experience",
    icon: "orbit",
    description: "Smooth scrolling, parallax layering, and tactile interactions with intent.",
  },
] as const;

export const educationTimeline = [
  {
    title: "B.Tech in Computer Science",
    organization: "Anna University",
    period: "2018 — 2022",
    description:
      "Built a foundation in systems thinking, human-computer interaction, and frontend implementation.",
  },
  {
    title: "Google UX Design Certificate",
    organization: "Coursera",
    period: "2023",
    description:
      "Strengthened research synthesis, information architecture, wireframing, and usability testing workflows.",
  },
  {
    title: "Advanced UI Design for Digital Products",
    organization: "Independent specialization",
    period: "2024",
    description:
      "Focused on visual hierarchy, motion design, and premium product experiences for modern web apps.",
  },
] as const;

export const skills = [
  {
    title: "UX Research",
    description: "Interviews, heuristic reviews, customer journey mapping, and insight synthesis.",
  },
  {
    title: "Wireframing",
    description: "Rapid low-fidelity exploration that aligns flows, structure, and navigation early.",
  },
  {
    title: "Prototyping",
    description: "Interactive prototypes that validate motion, hierarchy, and end-to-end task completion.",
  },
  {
    title: "Usability Testing",
    description: "Observation-led feedback loops that expose hidden friction before launch.",
  },
  {
    title: "Interaction Design",
    description: "Tactile feedback, motion rules, and polished states that elevate product feel.",
  },
] as const;

export const contactLinks = [
  {
    label: "Email",
    value: "guruganesh.design@gmail.com",
    href: "mailto:guruganesh.design@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/guruganesh",
    href: "https://www.linkedin.com/",
  },
  {
    label: "Behance",
    value: "behance.net/guruganesh",
    href: "https://www.behance.net/",
  },
  {
    label: "Dribbble",
    value: "dribbble.com/guruganesh",
    href: "https://dribbble.com/",
  },
] as const;

export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  year: string;
  headline: string;
  problem: string;
  tools: string[];
  process: string[];
  outcome: string;
  impact: string;
  client: string;
  preview: {
    from: string;
    via: string;
    to: string;
    highlight: string;
  };
  deliverables: string[];
  narrative: string[];
  stats: {
    label: string;
    value: string;
  }[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "finova-banking",
    title: "Finova Banking",
    category: "Fintech product design",
    year: "2024",
    headline: "Redesigned a mobile banking experience to reduce anxiety in everyday money tasks.",
    problem:
      "Users struggled to understand spending patterns, upcoming bills, and card controls inside an overloaded banking app.",
    tools: ["Figma", "React prototyping", "Framer Motion", "User interviews"],
    process: ["Research", "Wireframe", "Prototype", "Testing"],
    outcome:
      "Created a modular finance dashboard with calm visual hierarchy, quick actions, and smarter spending visibility.",
    impact: "Cut task completion time for key banking actions by 31% during moderated usability sessions.",
    client: "Consumer finance startup",
    preview: {
      from: "from-cyan-400/80",
      via: "via-sky-500/40",
      to: "to-indigo-500/80",
      highlight: "shadow-cyan-500/30",
    },
    deliverables: [
      "Mobile app redesign",
      "Card management flow",
      "Spending analytics dashboard",
      "Interaction motion guidelines",
    ],
    narrative: [
      "The existing product buried critical money actions behind dense navigation and inconsistent visual emphasis.",
      "I mapped common user journeys, identified decision-making friction, and translated findings into a clearer information architecture.",
      "The final system focused on one-handed usage, legible financial summaries, and reassuring microcopy at moments of risk.",
    ],
    stats: [
      { label: "Research participants", value: "18" },
      { label: "Prototype iterations", value: "6" },
      { label: "Critical flows redesigned", value: "9" },
    ],
  },
  {
    slug: "medinest-dashboard",
    title: "MediNest Dashboard",
    category: "Healthcare UX",
    year: "2024",
    headline: "Designed a clinician dashboard that helps teams detect urgent patient signals faster.",
    problem:
      "Care teams had to scan disconnected data panels and missed high-priority updates in a fast-moving environment.",
    tools: ["Figma", "Adobe XD", "Usability testing", "Design systems"],
    process: ["Research", "Wireframe", "Prototype", "Testing"],
    outcome:
      "Introduced an urgency-driven dashboard with clearer prioritization, simplified filters, and structured patient summaries.",
    impact: "Improved perceived information clarity from 2.8 to 4.6 out of 5 in follow-up validation sessions.",
    client: "Digital health platform",
    preview: {
      from: "from-emerald-400/80",
      via: "via-teal-500/35",
      to: "to-cyan-500/80",
      highlight: "shadow-emerald-500/30",
    },
    deliverables: [
      "Responsive clinician dashboard",
      "Alert triage patterns",
      "Patient profile summaries",
      "Accessibility and contrast refinements",
    ],
    narrative: [
      "Clinical teams needed faster scanning, clearer status feedback, and less cognitive overload across long shifts.",
      "I prioritized severe states, grouped patient context into digestible modules, and validated the hierarchy with target users.",
      "The final direction balanced clean aesthetics with operational clarity so urgent states stood out immediately.",
    ],
    stats: [
      { label: "Dashboard widgets streamlined", value: "14" },
      { label: "Usability score uplift", value: "+64%" },
      { label: "Alert states standardized", value: "12" },
    ],
  },
  {
    slug: "loomcart-commerce",
    title: "LoomCart Commerce",
    category: "E-commerce experience",
    year: "2023",
    headline: "Reimagined a fashion storefront with stronger product storytelling and a faster mobile checkout.",
    problem:
      "High mobile drop-off came from fragmented product details, weak trust cues, and a checkout flow that felt too long.",
    tools: ["Figma", "HTML/CSS", "React", "A/B feedback loops"],
    process: ["Research", "Wireframe", "Prototype", "Testing"],
    outcome:
      "Built a premium storefront language with editorial product cards, sticky purchase actions, and a leaner payment path.",
    impact: "Boosted checkout completion intent by 22% in prototype validation and stakeholder reviews.",
    client: "Direct-to-consumer retail brand",
    preview: {
      from: "from-fuchsia-400/80",
      via: "via-pink-500/35",
      to: "to-rose-500/80",
      highlight: "shadow-fuchsia-500/30",
    },
    deliverables: [
      "Mobile-first storefront",
      "Product detail storytelling",
      "Optimized cart and checkout",
      "Visual merchandising system",
    ],
    narrative: [
      "The brand wanted a more premium presence without sacrificing speed or conversion clarity on smaller screens.",
      "I restructured the product narrative to front-load fit, material, and trust signals while keeping checkout momentum high.",
      "The result felt more editorial, more tactile, and easier to complete from discovery through payment.",
    ],
    stats: [
      { label: "Mobile screens redesigned", value: "16" },
      { label: "Checkout steps removed", value: "2" },
      { label: "Prototype satisfaction", value: "91%" },
    ],
  },
  {
    slug: "wandersphere-planner",
    title: "WanderSphere Planner",
    category: "Travel platform UX",
    year: "2023",
    headline: "Created a collaborative travel planner that turns scattered trip ideas into a shared itinerary.",
    problem:
      "Trip planning across friends involved too many tools, duplicated chats, and unclear ownership over bookings and schedules.",
    tools: ["Figma", "Journey mapping", "Framer Motion", "Prototype testing"],
    process: ["Research", "Wireframe", "Prototype", "Testing"],
    outcome:
      "Designed a collaborative trip board with shared saves, itinerary blocks, and confidence-building booking checkpoints.",
    impact: "Reduced planning confusion by 40% based on post-test task confidence ratings.",
    client: "Travel planning startup",
    preview: {
      from: "from-amber-300/80",
      via: "via-orange-400/35",
      to: "to-pink-500/80",
      highlight: "shadow-orange-500/30",
    },
    deliverables: [
      "Shared itinerary workspace",
      "Destination inspiration feed",
      "Booking readiness checklist",
      "Mobile collaboration patterns",
    ],
    narrative: [
      "Planning a group trip often meant juggling screenshots, tabs, and chat messages without a single source of truth.",
      "I turned the experience into a collaborative board where participants could compare options, vote, and organize days visually.",
      "The final product gave users clarity on what's decided, what still needs discussion, and what actions come next.",
    ],
    stats: [
      { label: "Journey maps created", value: "5" },
      { label: "Decision flows simplified", value: "8" },
      { label: "Confidence uplift", value: "+40%" },
    ],
  },
];
