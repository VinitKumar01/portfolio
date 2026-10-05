import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
      <div className="size-14 rounded-2xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-center font-editorial text-2xl text-amber-400 shadow-sm">
        404
      </div>
      <h1 className="text-2xl font-bold font-editorial text-zinc-100">
        Page Not Found
      </h1>
      <p className="text-xs font-mono text-zinc-400 max-w-sm leading-relaxed">
        The requested page could not be found or has been relocated.
      </p>
      <Link
        href="/"
        className="px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs font-mono transition flex items-center gap-2 shadow-sm"
      >
        <ArrowLeft className="size-3.5" />
        <span>Return Home</span>
      </Link>
    </main>
  );
}
