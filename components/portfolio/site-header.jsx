import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoonStar, Sparkles, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

import { navItems } from "./portfolio-data";
import { cn } from "@/lib/utils";

export function SiteHeader({ activeSection }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = useMemo(() => {
    if (!mounted) return true;
    return theme !== "light";
  }, [mounted, theme]);

  const handleSectionNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `/#${sectionId}`);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-white/12 px-4 py-3 shadow-[0_18px_70px_rgba(15,23,42,0.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/40 sm:px-6"
      >
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group inline-flex items-center gap-3 rounded-full pr-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <motion.span
            className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-brand via-brand-soft to-brand-strong text-sm font-semibold text-white shadow-[0_10px_25px_rgba(99,102,241,0.4)]"
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            GG
          </motion.span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold tracking-[0.24em] text-foreground/55 uppercase">
              Guru Ganesh
            </span>
            <span className="block text-sm text-foreground/70">
              UI/UX Designer
            </span>
          </span>
        </motion.button>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item, index) => {
            const active = activeSection === item.id;

            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => handleSectionNavigation(item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  active
                    ? "bg-slate-900 text-white shadow-[0_14px_40px_rgba(15,23,42,0.22)] dark:bg-white dark:text-slate-950"
                    : "text-foreground/70 hover:bg-white/10 hover:text-foreground dark:text-foreground/70 dark:hover:bg-white/10 dark:hover:text-foreground",
                )}
              >
                {item.label}
              </motion.button>
            );
          })}
        </nav>

        <motion.div
          className="flex items-center gap-2 sm:gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <motion.button
            type="button"
            onClick={() => handleSectionNavigation("projects")}
            className="hidden rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-foreground/80 transition-colors duration-300 hover:bg-white/15 hover:text-foreground md:inline-flex"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.15)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Case studies
          </motion.button>
          <motion.button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-medium text-foreground/85 transition-colors duration-300 hover:bg-white/15"
            aria-label="Toggle color theme"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isDark ? 0 : 180 }}
              transition={{ duration: 0.4 }}
            >
              {isDark ? (
                <SunMedium className="h-4 w-4" />
              ) : (
                <MoonStar className="h-4 w-4" />
              )}
            </motion.div>
            <span className="hidden sm:inline">
              {isDark ? "Light" : "Dark"}
            </span>
          </motion.button>
          <motion.button
            type="button"
            onClick={() => handleSectionNavigation("contact")}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(15,23,42,0.24)] dark:bg-white dark:text-slate-950"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="h-4 w-4" />
            </motion.div>
            Hire me
          </motion.button>
        </motion.div>
      </motion.div>
    </header>
  );
}
