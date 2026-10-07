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
    <div className="flex flex-col gap-2 border-b border-zinc-800/50 pb-5">
      {subHeading && (
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-semibold">
          {subHeading}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight font-editorial leading-none">
        {heading}
      </h2>
    </div>
  );
}
