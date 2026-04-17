"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { navItems } from "./portfolio-data";
import { SiteHeader } from "./site-header";

export function AppLayout({ children }) {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      syncTouch: false,
    });

    let frameId = 0;
    const frame = (time) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(frame);
    };

    frameId = window.requestAnimationFrame(frame);

    return () => {
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    const timeout = window.setTimeout(() => {
      if (hash) {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        return;
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 80);

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section) => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <motion.div
        className="fixed inset-x-0 top-0 z-60 h-1 origin-left bg-linear-to-r from-brand via-brand-soft to-brand-strong"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-brand/25 blur-3xl dark:bg-brand/18" />
        <div className="absolute right-[-12%] top-[18%] h-96 w-96 rounded-full bg-brand-soft/20 blur-3xl dark:bg-brand-soft/15" />
        <div className="absolute bottom-[-10%] left-[30%] h-80 w-80 rounded-full bg-brand-strong/15 blur-3xl dark:bg-brand-strong/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.16),transparent_28%,transparent_72%,rgba(255,255,255,0.08))] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_35%,transparent_70%,rgba(255,255,255,0.02))]" />
      </div>

      <SiteHeader activeSection={activeSection} />

      <main className="relative z-10 pt-28">{children}</main>

      <footer className="relative z-10 px-4 pb-8 pt-6 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[2rem] border border-white/15 bg-white/10 px-6 py-6 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/35 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-foreground/50">
              Guru Ganesh Portfolio
            </p>
            <p className="mt-2 max-w-xl text-sm text-foreground/68">
              Premium product-focused UI/UX portfolio built with motion, layered
              depth, and a user-centered storytelling approach.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/12 px-4 py-2 text-sm font-medium text-foreground/85 transition-colors duration-300 hover:bg-white/18"
            >
              View selected work
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <a
              href="mailto:guruganesh.design@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
            >
              Let&apos;s work together
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
