import { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  {
    period: "2025",
    title: "Lead Full-Stack Engineer (Client Project)",
    organization: "Astrologer Pankaj Bahl Platform",
    location: "Remote / Commercial Client",
    type: "Client Work",
    summary:
      "Engineered and deployed an edge-native production consulting, Vedic puja booking, and e-commerce platform deployed on Cloudflare Workers and Pages.",
    bullets: [
      "Developed high-performance Hono.js REST API on Cloudflare Workers paired with Vite + React 19 SPA on Cloudflare Pages.",
      "Designed two-tier caching architecture (in-memory Map + Upstash Redis) with 400ms timeout race fallback and non-blocking background writes.",
      "Enforced single-model atomic write invariants and in-memory concurrency limiting to prevent connection pool exhaustion on serverless PostgreSQL.",
      "Integrated Razorpay payment & tax invoicing pipelines with automated Resend PDF emails and Twilio WhatsApp notifications.",
    ],
    tags: [
      "Hono.js",
      "Cloudflare Workers",
      "React 19",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "Razorpay",
      "Twilio",
    ],
  },
  {
    period: "2024",
    title: "Full-Stack Developer & Cloud DevOps (Client Project)",
    organization: "TruckSpark Platform",
    location: "Remote / Commercial Client",
    type: "Client Work",
    summary:
      "Engineered and deployed a production-ready vehicle comparison platform for a commercial client with an audience of over 58,000 YouTube subscribers.",
    bullets: [
      "Built custom admin management dashboard, vehicle comparison engine, and CDN asset pipelines.",
      "Owned AWS EC2 infrastructure deployment; diagnosed boot script failure modes and implemented a custom Linux systemd service for zero-downtime operation.",
      "Successfully sustained 100% production uptime across 4 months of commercial operation.",
    ],
    tags: [
      "Next.js",
      "PostgreSQL",
      "Redis",
      "AWS EC2",
      "Systemd",
      "Docker",
      "Clerk Auth",
    ],
  },
  {
    period: "2024 - 2028",
    title: "B.Tech in Computer Science and Engineering",
    organization: "Maharshi Dayanand University",
    location: "Rohtak, Haryana, India",
    type: "Education",
    summary:
      "Rigorous foundational computer science curriculum covering algorithms, data structures, computer networks, database management systems, and distributed computing.",
    bullets: [
      "Focusing on distributed systems, concurrent programming in Go, and modern full-stack web platforms.",
      "Active open-source contributor building orchestration engines and developer infrastructure tooling.",
    ],
    tags: [
      "Algorithms",
      "Data Structures",
      "Operating Systems",
      "Concurrency",
      "Computer Networks",
    ],
  },
];
