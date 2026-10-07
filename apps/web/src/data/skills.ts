import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    description:
      "Typed, concurrent, and high-performance computing foundations",
    accent: "#f97316",
    skills: [
      {
        name: "Go",
        level: "Advanced",
        tags: ["Goroutines", "Channels", "DAG Engines", "Microservices"],
      },
      {
        name: "TypeScript",
        level: "Advanced",
        tags: ["Strict Types", "Generics", "Node.js", "Next.js"],
      },
      {
        name: "JavaScript",
        level: "Advanced",
        tags: ["Async/Await", "Event Loop", "Web APIs"],
      },
      {
        name: "Python",
        level: "Proficient",
        tags: ["AI Pipelines", "Automation", "Scripting"],
      },
      {
        name: "SQL",
        level: "Advanced",
        tags: ["PostgreSQL", "Complex Joins", "Indexing", "Migrations"],
      },
    ],
  },
  {
    title: "Web & Frameworks",
    description:
      "Modern, responsive, and accessible client-server architectures",
    accent: "#f97316",
    skills: [
      {
        name: "Next.js",
        level: "Advanced",
        tags: ["App Router", "Server Actions", "SSR/SSG", "Turbopack"],
      },
      {
        name: "React",
        level: "Advanced",
        tags: ["Hooks", "State Management", "Virtual DOM"],
      },
      {
        name: "Node.js & Express",
        level: "Advanced",
        tags: ["REST APIs", "Middleware", "Streaming", "Auth"],
      },
      {
        name: "Hono.js",
        level: "Advanced",
        tags: ["Cloudflare Workers", "Edge REST APIs", "Routing"],
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        tags: ["Design Systems", "Responsive UI"],
      },
      {
        name: "ReactFlow",
        level: "Advanced",
        tags: ["Node Graphs", "Visual Workflows"],
      },
      {
        name: "WebSockets",
        level: "Proficient",
        tags: ["Bidirectional Sync", "Multiplayer Rooms", "Streaming"],
      },
    ],
  },
  {
    title: "AI & Systems",
    description:
      "Autonomous agents, stateful decision graphs, and contextual retrieval",
    accent: "#f97316",
    skills: [
      {
        name: "LangGraph",
        level: "Advanced",
        tags: ["Stateful Graphs", "Multi-Agent Loops"],
      },
      {
        name: "RAG",
        level: "Advanced",
        tags: ["Vector Search", "Chunking", "Context Retrieval"],
      },
      {
        name: "AI Agents & LangChain",
        level: "Advanced",
        tags: ["Tool Calling", "Workflows", "Memory"],
      },
      {
        name: "Workflow Engines",
        level: "Advanced",
        tags: ["DAG Execution", "Topological Sort"],
      },
    ],
  },
  {
    title: "Databases & Infrastructure",
    description:
      "Reliable data persistence, in-memory caching, and cloud deployments",
    accent: "#f97316",
    skills: [
      {
        name: "PostgreSQL",
        level: "Advanced",
        tags: ["Relational Schemas", "Prisma ORM", "SQLC", "Migrations"],
      },
      {
        name: "Redis",
        level: "Proficient",
        tags: ["In-Memory Caching", "Pub/Sub", "Rate Limiting"],
      },
      {
        name: "MongoDB",
        level: "Proficient",
        tags: ["Document Stores", "Aggregation Pipelines"],
      },
      {
        name: "Docker",
        level: "Advanced",
        tags: ["Container Isolation", "Multi-stage Builds", "Sandboxing"],
      },
      {
        name: "Cloudflare",
        level: "Advanced",
        tags: ["Workers", "Pages", "R2 Storage"],
      },
      {
        name: "AWS & Linux",
        level: "Proficient",
        tags: ["EC2", "Linux Admin", "Server Deployment"],
      },
      {
        name: "Git & Neovim",
        level: "Advanced",
        tags: ["CLI Workflows", "Version Control"],
      },
    ],
  },
];
