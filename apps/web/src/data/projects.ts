import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    slug: "g8g",
    title: "g8g: Workflow Automation Platform",
    tagline:
      "DAG-based visual workflow automation engine with Go backend and Next.js + ReactFlow canvas",
    period: "2025 - Present",
    type: "Personal Project",
    role: "Creator & Systems Engineer",
    summary:
      "Engineered an n8n-inspired visual workflow automation platform to explore distributed graph orchestration from first principles. Features a high-concurrency Go execution engine paired with a reactive Next.js and ReactFlow canvas.",
    description:
      "g8g models automation workflows as Directed Acyclic Graphs (DAGs). The Go backend handles topological sorting, cycle detection, dynamic webhook routing, cron scheduling, and parallel execution of independent graph branches using lightweight goroutines and PostgreSQL persistence.",
    highlights: [
      "Designed and implemented a custom DAG execution engine in Go with cycle detection, topological sorting, and parallel branch execution via goroutine worker pools.",
      "Built dynamic trigger subsystems: manual execution, webhook ingestion with runtime route registration, and time-interval schedulers using Go tickers with UUID job tracking.",
      "Constructed centralized node executor registry integrating Google Gemini AI prompts, Resend email dispatch, and fan-in merge nodes.",
      "Engineered database persistence in PostgreSQL using type-safe SQLC generated queries and Goose schema migrations.",
      "Developed an interactive visual canvas in Next.js using ReactFlow and Zustand with live node execution output inspection.",
    ],
    techStack: [
      "Go",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "ReactFlow",
      "Docker",
      "Zustand",
      "Tailwind CSS",
    ],
    metrics: [
      {
        label: "Execution Model",
        value: "DAG / Goroutines",
        detail: "Parallel independent branches",
      },
      {
        label: "Cycle Detection",
        value: "Tarjan / DFS",
        detail: "Zero infinite execution loops",
      },
      {
        label: "Trigger Types",
        value: "Manual, Webhook, Cron",
        detail: "Dynamic runtime routing",
      },
    ],
    links: {
      github: "https://github.com/VinitKumar01/n8n-clone",
      live: "https://g8g-web.vercel.app",
    },
    featured: true,
    architectureDetails: {
      overview:
        "Decouples the ReactFlow graph editor in Next.js from the runtime engine in Go. Workflows are serialized as node-and-edge JSON schemas, validated on the Go backend into adjacency lists, sorted topologically, and dispatched across concurrent goroutines.",
      keyDecisions: [
        "Selected Go for the execution runtime to leverage lightweight goroutine worker pools and channels for concurrent branch execution without thread locking.",
        "Utilized ReactFlow and Zustand on the frontend to provide smooth graph navigation, customized node dialogs, and real-time payload feedback.",
        "Structured PostgreSQL tables with SQLC to ensure compile-time type-safe database queries and automated schema evolution with Goose migrations.",
      ],
      technicalChallenges: [
        "Preventing race conditions when multiple concurrent branches converge into a single fan-in merge node.",
        "Detecting circular dependencies before execution to avoid infinite loops and goroutine leaks.",
        "Managing dynamic webhook registration in memory without requiring server restarts upon workflow activation.",
      ],
      outcomes: [
        "Independent branches execute concurrently with sub-millisecond dispatch overhead.",
        "Clean executor plugin registry allows adding new third-party integrations in under 50 lines of Go code.",
      ],
    },
  },
  {
    slug: "astropankajbahl",
    title: "Astrologer Pankaj Bahl Platform",
    tagline:
      "Production spiritual consulting, Vedic puja booking, and e-commerce platform running on Cloudflare Workers & Pages",
    period: "2025",
    type: "Client Project",
    role: "Lead Full-Stack Engineer",
    summary:
      "Built and deployed an end-to-end production web platform for Astrologer Pankaj Bahl, featuring online astrological video consultations, Vedic puja and temple offerings (Chadhava) bookings, and a spiritual merchandise e-commerce shop.",
    description:
      "Architected as a high-performance edge-ready monorepo with a Hono.js REST API on Cloudflare Workers, a Vite + React 19 SPA on Cloudflare Pages, serverless PostgreSQL with Prisma, two-tier Redis caching, and full payment and notification pipelines.",
    highlights: [
      "Engineered edge REST API on Cloudflare Workers using Hono.js and deployed Vite + React 19 SPA on Cloudflare Pages.",
      "Architected two-tier caching: L1 zero-latency in-memory Map cache plus L2 Upstash Redis with 400ms timeout race fallback and non-blocking background writes.",
      "Implemented single-model atomic write invariants and an in-memory ConcurrencyLimiter (max 6 active queries) to eliminate connection permit exhaustion on serverless PostgreSQL HTTP mode.",
      "Integrated Razorpay Orders and Invoices API with automated Resend transactional email tax receipts (PDF attachments) and Twilio WhatsApp booking updates.",
      "Developed an administrative control panel across 17 distinct domain tabs (services, pujas, chadhava, products, orders, coupons, blogs) backed by Cloudflare R2 media storage.",
    ],
    techStack: [
      "Hono.js",
      "Cloudflare Workers",
      "Vite",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Upstash Redis",
      "Cloudflare R2",
      "Razorpay",
      "Resend",
      "Twilio WhatsApp",
      "Tailwind CSS",
    ],
    metrics: [
      {
        label: "Deployment",
        value: "Cloudflare Edge",
        detail: "Workers API + Pages SPA",
      },
      {
        label: "Caching Tier",
        value: "L1 Map + L2 Redis",
        detail: "400ms timeout race fallback",
      },
      {
        label: "Admin Panel",
        value: "17 Dynamic Tabs",
        detail: "Full business management",
      },
    ],
    links: {
      live: "https://astrologer-web.pages.dev",
    },
    featured: true,
    architectureDetails: {
      overview:
        "Built with a strict domain separation between an edge-deployed Hono.js backend on Cloudflare Workers and a Vite + React 19 frontend on Cloudflare Pages. Uses Better Auth database-backed verification strategies for secure cross-domain session cookies.",
      keyDecisions: [
        "Adopted Cloudflare Workers and Pages for sub-second global response times and zero server maintenance.",
        "Used Prisma with serverless PostgreSQL, enforcing atomic writes without implicit transactions to support serverless connection scalability.",
        "Designed two-tier caching (in-memory Map + Upstash Redis) to deliver instant catalogue and horoscope responses while gracefully degrading under Redis timeouts.",
      ],
      technicalChallenges: [
        "Resolving serverless HTTP transaction constraints by eliminating implicit Prisma multi-model transactions in favor of explicit atomic operations.",
        "Preventing database connection exhaustion under burst loads using an in-memory concurrency queue.",
        "Configuring Razorpay checkout safeguards to prevent script loop crashes on privacy-oriented browsers with ad blockers.",
      ],
      outcomes: [
        "Complete commercial web platform handling client consultations, temple offerings, e-commerce checkout, and automated multi-channel notifications.",
      ],
    },
  },
  {
    slug: "truck-spark",
    title: "TruckSpark: Vehicle Showcase Platform",
    tagline:
      "Production vehicle comparison & listing platform serving a client audience of over 58,000 YouTube subscribers",
    period: "2024",
    type: "Client Project",
    role: "Full-Stack Developer & DevOps",
    summary:
      "Engineered and deployed a production-grade vehicle showcase and side-by-side comparison platform for a commercial automotive client with an audience of over 58,000 YouTube subscribers.",
    description:
      "Architected as a TypeScript monorepo pairing Next.js App Router with an Express backend, Redis query caching, PostgreSQL data persistence, UploadThing asset CDN pipelines, and Dockerized AWS EC2 deployment.",
    highlights: [
      "Developed vehicle management platform with side-by-side spec comparison engine, multi-criteria filtering, and role-based administrative dashboard using Clerk authentication.",
      "Implemented high-performance Express backend with Redis caching, delivering sub-50ms query responses for popular vehicle lookups.",
      "Configured UploadThing CDN asset pipeline for optimized multi-angle vehicle imagery and downloadable specification brochures.",
      "Owned AWS EC2 cloud deployment, diagnosing boot script failure modes and implementing a custom Linux systemd startup service for reliable automated recovery.",
      "Operated in production for 4+ consecutive months with zero reported downtime, serving thousands of active visitors.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "Docker",
      "AWS EC2",
      "Clerk Auth",
      "UploadThing",
      "Tailwind CSS",
    ],
    metrics: [
      {
        label: "Client Audience",
        value: "58,000+ Subs",
        detail: "Commercial YouTube audience",
      },
      {
        label: "Production Uptime",
        value: "100% (4 Months)",
        detail: "Zero reported outages",
      },
      {
        label: "Caching Tier",
        value: "Redis In-Memory",
        detail: "Sub-50ms query latency",
      },
    ],
    links: {
      github: "https://github.com/VinitKumar01/truck-spark",
    },
    featured: true,
    architectureDetails: {
      overview:
        "A TypeScript monorepo combining a Next.js App Router frontend with an Express API backend, Redis in-memory cache, and PostgreSQL database. Scheduled Node-Cron jobs handle cache invalidation and clean up pending uploads.",
      keyDecisions: [
        "Employed Redis caching for vehicle model comparison endpoints, reducing database queries by over 70%.",
        "Wrote custom Linux systemd unit file on AWS EC2 to guarantee automatic restart and log rotation across server reboots.",
      ],
      technicalChallenges: [
        "Overcoming AWS EC2 boot initialization failures by diagnosing Node environment race conditions and writing systemd watchdog services.",
        "Handling high-resolution multi-image uploads through direct-to-CDN presigned pipelines to prevent server memory bloat.",
      ],
      outcomes: [
        "Zero downtime across 4 months of commercial operation with responsive vehicle comparison search.",
      ],
    },
  },
];
