import { ProfileData } from "@/types";

export const profileData: ProfileData = {
  name: "Vinit Kumar",
  title: "Full-Stack Software Engineer",
  tagline:
    "Building resilient web applications, workflow engines, and intelligent platforms from first principles.",
  location: "Pilani, Rajasthan, India",
  timezone: "Asia/Kolkata",
  email: "vinitk81144@gmail.com",
  availability: {
    status: "Available",
    headline: "Open for Full-Stack Roles",
    subline:
      "Seeking high-impact teams building modern web platforms, product applications, or developer tools.",
  },
  socials: {
    x: "https://x.com/vinitxcodes",
    github: "https://github.com/VinitKumar01",
    linkedin: "https://www.linkedin.com/in/vinitkumar01",
    email: "mailto:vinitk81144@gmail.com",
  },
  stats: [
    {
      label: "Client Platforms",
      value: "2 Production",
      detail: "Serving real clients, e-commerce & 58k+ audience",
    },
    {
      label: "Client Prod Uptime",
      value: "100%",
      detail: "4+ months without outages",
    },
    {
      label: "Languages",
      value: "Go, TS, JS, Python",
      detail: "Type-safe, concurrent, full-stack",
    },
    {
      label: "Architecture",
      value: "DAG & Edge",
      detail: "Topological sort, Cloudflare Workers, Redis cache",
    },
  ],
};
