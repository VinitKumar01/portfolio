"use client";

import React, { useState } from "react";
import { Project } from "@/types";
import SkillBadge from "../common/SkillBadge";
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Layers,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showArchitecture, setShowArchitecture] = useState(false);

  const cleanTitle = project.title
    .replace(/\s*—\s*/g, ": ")
    .replace(/\s*–\s*/g, ": ");

  return (
    <article className="clean-card p-6 rounded-2xl space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2.5 flex-wrap">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight font-editorial">
              {cleanTitle}
            </h3>
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-medium border ${
                project.type === "Client Project"
                  ? "bg-amber-950/30 text-amber-300 border-amber-600/40"
                  : "bg-zinc-800/90 text-zinc-300 border-zinc-700/60"
              }`}
            >
              {project.type}
            </span>
          </div>
          <p className="text-xs text-zinc-400 font-mono mt-1">
            {project.tagline.replace(/\s*—\s*/g, ": ")}
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono shrink-0">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-200 hover:text-white hover:underline flex items-center gap-1.5 font-medium transition-colors"
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

      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
        {project.summary}
      </p>

      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 pb-1">
          {project.metrics.map((m, mIdx) => (
            <div
              key={mIdx}
              className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/70 text-[11px] font-mono"
            >
              <div className="text-zinc-500 text-[10px] uppercase tracking-wider">
                {m.label}
              </div>
              <div className="text-zinc-200 font-semibold mt-0.5">
                {m.value}
              </div>
              {m.detail && (
                <div className="text-zinc-500 text-[10px] mt-0.5 truncate">
                  {m.detail}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="space-y-1.5">
        <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
          Stack &amp; Technologies
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech, idx) => (
            <SkillBadge key={idx} name={tech} />
          ))}
        </div>
      </div>

      {project.architectureDetails && (
        <div className="pt-1">
          <button
            onClick={() => setShowArchitecture(!showArchitecture)}
            className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition"
          >
            <Layers className="size-3.5" />
            <span>
              {showArchitecture
                ? "Hide Engineering Decisions"
                : "View Architecture & Engineering Decisions"}
            </span>
            {showArchitecture ? (
              <ChevronUp className="size-3" />
            ) : (
              <ChevronDown className="size-3" />
            )}
          </button>

          {showArchitecture && (
            <div className="mt-3 p-4 rounded-xl bg-zinc-950/90 border border-zinc-800 text-xs font-mono space-y-2.5 text-zinc-400 animate-in fade-in duration-200">
              <p className="text-zinc-300 font-sans leading-relaxed font-light">
                {project.architectureDetails.overview}
              </p>
              <div className="space-y-1.5 pt-1.5 border-t border-zinc-800/80">
                <div className="text-zinc-300 font-semibold text-[11px] uppercase tracking-wide">
                  Key Challenges Solved:
                </div>
                {project.architectureDetails.technicalChallenges.map(
                  (challenge, cIdx) => (
                    <p
                      key={cIdx}
                      className="text-zinc-400 font-sans flex items-start gap-2"
                    >
                      <span className="text-zinc-500 font-mono">&bull;</span>
                      <span>{challenge}</span>
                    </p>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-zinc-800/60 text-zinc-500">
        <div className="flex items-center gap-1.5 text-zinc-400">
          <span>{project.type}</span>
          <span>&bull;</span>
          <span>{project.links.live ? "Production" : "Full-Stack System"}</span>
        </div>
        <span>{project.period.replace(/\s*–\s*/g, " - ")}</span>
      </div>
    </article>
  );
}
