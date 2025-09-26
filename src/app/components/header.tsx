"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/app/components/theme-switcher";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const links = [
    { href: "/about", label: "about" },
    { href: "/projects", label: "projects" },
  ];
  const isHome = pathname === "/home";

  return (
    <header className="w-full bg-transparent z-[100] relative">
      <div className="mx-auto w-full max-w-screen-md px-5 md:px-8 mt-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Link
                href="/home"
                className="inline-flex items-center"
                aria-label="Go to home"
                aria-current={isHome ? "page" : undefined}
              >
                <Image
                  src="/icons/profilepicture.jpg"
                  alt="Profile"
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                  priority
                />
              </Link>
              {isHome && (
                <motion.span
                  layoutId="nav-bubble"
                  className="pointer-events-none absolute inset-0 rounded-full bg-foreground/10 dark:bg-white/10 opacity-0"
                  transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.7 }}
                  aria-hidden
                />
              )}
            </div>

            <nav className="flex items-center gap-2 text-sm">
              {links.map((l) => {
                const active =
                  pathname === l.href || pathname?.startsWith(l.href);
                const showBubble = active; // hide only on home (handled above)

                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="relative inline-flex items-center rounded-full px-3 py-1 text-base"
                    aria-current={active ? "page" : undefined}
                  >
                    {showBubble && (
                      <motion.span
                        layoutId="nav-bubble"
                        className="absolute inset-0 rounded-full bg-foreground/10 dark:bg-white/10"
                        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.7 }}
                        aria-hidden
                      />
                    )}
                    <span className="relative z-10">{l.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}