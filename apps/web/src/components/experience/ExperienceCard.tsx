import React from "react";
import { ExperienceItem } from "@/types";
import SkillBadge from "../common/SkillBadge";

interface ExperienceCardProps {
  experience: ExperienceItem;
  isCurrent?: boolean;
}

export default function ExperienceCard({
  experience,
  isCurrent,
}: ExperienceCardProps) {
  const cleanTitle = experience.title
    .replace(/\s*—\s*/g, ": ")
    .replace(/\s*–\s*/g, ": ");
  const cleanPeriod = experience.period.replace(/\s*–\s*/g, " - ");

  return (
    <div className="clean-card p-5 sm:p-6 rounded-2xl space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        <div className="flex items-start gap-3.5">
          <div className="size-11 rounded-xl bg-zinc-800/90 border border-zinc-700/70 flex items-center justify-center font-bold text-zinc-200 font-mono text-sm shrink-0 shadow-sm">
            {experience.organization.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base sm:text-lg font-bold text-zinc-100 tracking-tight font-editorial">
                {experience.organization}
              </h3>
              {isCurrent && (
                <span className="text-[10px] font-mono text-zinc-300 bg-zinc-800/90 border border-zinc-700/60 px-2 py-0.5 rounded-md">
                  Active
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-0.5">
              {cleanTitle}
            </p>
          </div>
        </div>

        <div className="text-xs font-mono text-zinc-500 sm:text-right">
          <p>{cleanPeriod}</p>
          <p>{experience.location}</p>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
        {experience.summary}
      </p>

      <div className="space-y-1.5">
        <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
          Technologies &amp; Systems
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {experience.tags.map((tag, idx) => (
            <SkillBadge key={idx} name={tag} />
          ))}
        </div>
      </div>

      <div className="space-y-1.5 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/60 pt-3">
        {experience.bullets.map((bullet, idx) => (
          <p key={idx} className="flex items-start gap-2">
            <span className="text-zinc-500 font-mono mt-0.5">&bull;</span>
            <span>{bullet.replace(/\s*—\s*/g, ": ")}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
