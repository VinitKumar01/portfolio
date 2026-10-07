import React from "react";

interface SkillBadgeProps {
  name: string;
  href?: string;
  children?: React.ReactNode;
}

export default function SkillBadge({ name, href, children }: SkillBadgeProps) {
  const content = (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900/40 hover:bg-zinc-800/80 text-zinc-300 hover:text-white border border-zinc-700/50 hover:border-zinc-600 transition-all duration-200 shadow-sm group">
      {children && (
        <span className="size-3.5 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
          {children}
        </span>
      )}
      <span className="font-mono text-[11px] font-medium tracking-wide">
        {name}
      </span>
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-block transition-transform duration-200 hover:-translate-y-0.5"
      >
        {content}
      </a>
    );
  }

  return content;
}
