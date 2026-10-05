export interface Metric {
  label: string;
  value: string;
  detail?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  period: string;
  type: "Personal Project" | "Client Project" | "Flagship" | "Client Work";
  role?: string;
  summary: string;
  description: string;
  highlights: string[];
  techStack: string[];
  metrics?: Metric[];
  links: {
    github?: string;
    live?: string;
    documentation?: string;
  };
  featured: boolean;
  architectureDetails?: {
    overview: string;
    keyDecisions: string[];
    technicalChallenges: string[];
    outcomes: string[];
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  accent: string;
  skills: {
    name: string;
    level?: "Advanced" | "Proficient" | "Working";
    tags?: string[];
  }[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  organization: string;
  location: string;
  type: "Education" | "Client Work" | "Open Source" | "Engineering";
  summary: string;
  bullets: string[];
  tags: string[];
}

export interface ProfileData {
  name: string;
  tagline: string;
  title: string;
  location: string;
  timezone: string;
  email: string;
  availability: {
    status: "Available" | "Busy";
    headline: string;
    subline: string;
  };
  socials: {
    x: string;
    github: string;
    linkedin: string;
    email: string;
  };
  stats: Metric[];
}
