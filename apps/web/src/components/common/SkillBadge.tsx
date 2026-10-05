import React from "react";

interface SkillBadgeProps {
  name: string;
  href?: string;
  children?: React.ReactNode;
}

export default function SkillBadge({ name, href, children }: SkillBadgeProps) {
  const content = (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-zinc-100 border border-zinc-800 hover:border-zinc-700 text-xs font-mono transition-all duration-150 shadow-sm group">
      {children && (
        <span className="size-3.5 shrink-0 opacity-70 group-hover:opacity-100">
          {children}
        </span>
      )}
      <span className="font-medium text-[11px]">{name}</span>
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-block transition-transform hover:-translate-y-0.5"
      >
        {content}
      </a>
    );
  }

  return content;
}
