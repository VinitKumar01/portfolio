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
    <div className="clean-card p-6 sm:p-8 rounded-3xl space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="size-12 rounded-2xl bg-[#040405] border border-zinc-700/50 flex items-center justify-center font-bold text-zinc-200 font-mono text-base shrink-0 shadow-sm mt-0.5">
            {experience.organization.substring(0, 2).toUpperCase()}
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h3 className="text-lg sm:text-xl font-bold text-zinc-100 tracking-tight font-editorial">
                {experience.organization}
              </h3>
              {isCurrent && (
                <span className="text-[10px] font-mono text-zinc-300 bg-zinc-800/90 border border-zinc-700/60 px-2.5 py-1 rounded-md uppercase tracking-wider font-semibold">
                  Active
                </span>
              )}
            </div>
            <p className="text-sm sm:text-base text-zinc-400 font-mono">
              {cleanTitle}
            </p>
          </div>
        </div>

        <div className="text-xs font-mono text-zinc-500 sm:text-right space-y-1">
          <p className="text-zinc-400">{cleanPeriod}</p>
          <p>{experience.location}</p>
        </div>
      </div>

      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light pt-2">
        {experience.summary}
      </p>

      <div className="space-y-2.5 pt-1">
        <h4 className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 font-semibold">
          Technologies &amp; Systems
        </h4>
        <div className="flex flex-wrap gap-2">
          {experience.tags.map((tag, idx) => (
            <SkillBadge key={idx} name={tag} />
          ))}
        </div>
      </div>

      <div className="space-y-2.5 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-5 mt-2">
        {experience.bullets.map((bullet, idx) => (
          <p key={idx} className="flex items-start gap-3">
            <span className="text-zinc-600 font-mono mt-0.5">&bull;</span>
            <span className="font-light">
              {bullet.replace(/\s*—\s*/g, ": ")}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
