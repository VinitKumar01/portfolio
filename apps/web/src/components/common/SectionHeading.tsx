import React from "react";

interface SectionHeadingProps {
  subHeading?: string;
  heading: string;
}

export default function SectionHeading({
  subHeading,
  heading,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-1 border-b border-zinc-800/80 pb-3">
      {subHeading && (
        <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-medium">
          {subHeading}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-100 tracking-tight font-editorial">
        {heading}
      </h2>
    </div>
  );
}
