"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import SkillBadge from "../common/SkillBadge";
import { ExternalLink, Github, ChevronDown, Layers } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showArchitecture, setShowArchitecture] = useState(false);

  const cleanTitle = project.title
    .replace(/\s*—\s*/g, ": ")
    .replace(/\s*–\s*/g, ": ");

  return (
    <article className="clean-card p-7 sm:p-8 rounded-3xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight font-editorial">
              {cleanTitle}
            </h3>
            <span
              className={`text-[10px] font-mono px-2.5 py-1 rounded-md font-semibold border tracking-wide uppercase ${
                project.type === "Client Project"
                  ? "bg-amber-950/30 text-amber-300 border-amber-600/40"
                  : "bg-zinc-800/90 text-zinc-300 border-zinc-700/60"
              }`}
            >
              {project.type}
            </span>
          </div>
          <p className="text-sm text-zinc-400 font-mono">
            {project.tagline.replace(/\s*—\s*/g, ": ")}
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono shrink-0">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-200 hover:text-white flex items-center gap-1.5 font-medium transition-colors"
            >
              <span>Live App</span>
              <ExternalLink className="size-3.5 text-zinc-400" />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-zinc-200 flex items-center gap-1.5 font-medium transition-colors"
            >
              <Github className="size-3.5" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>

      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
        {project.summary}
      </p>

      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {project.metrics.map((m, mIdx) => (
            <div
              key={mIdx}
              className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/70 text-xs font-mono"
            >
              <div className="text-zinc-500 text-[10px] uppercase tracking-wider font-semibold">
                {m.label}
              </div>
              <div className="text-zinc-100 font-medium mt-1">{m.value}</div>
              {m.detail && (
                <div className="text-zinc-500 text-[11px] mt-1 truncate">
                  {m.detail}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="space-y-2.5">
        <h4 className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 font-semibold">
          Stack &amp; Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <SkillBadge key={idx} name={tech} />
          ))}
        </div>
      </div>

      {project.architectureDetails && (
        <div className="pt-2">
          <button
            onClick={() => setShowArchitecture(!showArchitecture)}
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors py-1 group"
          >
            <Layers className="size-4" />
            <span className="font-medium">
              {showArchitecture
                ? "Hide Engineering Decisions"
                : "View Architecture & Engineering Decisions"}
            </span>
            <motion.div
              animate={{ rotate: showArchitecture ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <ChevronDown className="size-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {showArchitecture && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="overflow-hidden"
              >
                <div className="mt-4 p-5 rounded-2xl bg-[#040405]/80 border border-zinc-800/60 text-sm font-mono space-y-4 text-zinc-400">
                  <p className="text-zinc-300 font-sans leading-relaxed font-light">
                    {project.architectureDetails.overview}
                  </p>
                  <div className="space-y-2 pt-3 border-t border-zinc-800/60">
                    <div className="text-zinc-300 font-semibold text-[11px] uppercase tracking-widest">
                      Key Challenges Solved:
                    </div>
                    {project.architectureDetails.technicalChallenges.map(
                      (challenge, cIdx) => (
                        <p
                          key={cIdx}
                          className="text-zinc-400 font-sans flex items-start gap-2.5 leading-relaxed"
                        >
                          <span className="text-zinc-500 font-mono mt-0.5">
                            &bull;
                          </span>
                          <span>{challenge}</span>
                        </p>
                      ),
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      <div className="flex items-center justify-between text-xs font-mono pt-5 border-t border-zinc-800/50 text-zinc-500 mt-2">
        <div className="flex items-center gap-2 text-zinc-400">
          <span className="uppercase tracking-wide">{project.type}</span>
          <span>&bull;</span>
          <span>{project.links.live ? "Production" : "Full-Stack System"}</span>
        </div>
        <span>{project.period.replace(/\s*–\s*/g, " - ")}</span>
      </div>
    </article>
  );
}
