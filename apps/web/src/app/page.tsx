"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { experienceData } from "@/data/experience";
import SectionHeading from "@/components/common/SectionHeading";
import SkillBadge from "@/components/common/SkillBadge";
import ExperienceCard from "@/components/experience/ExperienceCard";
import ProjectCard from "@/components/projects/ProjectCard";
import CursorCompanion from "@/components/common/CursorCompanion";
import {
  Github,
  Linkedin,
  Mail,
  Copy,
  Check,
  FileText,
  Send,
  ArrowUp,
  ArrowUpRight,
} from "lucide-react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <CursorCompanion />

      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#09090b]/80 border-b border-zinc-800/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="#about" className="flex items-center gap-2.5 group">
            <div className="relative size-8 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 group-hover:border-zinc-600 transition shadow-sm shrink-0">
              <Image
                src="/pfp.png"
                alt="Vinit Kumar"
                width={32}
                height={32}
                priority
                className="size-full object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <span className="font-semibold text-zinc-100 text-sm">Vinit</span>
          </Link>

          <nav className="flex items-center gap-4 sm:gap-6 text-xs font-mono text-zinc-400">
            <Link
              href="#about"
              className="hover:text-zinc-100 hover:underline hover:decoration-zinc-500 hover:underline-offset-4 transition"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="hover:text-zinc-100 hover:underline hover:decoration-zinc-500 hover:underline-offset-4 transition"
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="hover:text-zinc-100 hover:underline hover:decoration-zinc-500 hover:underline-offset-4 transition"
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="hover:text-zinc-100 hover:underline hover:decoration-zinc-500 hover:underline-offset-4 transition"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="hover:text-zinc-100 hover:underline hover:decoration-zinc-500 hover:underline-offset-4 transition"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-16">
        <section id="about" className="space-y-6 pt-2">
          <div className="flex items-center gap-4">
            <div className="relative size-20 sm:size-24 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-900 shrink-0">
              <Image
                src="/pfp.png"
                alt="Vinit Kumar"
                width={96}
                height={96}
                priority
                className="size-full object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 py-0.5 rounded-md font-medium">
                  Available for Roles
                </span>
              </div>
              <p className="text-xs font-mono text-zinc-500">
                Pilani, Rajasthan, India
              </p>
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl sm:text-5xl font-bold text-zinc-100 tracking-tight font-editorial leading-tight">
              Hi, I&apos;m Vinit Kumar
              <span className="block text-lg sm:text-2xl text-zinc-400 font-sans font-normal mt-1 tracking-normal">
                Full-Stack Software Engineer &amp; Systems Builder
              </span>
            </h1>

            <div className="text-xs sm:text-sm font-mono text-zinc-500 flex flex-wrap items-center gap-2 pt-1.5">
              <span>MDU B.Tech CSE (2024 - 2028)</span>
              <span>&bull;</span>
              <a
                href="mailto:vinitk81144@gmail.com"
                className="text-zinc-300 hover:text-white hover:underline transition"
              >
                vinitk81144@gmail.com
              </a>
            </div>
          </div>

          <div className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light space-y-3">
            <p>
              I build web applications, workflow automation platforms, and
              distributed cloud systems with a focus on reliability,
              performance, and clean design.
            </p>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              Core technologies include{" "}
              <SkillBadge name="Go" href="https://go.dev" />,{" "}
              <SkillBadge
                name="TypeScript"
                href="https://www.typescriptlang.org"
              />
              , <SkillBadge name="Next.js" href="https://nextjs.org" />,{" "}
              <SkillBadge name="PostgreSQL" />,{" "}
              <SkillBadge name="Docker" href="https://www.docker.com" />, and{" "}
              <SkillBadge
                name="Cloudflare Workers"
                href="https://workers.cloudflare.com"
              />
              . Experienced in building DAG-based workflow engines,
              high-concurrency backends, and full-stack production platforms for
              commercial clients.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs font-mono transition flex items-center gap-2 shadow-sm"
            >
              <FileText className="size-3.5" />
              <span>Resume / CV</span>
              <ArrowUpRight className="size-3 text-zinc-600" />
            </a>
            <Link
              href="#contact"
              className="px-4 py-2.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 text-xs font-mono transition flex items-center gap-2"
            >
              <Send className="size-3.5 text-zinc-400" />
              <span>Get in touch</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs font-mono text-zinc-400 pt-1">
            <a
              href="https://x.com/vinitxcodes"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-200 transition flex items-center gap-1.5 group"
            >
              <span>X</span>
              <ArrowUpRight className="size-3 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
            </a>
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-200 transition flex items-center gap-1.5 group"
            >
              <Github className="size-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="size-3 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-200 transition flex items-center gap-1.5 group"
            >
              <Linkedin className="size-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="size-3 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
            </a>
            <a
              href={profileData.socials.email}
              className="hover:text-zinc-200 transition flex items-center gap-1.5 group"
            >
              <Mail className="size-3.5" />
              <span>Email</span>
              <ArrowUpRight className="size-3 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
            </a>
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <SectionHeading
            subHeading="Selected Work"
            heading="Featured Projects"
          />

          <div className="space-y-6">
            {projectsData.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-6">
          <SectionHeading
            subHeading="Background"
            heading="Experience &amp; Engagements"
          />

          <div className="space-y-4">
            {experienceData.map((item, idx) => (
              <ExperienceCard
                key={idx}
                experience={item}
                isCurrent={idx === 0}
              />
            ))}
          </div>
        </section>

        <section id="skills" className="space-y-6">
          <SectionHeading
            subHeading="Toolkit"
            heading="Skills &amp; Technologies"
          />

          <div className="clean-card p-6 rounded-2xl space-y-4 text-xs font-mono">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-zinc-800/60 gap-1">
              <span className="text-zinc-200 font-semibold w-44 shrink-0">
                Languages
              </span>
              <span className="text-zinc-400 flex-1">
                Go, TypeScript, JavaScript, Python, SQL
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-zinc-800/60 gap-1">
              <span className="text-zinc-200 font-semibold w-44 shrink-0">
                Web &amp; Frameworks
              </span>
              <span className="text-zinc-400 flex-1">
                Next.js 15, React, Node.js, Express, Hono.js, Tailwind CSS,
                ReactFlow, WebSockets
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-zinc-800/60 gap-1">
              <span className="text-zinc-200 font-semibold w-44 shrink-0">
                AI &amp; Systems
              </span>
              <span className="text-zinc-400 flex-1">
                LangGraph, RAG, AI Agents, LangChain, Workflow Engines
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-zinc-800/60 gap-1">
              <span className="text-zinc-200 font-semibold w-44 shrink-0">
                Databases &amp; Caching
              </span>
              <span className="text-zinc-400 flex-1">
                PostgreSQL, Redis, MongoDB, Prisma ORM, SQLC
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2 gap-1">
              <span className="text-zinc-200 font-semibold w-44 shrink-0">
                Cloud &amp; DevOps
              </span>
              <span className="text-zinc-400 flex-1">
                Cloudflare Workers &amp; Pages, Docker, AWS EC2, Linux, Systemd,
                Git, Neovim
              </span>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="space-y-6 pt-4 border-t border-zinc-800/80"
        >
          <SectionHeading
            subHeading="Get in Touch"
            heading="Let's Build Something Together"
          />

          <p className="text-sm text-zinc-300 leading-relaxed font-light">
            I am currently open to full-stack engineering, distributed systems,
            and backend infrastructure opportunities. If you have an exciting
            challenge or role, feel free to reach out.
          </p>

          <div className="clean-card p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
            <div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
                Direct Email
              </div>
              <div className="text-sm sm:text-base text-zinc-100 font-semibold mt-0.5">
                {profileData.email}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyEmail}
                className="px-3.5 py-2 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-medium transition flex items-center gap-1.5 shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="size-3.5 text-zinc-950" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5 text-zinc-950" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
              <a
                href={profileData.socials.email}
                className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 transition flex items-center gap-1.5"
              >
                <span>Send Mail</span>
                <ArrowUpRight className="size-3.5 text-zinc-400" />
              </a>
            </div>
          </div>
        </section>

        <footer className="pt-8 border-t border-zinc-800/80 text-xs font-mono text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            &copy; {new Date().getFullYear()} Vinit Kumar &bull; Pilani,
            Rajasthan
          </div>
          <div className="flex items-center gap-4 text-zinc-500">
            <Link
              href="#about"
              className="hover:text-zinc-200 flex items-center gap-1 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="size-3" />
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}
