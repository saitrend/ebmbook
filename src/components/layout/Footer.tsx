import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Support",
      links: [
        { href: "/blog/tutorial/", label: "Tutorial" },
        { href: "/why-us/", label: "Why Us" },
        { href: "/contact/", label: "Contact Us" },
        { href: "/partnership/", label: "Partnership" },
        { href: "/report_issue/", label: "Report Issue" },
      ],
    },
    {
      title: "Ebmbook",
      links: [
        { href: "https://central.ebmbook.com/", label: "Login" },
        {
          href: "https://central.ebmbook.com/register",
          label: "Create Account",
        },
        { href: "/terms-of-use/", label: "Terms of Use" },
        {
          href: "/software-license-agreement/",
          label: "Software License Agreement",
        },
        { href: "/privacy-policy/", label: "Privacy Policy" },
      ],
    },
    {
      title: "Guide",
      links: [
        { href: "/download-guide/", label: "Download Guide" },
        { href: "/our-videos/", label: "Videos" },
        { href: "/update-epos-software/", label: "How to Update" },
        {
          href: "/a-perfect-pos-for-your-business/",
          label: "POS for Your Business",
        },
        {
          href: "/versions",
          label: "Versions Releases",
        },
      ],
    },
  ];

  return (
    <footer className="mt-24 border-t border-black/5 bg-linear-to-b from-transparent to-black/[0.02] dark:border-white/10 dark:to-white/[0.01]">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        {/* Top Section: Branding + Links Grid */}
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-5 xl:gap-8 pb-12">
          {/* Brand/Bio Column */}
          <div className="xl:col-span-1 flex flex-col gap-4">
            <Link
              href="/"
              className="bg-linear-to-r from-neutral-950 to-neutral-600 bg-clip-text text-2xl font-black tracking-tighter text-transparent dark:from-white dark:to-neutral-400 w-fit"
            >
              Ebmbook<span className="text-emerald-500">.</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              Modern POS Solutions for Restaurants & Shops
            </p>

            {/* Verified Production Social Media Link Matrices */}
            <div className="flex flex-wrap gap-5 items-center mt-2">
              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/company/ebmbook/"
                className="text-neutral-400 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>

              {/* YouTube Link */}
              <a
                href="https://www.youtube.com/@ebmbook"
                className="text-neutral-400 hover:text-red-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </a>

              {/* Facebook Link */}
              <a
                href="https://www.facebook.com/ebmbook/"
                className="text-neutral-400 hover:text-pink-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>

              {/* TikTok Link */}
              <a
                href="https://www.tiktok.com/@ebmbookpos"
                className="text-neutral-400 hover:text-black dark:hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>

              {/* X Link */}
              <a
                href="https://x.com/ebmbook"
                className="text-neutral-400 hover:text-blue-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                aria-label="X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 496 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" />
                </svg>
              </a>

              {/* Telegram Link */}
              <a
                href="https://t.me/ebmbook"
                className="text-neutral-400 hover:text-blue-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                aria-label="Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 496 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Links Mapping (Unified 4-Column Layout) */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 xl:col-span-4 xl:justify-items-end">
            {sections.map((section) => (
              <div
                key={section.title}
                className="flex flex-col gap-4 min-w-[100px]"
              >
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group relative text-sm text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                        {/* Elegant micro-underline interaction effect */}
                        <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-neutral-950 transition-all duration-200 group-hover:w-full dark:bg-white" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Copyright + Extra Accents */}
        <div className="mt-8 border-t border-black/5 pt-8 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            &copy; {currentYear} Ebmbook. Custom built business solutions. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
