"use client";

import { useEffect, useState } from "react";
import { HomepageMarket } from "@/types";

interface Props {
  markets: HomepageMarket[];
}

export default function FeaturedMarkets({ markets }: Props) {
  const [selectedMarket, setSelectedMarket] = useState<HomepageMarket | null>(
    null,
  );

  useEffect(() => {
    if (!selectedMarket) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMarket(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedMarket]);

  const totalReportsAcrossMarkets = markets.reduce(
    (acc, m) => acc + m.reports,
    0,
  );
  const totalBullishAcrossMarkets = markets.reduce(
    (acc, m) => acc + m.bullish,
    0,
  );
  const totalBearishAcrossMarkets = markets.reduce(
    (acc, m) => acc + m.bearish,
    0,
  );
  const netLean = totalBullishAcrossMarkets - totalBearishAcrossMarkets;

  // Build a real signal line from each market's bull/bear delta — not decorative filler.
  const points = markets.length
    ? markets.map((m, i) => {
        const total = m.bullish + m.bearish + m.neutral || 1;
        const delta = (m.bullish - m.bearish) / total; // -1..1
        const x = (i / Math.max(markets.length - 1, 1)) * 100;
        const y = 20 - delta * 16;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
    : ["0,50", "100,50"];
  const sparklinePath = `M${points.join(" L")}`;

  return (
    <section className="relative w-full overflow-hidden">
      <style>{`
        @keyframes ftm-ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .ftm-ticker-track {
          animation: ftm-ticker 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .ftm-ticker-track { animation: none; }
        }
      `}</style>

      {/* Signature: data-driven ticker tape built from the actual market list */}
      <div className="mb-4 overflow-hidden rounded-lg border border-black/5 bg-neutral-950 dark:border-white/10">
        <div className="flex whitespace-nowrap py-2 ftm-ticker-track">
          {[...markets, ...markets].map((m, i) => {
            const up = m.bullish >= m.bearish;
            return (
              <span
                key={`${m.market}-${i}`}
                className="mx-4 inline-flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-wide"
              >
                <span className="text-neutral-500">{m.market}</span>
                <span className={up ? "text-emerald-400" : "text-rose-400"}>
                  {up ? "▲" : "▼"} {m.confidence}%
                </span>
              </span>
            );
          })}
        </div>
      </div>

      {/* TOP: Signal strip — horizontal, full width. Sparkline runs wide, stats sit beside it. */}
      <div className="relative flex flex-col gap-4 overflow-hidden rounded-xl border border-black/5 bg-white/40 p-5 backdrop-blur-md dark:border-white/5 dark:bg-neutral-900/20 text-neutral-900 dark:text-neutral-100 shadow-xs sm:flex-row sm:items-center sm:gap-6">
        <div className="shrink-0 sm:w-56">
          <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            Live sentiment feed
          </div>
          <h2 className="text-xl font-black uppercase tracking-tight sm:text-2xl">
            Market Pulse
          </h2>
          <p className="mt-2 text-xs font-medium leading-relaxed text-neutral-500 dark:text-neutral-400">
            {markets.length} tracked{" "}
            {markets.length === 1 ? "market" : "markets"},{" "}
            {totalReportsAcrossMarkets} reports parsed.
          </p>
        </div>

        {/* Sparkline: literally plots bull/bear delta per market, left to right */}
        <div className="min-w-0 flex-1 sm:border-l sm:border-black/5 sm:pl-6 sm:dark:border-white/5">
          <svg
            viewBox="0 0 100 40"
            className="h-14 w-full"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="20"
              x2="100"
              y2="20"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-neutral-300 dark:text-neutral-700"
              strokeDasharray="2,2"
            />
            <path
              d={sparklinePath}
              fill="none"
              stroke={netLean >= 0 ? "#10b981" : "#f43f5e"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex shrink-0 gap-2 font-mono sm:border-l sm:border-black/5 sm:pl-6 sm:dark:border-white/5">
          <div className="rounded-lg border border-black/5 bg-black/[0.02] px-3 py-2 text-center dark:border-white/5 dark:bg-white/[0.01]">
            <div className="text-[9px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Net Longs
            </div>
            <div className="mt-0.5 text-sm font-black text-emerald-600 dark:text-emerald-400">
              {totalBullishAcrossMarkets}
            </div>
          </div>
          <div className="rounded-lg border border-black/5 bg-black/[0.02] px-3 py-2 text-center dark:border-white/5 dark:bg-white/[0.01]">
            <div className="text-[9px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Net Shorts
            </div>
            <div className="mt-0.5 text-sm font-black text-rose-600 dark:text-rose-400">
              {totalBearishAcrossMarkets}
            </div>
          </div>
        </div>
      </div>

      {/* BELOW: Market cards — full width, border tint reflects real sentiment lean */}
      <div className="mt-6">
        <div
          className={`grid gap-4 w-full ${
            markets.length === 1
              ? "grid-cols-1"
              : markets.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
          }`}
        >
          {markets.map((market, k) => {
            const totalBiases =
              market.bullish + market.bearish + market.neutral || 1;
            const bullPct = Math.round((market.bullish / totalBiases) * 100);
            const bearPct = Math.round((market.bearish / totalBiases) * 100);
            const neutPct = 100 - bullPct - bearPct;
            const lean =
              market.bullish > market.bearish
                ? "bull"
                : market.bearish > market.bullish
                  ? "bear"
                  : "flat";

            const leanBorder =
              lean === "bull"
                ? "border-emerald-500/20 dark:border-emerald-400/20"
                : lean === "bear"
                  ? "border-rose-500/20 dark:border-rose-400/20"
                  : "border-black/5 dark:border-white/5";

            return (
              <div
                key={`${market.market}-${k}`}
                className={`relative flex flex-col justify-between overflow-hidden rounded-xl border ${leanBorder} bg-white/60 p-5 backdrop-blur-md dark:bg-neutral-900/30 group hover:bg-white/80 dark:hover:bg-neutral-900/50 transition-colors duration-300 shadow-xs`}
              >
                <div>
                  <div className="flex items-baseline justify-between border-b border-black/5 pb-2.5 dark:border-white/5">
                    <h3 className="text-base font-black font-mono tracking-tight text-neutral-900 dark:text-white uppercase">
                      {market.market}
                    </h3>
                    <span className="text-[9px] font-mono font-bold bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded-xs text-neutral-500 dark:text-neutral-400">
                      {market.reports} {market.reports === 1 ? "LOG" : "LOGS"}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-wider text-neutral-400 dark:text-neutral-500 uppercase">
                      Confidence
                    </span>
                    <span className="text-lg font-black font-mono text-amber-600 dark:text-amber-400">
                      {market.confidence}%
                    </span>
                  </div>

                  <div className="mt-2.5">
                    <div className="h-1.5 w-full rounded-full bg-black/5 dark:bg-white/5 overflow-hidden flex">
                      <div
                        className="h-full bg-emerald-500"
                        style={{ width: `${bullPct}%` }}
                        title={`Bullish: ${bullPct}%`}
                      />
                      <div
                        className="h-full bg-neutral-300 dark:bg-neutral-700"
                        style={{ width: `${neutPct}%` }}
                        title={`Neutral: ${neutPct}%`}
                      />
                      <div
                        className="h-full bg-rose-500"
                        style={{ width: `${bearPct}%` }}
                        title={`Bearish: ${bearPct}%`}
                      />
                    </div>
                  </div>

                  <div className="mt-4 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="flex items-center gap-1.5 font-medium text-neutral-500 dark:text-neutral-400">
                        <span className="h-1 w-1 rounded-full bg-emerald-500" />{" "}
                        Bulls
                      </span>
                      <span className="font-mono font-bold text-neutral-800 dark:text-neutral-200">
                        {market.bullish}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="flex items-center gap-1.5 font-medium text-neutral-500 dark:text-neutral-400">
                        <span className="h-1 w-1 rounded-full bg-neutral-400 dark:bg-neutral-600" />{" "}
                        Flats
                      </span>
                      <span className="font-mono font-bold text-neutral-800 dark:text-neutral-200">
                        {market.neutral}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="flex items-center gap-1.5 font-medium text-neutral-500 dark:text-neutral-400">
                        <span className="h-1 w-1 rounded-full bg-rose-500" />{" "}
                        Bears
                      </span>
                      <span className="font-mono font-bold text-neutral-800 dark:text-neutral-200">
                        {market.bearish}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-2.5 border-t border-black/5 dark:border-white/5 flex items-center justify-between font-mono text-[9px] text-neutral-400 dark:text-neutral-500 uppercase">
                  <span>NODE_FEED_ACT</span>
                  <button
                    type="button"
                    onClick={() => setSelectedMarket(market)}
                    className="text-amber-600 dark:text-amber-400 font-bold opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-200 cursor-pointer"
                  >
                    Inspect →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Inspect panel: opens in place, shows full detail for the selected market */}
      {selectedMarket &&
        (() => {
          const totalBiases =
            selectedMarket.bullish +
              selectedMarket.bearish +
              selectedMarket.neutral || 1;
          const bullPct = Math.round(
            (selectedMarket.bullish / totalBiases) * 100,
          );
          const bearPct = Math.round(
            (selectedMarket.bearish / totalBiases) * 100,
          );
          const neutPct = 100 - bullPct - bearPct;
          const lean =
            selectedMarket.bullish > selectedMarket.bearish
              ? "bull"
              : selectedMarket.bearish > selectedMarket.bullish
                ? "bear"
                : "flat";

          return (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              role="dialog"
              aria-modal="true"
              aria-labelledby="inspect-panel-title"
            >
              <div
                className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm"
                onClick={() => setSelectedMarket(null)}
              />
              <div className="relative w-full max-w-md rounded-xl border border-black/10 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-neutral-900">
                <div className="flex items-start justify-between border-b border-black/5 pb-4 dark:border-white/5">
                  <div>
                    <div className="mb-1 flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      Market Detail
                    </div>
                    <h3
                      id="inspect-panel-title"
                      className="text-xl font-black font-mono uppercase tracking-tight text-neutral-900 dark:text-white"
                    >
                      {selectedMarket.market}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedMarket(null)}
                    aria-label="Close"
                    className="rounded-md p-1 text-neutral-400 hover:bg-black/5 hover:text-neutral-700 dark:hover:bg-white/5 dark:hover:text-neutral-200 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-mono tracking-wider text-neutral-400 dark:text-neutral-500 uppercase">
                    Confidence
                  </span>
                  <span className="text-2xl font-black font-mono text-amber-600 dark:text-amber-400">
                    {selectedMarket.confidence}%
                  </span>
                </div>

                <div className="mt-3">
                  <div className="h-2 w-full rounded-full bg-black/5 dark:bg-white/5 overflow-hidden flex">
                    <div
                      className="h-full bg-emerald-500"
                      style={{ width: `${bullPct}%` }}
                    />
                    <div
                      className="h-full bg-neutral-300 dark:bg-neutral-700"
                      style={{ width: `${neutPct}%` }}
                    />
                    <div
                      className="h-full bg-rose-500"
                      style={{ width: `${bearPct}%` }}
                    />
                  </div>
                  <div className="mt-1.5 flex justify-between text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
                    <span>{bullPct}% bull</span>
                    <span>{neutPct}% flat</span>
                    <span>{bearPct}% bear</span>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2 font-mono">
                  <div className="rounded-lg border border-black/5 bg-black/[0.02] p-2.5 text-center dark:border-white/5 dark:bg-white/[0.01]">
                    <div className="text-[9px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                      Bulls
                    </div>
                    <div className="mt-0.5 text-sm font-black text-emerald-600 dark:text-emerald-400">
                      {selectedMarket.bullish}
                    </div>
                  </div>
                  <div className="rounded-lg border border-black/5 bg-black/[0.02] p-2.5 text-center dark:border-white/5 dark:bg-white/[0.01]">
                    <div className="text-[9px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                      Flats
                    </div>
                    <div className="mt-0.5 text-sm font-black text-neutral-700 dark:text-neutral-300">
                      {selectedMarket.neutral}
                    </div>
                  </div>
                  <div className="rounded-lg border border-black/5 bg-black/[0.02] p-2.5 text-center dark:border-white/5 dark:bg-white/[0.01]">
                    <div className="text-[9px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                      Bears
                    </div>
                    <div className="mt-0.5 text-sm font-black text-rose-600 dark:text-rose-400">
                      {selectedMarket.bearish}
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4 dark:border-white/5 font-mono text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                  <span>
                    {selectedMarket.reports}{" "}
                    {selectedMarket.reports === 1 ? "report" : "reports"} parsed
                  </span>
                  <span
                    className={
                      lean === "bull"
                        ? "text-emerald-600 dark:text-emerald-400 font-bold"
                        : lean === "bear"
                          ? "text-rose-600 dark:text-rose-400 font-bold"
                          : "text-neutral-500 font-bold"
                    }
                  >
                    {lean === "bull"
                      ? "Leaning bullish"
                      : lean === "bear"
                        ? "Leaning bearish"
                        : "Split"}
                  </span>
                </div>
              </div>
            </div>
          );
        })()}
    </section>
  );
}
