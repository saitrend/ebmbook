import Hero from "@/components/home/Hero";
import FeaturedMarkets from "@/components/home/FeaturedMarkets";
import CTASection from "@/components/home/CTASection";

export default async function HomePage() {
  // --- AMPLIFIED GRADIENT FLOW RUNTIME ---
  return (
    <main className="w-full bg-neutral-50 dark:bg-neutral-950 transition-colors duration-500 overflow-hidden">
      {/* ZONE 01: HERO MODULE (Clean, Base Canvas Background) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 pt-8 pb-24">
        <Hero />
      </div>

      {/* MARKETS (Amplified Vivid Orangish Flow) */}
      <section className="relative w-full px-4 sm:px-8 bg-gradient-to-l from-orange-500/10 via-amber-500/[0.02] to-transparent dark:from-orange-950/30 dark:via-amber-950/10">
        {/* Neon Core Light Orb */}
        <div className="absolute top-12 right-0 h-[500px] w-[500px] rounded-full bg-orange-400/20 dark:bg-orange-500/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          featured items here
        </div>
      </section>

      {/* PRODUCTS (Amplified Vivid Blueish Flow) */}
      <section className="relative w-full py-28 px-4 sm:px-8 border-y border-black/5 bg-gradient-to-r from-blue-500/10 via-indigo-500/[0.02] to-transparent dark:border-white/5 dark:from-blue-950/40 dark:via-indigo-950/10">
        {/* Neon Core Light Orb */}
        <div className="absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-blue-400/20 dark:bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          products list here
        </div>
      </section>

      <section className="relative w-full py-28 px-4 sm:px-8 border-y border-black/5 bg-gradient-to-r from-blue-500/10 via-indigo-500/[0.02] to-transparent dark:border-white/5 dark:from-blue-950/40 dark:via-indigo-950/10">
        {/* Neon Core Light Orb */}
        <div className="absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-blue-400/20 dark:bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          business insights news here
        </div>
      </section>

      {/* SIGNALS (Amplified Vivid Greenish Flow) */}
      <section className="relative w-full py-28 px-4 sm:px-8 border-y border-black/5 bg-gradient-to-r from-emerald-500/10 via-emerald-500/[0.02] to-transparent dark:border-white/5 dark:from-emerald-950/40 dark:via-emerald-950/10">
        {/* Neon Core Light Orb */}
        <div className="absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full bg-emerald-400/20 dark:bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          version releases here
        </div>
      </section>

      {/* ZONE 06: CTA ACCELERATOR (Deep Purple Landing Finish) */}
      <section className="relative w-full py-32 px-4 sm:px-8 border-t border-black/5 bg-gradient-to-b from-transparent to-purple-500/10 dark:border-white/5 dark:to-purple-950/30 bg-neutral-100/50 dark:bg-neutral-900/20">
        <div className="mx-auto max-w-7xl relative z-10">
          <CTASection />
        </div>
      </section>
    </main>
  );
}
