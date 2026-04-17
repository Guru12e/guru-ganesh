"use client";

import { useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Dribbble,
  Figma,
  Layers3,
  Linkedin,
  Mail,
  MoveUpRight,
  Orbit,
  PenTool,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { toast } from "sonner";

import { MagneticSurface } from "./magnetic-surface";
import {
  contactLinks,
  designPrinciples,
  educationTimeline,
  heroStats,
  portfolioProjects,
  skills,
  techStack,
} from "./portfolio-data";
import { SectionHeading } from "./section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { AnimatedText } from "@/components/animations/animated-text";
import { ScrollAnimation } from "@/components/animations/scroll-animation";
import Link from "next/link";

const iconMap = {
  figma: Figma,
  pen: PenTool,
  code: Code2,
  react: Layers3,
  sparkles: WandSparkles,
  orbit: Orbit,
};

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export function PortfolioHome() {
  const { scrollYProgress } = useScroll();
  const heroOffset = useTransform(scrollYProgress, [0, 0.18], [0, 80]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const activePreview = useMemo(
    () =>
      portfolioProjects.find((project) => project.slug === hoveredProject) ??
      null,
    [hoveredProject],
  );

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `/#${sectionId}`);
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${name || "a new client"}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`,
    );

    toast.success("Opening your email app to continue the conversation.");
    window.location.href = `mailto:guruganesh.design@gmail.com?subject=${subject}&body=${body}`;
    event.currentTarget.reset();
  };

  return (
    <div className="relative">
      {activePreview && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-40 hidden w-72 rounded-[1.75rem] border border-white/20 bg-white/12 p-4 shadow-[0_25px_80px_rgba(15,23,42,0.28)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/55 lg:block"
          animate={{ x: cursor.x + 28, y: cursor.y - 18, opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.92 }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 24,
            mass: 0.35,
          }}
        >
          <div
            className={`relative h-36 overflow-hidden rounded-[1.4rem] bg-linear-to-br ${activePreview.preview.from} ${activePreview.preview.via} ${activePreview.preview.to}`}
          >
            <div className="absolute inset-4 rounded-[1.2rem] border border-white/25 bg-slate-950/18 backdrop-blur-xl" />
            <div className="absolute left-6 top-6 h-16 w-20 rounded-2xl border border-white/20 bg-white/18 shadow-lg backdrop-blur-xl" />
            <div className="absolute bottom-6 right-6 h-14 w-28 rounded-2xl border border-white/20 bg-white/12 shadow-lg backdrop-blur-xl" />
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground/50">
              Preview
            </p>
            <h3 className="text-lg font-semibold text-foreground">
              {activePreview.title}
            </h3>
            <p className="text-sm text-foreground/68">
              {activePreview.headline}
            </p>
          </div>
        </motion.div>
      )}

      <section id="hero" className="px-4 pb-14 pt-4 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div className="space-y-8" style={{ y: heroOffset }}>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-foreground/75 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
            >
              <Sparkles className="h-4 w-4 text-brand" />
              Product experiences shaped by clarity, emotion, and intent
            </motion.div>

            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-sm font-semibold uppercase tracking-[0.4em] text-foreground/50"
              >
                Guru Ganesh · UI/UX Designer
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-4xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              >
                <AnimatedText
                  text="Crafting intuitive and delightful digital experiences."
                  staggerDelay={0.02}
                />
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-2xl text-lg leading-8 text-foreground/68 sm:text-xl"
              >
                I design polished interfaces and user journeys that feel
                premium, human, and conversion-aware—from first insight to
                prototype validation.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <MagneticSurface className="w-full sm:w-auto">
                <motion.button
                  type="button"
                  onClick={() => scrollToSection("projects")}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-4 text-base font-semibold text-white shadow-[0_24px_60px_rgba(15,23,42,0.24)] transition-all duration-300 hover:shadow-[0_30px_70px_rgba(15,23,42,0.3)] dark:bg-white dark:text-slate-950 dark:hover:shadow-[0_30px_70px_rgba(255,255,255,0.1)] sm:w-auto"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </motion.button>
              </MagneticSurface>
              <MagneticSurface className="w-full sm:w-auto">
                <motion.button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/12 px-6 py-4 text-base font-semibold text-foreground shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:bg-white/18 dark:border-white/10 dark:bg-white/6 sm:w-auto"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MoveUpRight className="h-4 w-4" />
                  </motion.div>
                </motion.button>
              </MagneticSurface>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.34,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl border border-white/15 bg-white/12 p-5 shadow-[0_20px_55px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-colors duration-300 hover:bg-white/18 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <p className="text-3xl font-semibold text-foreground">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="mt-2 text-sm text-foreground/62">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="absolute inset-10 rounded-full bg-brand/25 blur-3xl dark:bg-brand/20" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/18 bg-white/14 p-5 shadow-[0_40px_90px_rgba(15,23,42,0.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/40">
              <div className="absolute inset-x-6 top-6 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400/85" />
                <span className="h-3 w-3 rounded-full bg-amber-400/85" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/85" />
              </div>
              <div className="mt-8 grid gap-4">
                <div className="rounded-[1.6rem] bg-linear-to-br from-brand/90 via-brand-soft/60 to-brand-strong/80 p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-white/70">
                        Featured approach
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold">
                        Research-led interface systems
                      </h2>
                    </div>
                    <BadgeCheck className="h-6 w-6 shrink-0" />
                  </div>
                  <p className="mt-6 max-w-md text-sm leading-7 text-white/80">
                    Strategy, motion, and usability are aligned to create
                    products that feel premium and easy to trust.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
                  <div className="rounded-[1.5rem] border border-white/15 bg-white/12 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                    <p className="text-sm uppercase tracking-[0.26em] text-foreground/50">
                      Design process
                    </p>
                    <div className="mt-5 space-y-3">
                      {[
                        "Research",
                        "Wireframes",
                        "Prototype",
                        "Usability tests",
                      ].map((step, index) => (
                        <div
                          key={step}
                          className="flex items-center gap-3 rounded-2xl bg-white/35 px-3 py-3 dark:bg-white/6"
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white dark:bg-white dark:text-slate-950">
                            0{index + 1}
                          </span>
                          <span className="font-medium text-foreground/84">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/15 bg-white/12 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                    <p className="text-sm uppercase tracking-[0.26em] text-foreground/50">
                      Toolkit blend
                    </p>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {["Figma", "Adobe XD", "React", "Framer Motion"].map(
                        (tool) => (
                          <div
                            key={tool}
                            className="rounded-[1.25rem] border border-white/15 bg-white/30 px-4 py-4 text-sm font-medium text-foreground/80 dark:border-white/10 dark:bg-white/6"
                          >
                            {tool}
                          </div>
                        ),
                      )}
                    </div>
                    <div className="mt-4 rounded-[1.25rem] bg-slate-900 px-4 py-4 text-sm text-white dark:bg-white dark:text-slate-950">
                      Building interfaces that look elevated and behave with
                      clarity.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeading
            eyebrow="About me"
            title="Design thinking rooted in empathy, structure, and business impact."
            description="Guru Ganesh creates digital products where visual refinement and usability work together. The process centers on understanding real user behavior, clarifying product priorities, and turning insights into interfaces that feel effortless."
          />

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              {...reveal}
              className="rounded-[2rem] border border-white/15 bg-white/12 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/35"
            >
              <p className="text-lg leading-8 text-foreground/72">
                With a strong foundation in UI systems and frontend-aware
                design, I help products move from messy complexity to elegant,
                confidence-building experiences. I care about the moments where
                users hesitate, and I design those moments away.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  [
                    "Discovery",
                    "Interview patterns, workflows, and user needs.",
                  ],
                  [
                    "Clarity",
                    "Shape layouts that simplify decisions and next actions.",
                  ],
                  [
                    "Delight",
                    "Add motion and detail that support trust, not distraction.",
                  ],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-[1.4rem] border border-white/15 bg-white/30 p-4 dark:border-white/10 dark:bg-white/6"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-foreground/62">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-4">
              {designPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: index * 0.08 }}
                  className="rounded-[1.75rem] border border-white/15 bg-white/12 p-6 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/35"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/65">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeading
            eyebrow="Tech stack"
            title="Tools that bridge strategy, interface craft, and implementation reality."
            description="The toolkit combines modern design platforms, motion systems, and frontend understanding so ideas move smoothly from insight to polished execution."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {techStack.map((item, index) => {
              const Icon = iconMap[item.icon];

              return (
                <motion.div
                  key={item.name}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: index * 0.06 }}
                >
                  <MagneticSurface className="h-full">
                    <div className="h-full rounded-[1.8rem] border border-white/15 bg-white/12 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-colors duration-300 hover:bg-white/18 dark:border-white/10 dark:bg-slate-950/35 dark:hover:bg-slate-950/50">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-[1.35rem] bg-linear-to-br from-brand to-brand-strong text-white shadow-[0_20px_40px_rgba(99,102,241,0.25)]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="rounded-full bg-white/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/55 dark:bg-white/6">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="mt-6 text-2xl font-semibold text-foreground">
                        {item.name}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-foreground/66">
                        {item.description}
                      </p>
                    </div>
                  </MagneticSurface>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="education" className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeading
            eyebrow="Education & qualifications"
            title="A foundation in systems thinking backed by focused UX specialization."
            description="Formal education in technology plus continuous training in UX and interface design informs a practice that is both creative and execution-aware."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {educationTimeline.map((item, index) => (
              <motion.div
                key={item.title}
                {...reveal}
                transition={{ ...reveal.transition, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-[1.9rem] border border-white/15 bg-white/12 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/35"
              >
                <div className="absolute left-6 top-6 h-12 w-12 rounded-full bg-brand/18 blur-2xl dark:bg-brand/22" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand">
                    {item.period}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-foreground/65">
                    {item.organization}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-foreground/66">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeading
            eyebrow="Project showcase"
            title="Selected case studies with thoughtful flows, measurable clarity, and premium interaction design."
            description="Each project balances problem framing, process rigor, and polished execution so the final experience feels beautiful and easy to use."
          />

          <div className="grid gap-6 xl:grid-cols-2">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                {...reveal}
                transition={{ ...reveal.transition, delay: index * 0.08 }}
              >
                <MagneticSurface className="h-full">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      onMouseEnter={() => setHoveredProject(project.slug)}
                      onMouseLeave={() => setHoveredProject(null)}
                      onMouseMove={(event) =>
                        setCursor({ x: event.clientX, y: event.clientY })
                      }
                      className="group block h-full rounded-4xl border border-white/15 bg-white/12 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-300 hover:bg-white/18 hover:shadow-[0_30px_90px_rgba(15,23,42,0.15)] dark:border-white/10 dark:bg-slate-950/35 dark:hover:bg-slate-950/50"
                    >
                      <div
                        className={`relative overflow-hidden rounded-[1.7rem] bg-linear-to-br ${project.preview.from} ${project.preview.via} ${project.preview.to} p-5 shadow-2xl ${project.preview.highlight}`}
                      >
                        <div className="absolute inset-4 rounded-[1.4rem] border border-white/20 bg-slate-950/12 backdrop-blur-xl" />
                        <div className="relative z-10 flex min-h-52.5 flex-col justify-between">
                          <div className="flex items-center justify-between gap-3">
                            <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                              {project.category}
                            </span>
                            <span className="text-sm font-medium text-white/80">
                              {project.year}
                            </span>
                          </div>
                          <div className="grid gap-3 sm:grid-cols-[1.05fr_0.95fr]">
                            <div className="rounded-[1.2rem] border border-white/16 bg-white/18 p-4 backdrop-blur-xl">
                              <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                                Process
                              </p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {project.process.map((step) => (
                                  <span
                                    key={step}
                                    className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white"
                                  >
                                    {step}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="rounded-[1.2rem] border border-white/16 bg-white/10 p-4 backdrop-blur-xl">
                              <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                                Outcome
                              </p>
                              <p className="mt-3 text-sm leading-6 text-white/85">
                                {project.impact}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <h3 className="text-2xl font-semibold text-foreground group-hover:text-brand transition-colors duration-300">
                            {project.title}
                          </h3>
                          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white dark:bg-white dark:text-slate-950">
                            View case study
                            <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                        <p className="text-base leading-7 text-foreground/68">
                          {project.problem}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <span
                              key={tool}
                              className="rounded-full border border-white/15 bg-white/35 px-3 py-1 text-xs font-medium text-foreground/70 dark:border-white/10 dark:bg-white/6"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </MagneticSurface>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeading
            eyebrow="Skills"
            title="Core capabilities across research, systems thinking, and interface craft."
            description="These strengths shape how projects are framed, prototyped, tested, and refined into experiences users can trust."
          />

          <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
            <motion.div
              {...reveal}
              className="rounded-[2rem] border border-white/15 bg-white/12 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/35"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-[1.2rem] bg-linear-to-br from-brand to-brand-strong text-white">
                  <BrainCircuit className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-foreground/50">
                    Working style
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-foreground">
                    Strategy meets tactile detail
                  </h3>
                </div>
              </div>
              <p className="mt-6 text-base leading-8 text-foreground/68">
                I combine research synthesis, visual hierarchy, prototyping, and
                motion craft to turn complexity into flows that feel intuitive
                from the first interaction.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Journey mapping and insight clustering",
                  "Accessible UI systems and interaction states",
                  "Rapid prototype validation with stakeholders and users",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.25rem] border border-white/15 bg-white/30 px-4 py-4 dark:border-white/10 dark:bg-white/6"
                  >
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span className="text-sm leading-6 text-foreground/72">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: index * 0.05 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="rounded-[1.7rem] border border-white/15 bg-white/12 p-6 backdrop-blur-2xl transition-all duration-300 hover:bg-white/18 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-slate-950/35 dark:hover:bg-slate-950/50"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/15 text-brand dark:bg-brand/20"
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <BriefcaseBusiness className="h-4 w-4" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {skill.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-foreground/66">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-12">
          <SectionHeading
            eyebrow="Contact"
            title="Let's work together on a thoughtful, premium digital experience."
            description="Available for UI/UX design, product design support, and interface refresh projects that need clarity, polish, and user-centered thinking."
          />

          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <motion.div
              {...reveal}
              className="rounded-[2rem] border border-white/15 bg-white/12 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/35"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-brand">
                Start a project
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-foreground">
                Share your idea, challenge, or next product move.
              </h3>
              <p className="mt-4 text-base leading-8 text-foreground/68">
                Whether you&apos;re refining a product, building a case
                study-worthy launch, or improving usability across a core flow,
                let&apos;s design it with intent.
              </p>

              <div className="mt-8 space-y-4">
                {contactLinks.map((link) => {
                  const Icon =
                    link.label === "Email"
                      ? Mail
                      : link.label === "LinkedIn"
                        ? Linkedin
                        : Dribbble;

                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      whileHover={{ x: 4, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-between gap-4 rounded-[1.35rem] border border-white/15 bg-white/35 px-4 py-4 transition-all duration-300 hover:bg-white/50 dark:border-white/10 dark:bg-white/6 dark:hover:bg-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/12 text-brand dark:bg-brand/20"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Icon className="h-4 w-4" />
                        </motion.div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {link.label}
                          </p>
                          <p className="text-sm text-foreground/65">
                            {link.value}
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <MoveUpRight className="h-4 w-4 text-foreground/45" />
                      </motion.div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            <motion.form
              {...reveal}
              onSubmit={handleContactSubmit}
              className="rounded-[2rem] border border-white/15 bg-white/12 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/35"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground/75"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="h-12 rounded-2xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-brand dark:border-white/15 dark:bg-white/6 dark:text-foreground dark:placeholder:text-foreground/40"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground/75"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-12 rounded-2xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-brand dark:border-white/15 dark:bg-white/6 dark:text-foreground dark:placeholder:text-foreground/40"
                    required
                  />
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground/75"
                >
                  Project brief
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your product, goals, and the experience you want to create."
                  className="min-h-42.5 rounded-3xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus-visible:ring-brand dark:border-white/15 dark:bg-white/6 dark:text-foreground dark:placeholder:text-foreground/40"
                  required
                />
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-foreground/58">
                  Reply via email to kick off scoping, moodboards, and initial
                  product direction.
                </p>
                <MagneticSurface>
                  <motion.button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(15,23,42,0.24)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(15,23,42,0.3)] dark:bg-white dark:text-slate-950 dark:hover:shadow-[0_25px_60px_rgba(255,255,255,0.1)]"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Let&apos;s work together
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </motion.button>
                </MagneticSurface>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}
