import Link from "next/link";

export default function Hero() {
  const targetProducts = ["PRO POS", "Mobile POS", "Kitchen KDS", "Kiosk"];

  return (
    <section className="relative pt-20 pb-16 text-center overflow-hidden">
      {/* Subtle Asset Class Badge Strip */}
      <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-black/5 bg-black/[0.02] px-3.5 py-1.5 text-[11px] font-bold tracking-widest uppercase text-neutral-500 dark:border-white/5 dark:bg-white/[0.02] dark:text-neutral-400 backdrop-blur-xs shadow-xs animate-fade-in">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Systems:
        <div className="flex gap-1.5 ml-1 font-mono text-neutral-800 dark:text-neutral-200">
          {targetProducts.map((market, idx) => (
            <span key={market}>
              {market}
              {idx < targetProducts.length - 1 && (
                <span className="text-neutral-300 dark:text-neutral-700 ml-1.5">
                  / /
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Main Title Header Layout */}
      <h1 className="mx-auto max-w-4xl text-5xl font-black tracking-tight sm:text-7xl leading-[1.1] text-neutral-950 dark:text-white">
        Business POS Systems
      </h1>

      {/* Dynamic Descriptive Deck */}
      <p className="mt-8 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed font-medium text-neutral-500 dark:text-neutral-400">
        text here
      </p>

      {/* Futuristic Interactive CTA Group */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Primary Premium Launch Button */}
        <Link
          href="/download"
          className="group relative w-full sm:w-auto rounded-full bg-neutral-950 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-black/10 dark:bg-white dark:text-neutral-950 dark:shadow-white/5 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all transform hover:scale-[1.02] cursor-pointer"
        >
          <span className="flex items-center justify-center gap-2">
            Download POS Software
            <svg
              className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </Link>

        {/* Secondary Glassmorphic Document Button */}
        <Link
          href="/pos-features"
          className="w-full sm:w-auto rounded-full border border-black/10 bg-black/[0.01] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-800 hover:bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.01] dark:text-neutral-200 dark:hover:bg-white/[0.03] transition-all text-center cursor-pointer"
        >
          Explore Features
        </Link>
      </div>

      {/* Structural Data Stream Footer Element */}
      <div className="mt-16 mx-auto flex max-w-md items-center justify-center gap-8 rounded-xl border border-black/5 bg-linear-to-b from-black/[0.01] to-black/[0.03] px-6 py-3 text-[10px] font-mono tracking-wide text-neutral-400 dark:border-white/5 dark:from-white/[0.005] dark:to-white/[0.015] dark:text-neutral-500">
        <div className="h-6 w-px bg-black/5 dark:bg-white/10" />
        <div className="flex flex-col items-center">
          <span className="font-bold text-neutral-800 dark:text-neutral-200 text-xs">
            &lt; Instant
          </span>
          <span>SYSTEM LATENCY</span>
        </div>
        <div className="h-6 w-px bg-black/5 dark:bg-white/10" />
        <div className="flex flex-col items-center">
          <span className="font-bold text-neutral-800 dark:text-neutral-200 text-xs">
            24/7/365
          </span>
          <span>WORKING OFFLINE</span>
        </div>
      </div>
    </section>
  );
}
