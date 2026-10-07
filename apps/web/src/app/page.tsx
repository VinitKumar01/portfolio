"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
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

const smoothEase = [0.22, 1, 0.36, 1] as const;

const heroVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

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

      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-orange-500/15 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-indigo-500/15 blur-[120px]" />
      </div>

      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] sm:w-auto">
        <nav className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6 px-6 py-3 rounded-full backdrop-blur-xl bg-[#121214]/60 border border-zinc-700/50 shadow-2xl text-[13px] font-medium text-zinc-400 max-w-full overflow-x-auto no-scrollbar">
          <Link
            href="#about"
            className="hover:text-zinc-100 transition whitespace-nowrap"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-zinc-100 transition whitespace-nowrap"
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="hover:text-zinc-100 transition whitespace-nowrap"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="hover:text-zinc-100 transition whitespace-nowrap"
          >
            Contact
          </Link>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-20 md:space-y-24">
        <motion.section
          id="about"
          className="space-y-10"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={heroItemVariants}
            className="flex items-center gap-6"
          >
            <div className="relative size-24 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 shrink-0">
              <Image
                src="/pfp.png"
                alt="Vinit Kumar"
                width={96}
                height={96}
                priority
                className="size-full object-cover scale-105 hover:scale-110 transition duration-500"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-zinc-900/50 border border-zinc-800/80 rounded-full shadow-sm">
                <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono text-zinc-300 font-medium">
                  Available for Roles
                </span>
              </div>
              <p className="text-sm font-mono text-zinc-500 pl-1">
                Pilani, Rajasthan, India
              </p>
            </div>
          </motion.div>

          <motion.div variants={heroItemVariants} className="space-y-5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 tracking-tight font-editorial leading-[1.1]">
              I&apos;m Vinit Kumar
              <span className="block text-xl md:text-3xl text-zinc-400 font-sans font-normal mt-3 tracking-normal">
                Full-Stack Software Engineer
              </span>
            </h1>

            <div className="text-sm font-mono text-zinc-500 flex flex-wrap items-center gap-3 pl-1">
              <span>B.Tech CSE (2024 - 2028)</span>
              <span>&bull;</span>
              <a
                href="mailto:vinitk81144@gmail.com"
                className="text-zinc-300 hover:text-white hover:underline transition"
              >
                vinitk81144@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={heroItemVariants}
            className="text-zinc-300 text-lg md:text-xl leading-relaxed font-light space-y-5 max-w-2xl pt-2"
          >
            <p>
              I build web applications, workflow automation platforms, and
              modern cloud platforms with a focus on reliability, performance,
              and clean design.
            </p>
            <p className="text-base text-zinc-400 leading-relaxed font-normal">
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
              . Experienced in building high-concurrency backends, and
              full-stack production platforms for commercial clients.
            </p>
          </motion.div>

          <motion.div
            variants={heroItemVariants}
            className="flex flex-wrap items-center gap-5 pt-4"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-sm transition flex items-center gap-2 shadow-sm"
            >
              <FileText className="size-4" />
              <span>Resume / CV</span>
              <ArrowUpRight className="size-3.5 text-zinc-600" />
            </a>
            <Link
              href="#contact"
              className="px-6 py-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 text-sm font-semibold transition flex items-center gap-2"
            >
              <Send className="size-4 text-zinc-400" />
              <span>Get in touch</span>
            </Link>
          </motion.div>

          <motion.div
            variants={heroItemVariants}
            className="flex flex-wrap items-center gap-8 text-sm font-mono text-zinc-400 pt-6 border-t border-zinc-800/40"
          >
            <a
              href="https://x.com/vinitxcodes"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-200 transition flex items-center gap-2 group"
            >
              <span>X</span>
              <ArrowUpRight className="size-3.5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
            </a>
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-200 transition flex items-center gap-2 group"
            >
              <Github className="size-4" />
              <span>GitHub</span>
              <ArrowUpRight className="size-3.5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-200 transition flex items-center gap-2 group"
            >
              <Linkedin className="size-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="size-3.5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
            </a>
            <a
              href={profileData.socials.email}
              className="hover:text-zinc-200 transition flex items-center gap-2 group"
            >
              <Mail className="size-4" />
              <span>Email</span>
              <ArrowUpRight className="size-3.5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
            </a>
          </motion.div>
        </motion.section>

        <motion.section
          id="projects"
          className="space-y-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeading
            subHeading="Selected Work"
            heading="Featured Projects"
          />
          <div className="grid grid-cols-1 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="space-y-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeading subHeading="Background" heading="Experience" />
          <div className="space-y-8">
            {experienceData.map((item, idx) => (
              <ExperienceCard
                key={idx}
                experience={item}
                isCurrent={idx === 0}
              />
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="space-y-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeading
            subHeading="Toolkit"
            heading="Skills &amp; Technologies"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="clean-card p-7 rounded-2xl space-y-3">
              <h3 className="text-zinc-100 font-medium">Languages</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Go, TypeScript, JavaScript, Python, SQL
              </p>
            </div>
            <div className="clean-card p-7 rounded-2xl space-y-3">
              <h3 className="text-zinc-100 font-medium">Web & Frameworks</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Next.js, React, Node.js, Express, Tailwind CSS
              </p>
            </div>
            <div className="clean-card p-7 rounded-2xl space-y-3">
              <h3 className="text-zinc-100 font-medium">Databases</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                PostgreSQL, Redis, MongoDB, Prisma ORM
              </p>
            </div>
            <div className="clean-card p-7 rounded-2xl space-y-3">
              <h3 className="text-zinc-100 font-medium">Cloud & DevOps</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Cloudflare Workers, Docker, AWS EC2, Linux
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="space-y-10 pt-10 border-t border-zinc-800/50"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionHeading
            subHeading="Get in Touch"
            heading="Let's Build Something"
          />

          <p className="text-lg text-zinc-300 leading-relaxed font-light max-w-xl">
            I am open to full-stack engineering, web platform development, and
            backend infrastructure opportunities. Let&apos;s chat.
          </p>

          <div className="clean-card p-8 md:p-10 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div className="space-y-1.5">
              <div className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                Direct Email
              </div>
              <div className="text-lg md:text-xl text-zinc-100 font-medium">
                {profileData.email}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={copyEmail}
                className="px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium transition flex items-center gap-2 shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="size-4 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-4 text-zinc-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <a
                href={profileData.socials.email}
                className="px-5 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-medium transition flex items-center gap-2"
              >
                <span>Send Mail</span>
                <ArrowUpRight className="size-4 text-zinc-600" />
              </a>
            </div>
          </div>
        </motion.section>

        <footer className="pt-10 pb-6 text-sm font-mono text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-zinc-800/50">
          <div>
            &copy; {new Date().getFullYear()} Vinit Kumar &bull; Pilani,
            Rajasthan
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="#about"
              className="hover:text-zinc-200 flex items-center gap-1.5 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="size-3.5" />
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}
