"use client";

import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Native highly optimized Lucide component structures
import { Sun, Moon, ChevronDown, Menu, X, Download, User } from "lucide-react";

interface HeaderProps {}
// 1. Create a simple external store listener for the DOM dark class
const subscribe = (callback: () => void) => {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
};

const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => true; // Match your layout server-default (Dark mode fallback)

export default function Header({}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // 2. Safely read and track dark mode directly from the browser document
  const isDarkMode = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  // 3. Simple toggle function that modifies the DOM directly
  const handleThemeToggle = () => {
    const root = window.document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  // Close popup menu dropdown frame if clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Primary row navigation tabs
  const primaryLinks = [
    { href: "/market-insights", label: "Insights" },
    { href: "/strategies", label: "Strategies" },
    { href: "/ai", label: "AI" },
    { href: "/signals", label: "Signals" },
  ];

  // Extended operations hidden within the dropdown menu popup
  const secondaryLinks = [
    { href: "/simulation", label: "Simulations" },
    { href: "/backtesting", label: "Backtesting Engine" },
    { href: "/brokers", label: "Brokers Matrix" },
    { href: "/pricing", label: "Pricing" },
    { href: "/dashboard", label: "Account Dashboard" },
  ];

  const allLinks = [...primaryLinks, ...secondaryLinks];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/60 backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-neutral-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        {/* Brand Core Logo */}
        <Link
          href="/"
          className="bg-linear-to-r from-neutral-950 to-neutral-600 bg-clip-text text-2xl font-black tracking-tighter text-transparent dark:from-white dark:to-neutral-400 shrink-0"
        >
          Ebmbook<span className="text-emerald-500">.</span>
        </Link>

        {/* Desktop Interface Glassmorphic Navigation Dock */}
        <nav className="hidden lg:flex items-center gap-0.5 rounded-full border border-black/5 bg-black/[0.03] p-1 backdrop-blur-md dark:border-white/5 dark:bg-white/[0.03]">
          {primaryLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-[11px] font-mono font-bold tracking-wider transition-all duration-200 uppercase ${
                  isActive
                    ? "bg-white text-neutral-950 shadow-xs dark:bg-neutral-800 dark:text-white"
                    : "text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Expanded More Options Dropdown Trigger */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-[11px] font-mono font-bold tracking-wider transition-all duration-200 uppercase cursor-pointer ${
                dropdownOpen
                  ? "bg-black/5 dark:bg-white/10 text-neutral-950 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
              }`}
            >
              More
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Absolute Positioned Glass Panel Dropdown Popover */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-56 rounded-xl border border-black/10 bg-white/90 p-2 shadow-xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 dark:border-neutral-800 dark:bg-neutral-900/90">
                <div className="space-y-0.5">
                  {secondaryLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setDropdownOpen(false)}
                        className={`flex items-center justify-between rounded-lg px-3 py-2.5 font-mono text-[10px] font-bold uppercase tracking-wider transition-colors ${
                          isActive
                            ? "bg-neutral-100 text-neutral-950 dark:bg-neutral-800 dark:text-white"
                            : "text-neutral-500 hover:bg-black/[0.03] hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-white/[0.03] dark:hover:text-white"
                        }`}
                      >
                        {link.label}
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Global Action Terminal Controls */}
        <div className="flex items-center gap-3">
          {/* Theme State Switch Button */}
          <button
            onClick={handleThemeToggle}
            className="group relative rounded-full border border-black/10 p-2 text-neutral-600 hover:border-black/30 dark:border-white/10 dark:text-neutral-400 dark:hover:border-white/30 transition-colors cursor-pointer min-h-[34px] min-w-[34px]"
            aria-label="Toggle structural theme state"
          >
            {isDarkMode ? (
              <Sun
                size={16}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            ) : (
              <Moon
                size={16}
                className="transition-transform duration-300 group-hover:-rotate-12"
              />
            )}
          </button>

          {/* Desktop High-Visibility Download Trigger */}
          <div className="hidden sm:flex items-center">
            <Link
              href="/download"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-2.5 text-[11px] font-mono font-bold uppercase tracking-wider text-white shadow-md shadow-emerald-500/10 hover:from-emerald-400 hover:to-teal-500 transition-all transform hover:scale-[1.03] text-center"
            >
              <Download size={13} className="animate-pulse" />
              Download App
            </Link>
          </div>

          {/* Mobile Hamburg Trigger Box */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative z-50 rounded-full p-2 text-neutral-600 hover:bg-black/5 lg:hidden dark:text-neutral-400 dark:hover:bg-white/5 cursor-pointer"
            aria-label="Toggle Mobile Overlay"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Immersive Mobile Overlay Menu Layer */}
      <div
        className={`fixed inset-0 top-0 left-0 z-40 h-screen w-screen bg-white/70 backdrop-blur-2xl transition-all duration-500 ease-in-out dark:bg-neutral-950/70 lg:hidden flex flex-col justify-between p-8 pt-24 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        {/* Full Modular Menu List Stack */}
        <nav className="flex flex-col gap-4 overflow-y-auto max-h-[65vh] pr-2">
          {allLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 25}ms` : "0ms",
                }}
                className={`text-2xl font-black uppercase tracking-tight transition-all duration-300 ${
                  mobileMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                } ${isActive ? "text-emerald-500 dark:text-emerald-400" : "text-neutral-800 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"}`}
              >
                {link.label.split(" ")[0]}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Action Controls Area */}
        <div
          className={`flex flex-col gap-3 transition-all duration-500 delay-200 ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <div className="h-px bg-black/5 dark:bg-white/10 my-1" />

          {/* Mobile High-Contrast Colorful Download Block Link */}
          <Link
            href="/download"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 py-3.5 text-center font-mono text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-emerald-500/10 block"
          >
            <Download size={14} />
            Download Platform
          </Link>
        </div>
      </div>
    </header>
  );
}
