"use client";

import React from "react";
import Link from "next/link";

export default function CTASection() {
  const premiumFeatures = ["something here"];

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-12 text-center shadow-2xl">
        {/* Subtle Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-indigo-500/10 blur-[80px] pointer-events-none" />

        {/* Mini Product Tag */}
        <div className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/[0.08] px-3 py-1 rounded-full border border-indigo-500/20 mb-4">
          <span className="h-1 w-1 rounded-full bg-indigo-400 animate-pulse" />
          Ebmbook Upgrade
        </div>

        {/* Premium Title */}
        <h2 className="text-3xl md:text-4xl font-black font-sans uppercase tracking-tight text-white mb-4">
          Unlock Ebmbook Pro
        </h2>

        {/* Clean Description */}
        <p className="text-sm text-neutral-400 font-sans leading-relaxed max-w-2xl mx-auto mb-8">
          contents here
        </p>

        {/* Scannable Micro Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 max-w-3xl mx-auto mb-10 font-mono text-[11px] text-neutral-300">
          {premiumFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-1.5 bg-white/[0.02] border border-white/[0.05] py-2 px-3 rounded-lg text-center"
            >
              <span className="text-indigo-400 font-bold">/</span>
              {feature}
            </div>
          ))}
        </div>

        {/* Premium CTA Button Action */}
        <div className="flex flex-col items-center justify-center">
          <Link
            href="/pricing"
            className="group/btn inline-flex items-center gap-3 bg-white hover:bg-neutral-100 text-neutral-950 px-8 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-white/5"
          >
            Explore Access Plans
            <svg
              className="h-3 w-3 transition-transform duration-300 transform group-hover/btn:translate-x-1 text-neutral-950"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>

          <span className="mt-3 font-mono text-[9px] text-neutral-500 uppercase tracking-wider">
            Upgrade or Terminate Account at Anytime
          </span>
        </div>
      </div>
    </section>
  );
}
