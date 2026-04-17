import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BadgeCheck, MoveUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { MagneticSurface } from "./magnetic-surface";
import { portfolioProjects } from "./portfolio-data";
import { SectionHeading } from "./section-heading";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
};

export function CaseStudyPage() {
  const { slug } = useParams();
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/15 bg-white/12 p-10 text-center shadow-[0_20px_80px_rgba(15,23,42,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/35">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">
            Case study unavailable
          </p>
          <h1 className="mt-5 text-4xl font-semibold text-foreground sm:text-5xl">
            This project detail page is not available yet.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-foreground/66">
            The portfolio remains fully navigable. You can return to the main
            page and explore the featured work that is already published.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
        </div>
      </section>
    );
  }

  const relatedProjects = portfolioProjects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2);

  return (
    <section className="px-4 pb-16 pt-4 sm:px-6 lg:px-10 lg:pb-24">
      <div className="mx-auto max-w-7xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
        >
          <div className="space-y-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/12 px-4 py-2 text-sm font-medium text-foreground/75 backdrop-blur-xl transition-colors duration-300 hover:bg-white/18 dark:border-white/10 dark:bg-white/6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Link>
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.34em] text-brand">
                {project.category} · {project.year}
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-foreground/68">
                {project.headline}
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.6rem] border border-white/15 bg-white/12 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/35"
              >
                <p className="text-3xl font-semibold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-foreground/62">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={`relative overflow-hidden rounded-[2.25rem] bg-linear-to-br ${project.preview.from} ${project.preview.via} ${project.preview.to} p-6 shadow-[0_30px_90px_rgba(15,23,42,0.18)]`}
        >
          <div className="absolute inset-5 rounded-[1.9rem] border border-white/18 bg-slate-950/12 backdrop-blur-xl" />
          <div className="relative z-10 grid min-h-90 gap-4 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[1.6rem] border border-white/16 bg-white/14 p-5 backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/74">
                Project framing
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                {project.client}
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/84">
                {project.problem}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/18 bg-white/12 px-3 py-1 text-xs font-medium text-white/88"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-[1.45rem] border border-white/16 bg-white/12 p-5 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/74">
                  Core process
                </p>
                <div className="mt-4 space-y-3">
                  {project.process.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 rounded-2xl bg-white/12 px-3 py-3"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/18 text-xs font-semibold text-white">
                        0{index + 1}
                      </span>
                      <span className="text-sm font-medium text-white">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.45rem] border border-white/16 bg-white/12 p-5 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/74">
                  Final outcome
                </p>
                <p className="mt-4 text-sm leading-7 text-white/84">
                  {project.outcome}
                </p>
                <p className="mt-5 rounded-[1.1rem] bg-slate-950/18 px-4 py-4 text-sm leading-7 text-white/88">
                  {project.impact}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div {...reveal} className="space-y-6">
            <SectionHeading
              eyebrow="Overview"
              title="From product challenge to validated interface direction."
              description="This case study shows how user research, system thinking, and interaction design were combined to improve clarity and confidence across the experience."
            />

            <div className="rounded-[2rem] border border-white/15 bg-white/12 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/35">
              <h3 className="text-xl font-semibold text-foreground">
                What was delivered
              </h3>
              <div className="mt-5 space-y-3">
                {project.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.2rem] border border-white/15 bg-white/35 px-4 py-4 dark:border-white/10 dark:bg-white/6"
                  >
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span className="text-sm leading-6 text-foreground/72">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {project.narrative.map((paragraph, index) => (
              <motion.div
                key={paragraph}
                {...reveal}
                transition={{ ...reveal.transition, delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/15 bg-white/12 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/35"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
                  0{index + 1}
                </p>
                <p className="mt-4 text-base leading-8 text-foreground/68">
                  {paragraph}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeading
            eyebrow="Preview boards"
            title="Visual snapshots that communicate the product feel."
            description="These concept panels echo the visual language, hierarchy, and spacing strategy used across the project solution."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Overview panel",
              "Interaction states",
              "Responsive detail view",
            ].map((label, index) => (
              <motion.div
                key={label}
                {...reveal}
                transition={{ ...reveal.transition, delay: index * 0.08 }}
                className={`relative overflow-hidden rounded-[1.9rem] bg-linear-to-br ${project.preview.from} ${project.preview.via} ${project.preview.to} p-5 shadow-[0_20px_70px_rgba(15,23,42,0.12)]`}
              >
                <div className="absolute inset-4 rounded-[1.5rem] border border-white/18 bg-slate-950/12 backdrop-blur-xl" />
                <div className="relative z-10 min-h-62.5">
                  <div className="absolute left-5 top-5 h-20 w-24 rounded-[1.3rem] border border-white/16 bg-white/14 backdrop-blur-xl" />
                  <div className="absolute right-5 top-10 h-12 w-28 rounded-[1rem] border border-white/16 bg-white/14 backdrop-blur-xl" />
                  <div className="absolute bottom-5 left-5 right-5 h-24 rounded-[1.4rem] border border-white/16 bg-white/16 backdrop-blur-xl" />
                </div>
                <p className="relative z-10 mt-5 text-sm font-medium text-white/85">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeading
            eyebrow="More work"
            title="Explore additional case studies."
            description="Related projects continue the same balance of strategy, motion, and premium interface storytelling."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {relatedProjects.map((related) => (
              <motion.div key={related.slug} {...reveal}>
                <MagneticSurface>
                  <Link
                    to={`/projects/${related.slug}`}
                    className="group block rounded-[1.9rem] border border-white/15 bg-white/12 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-colors duration-300 hover:bg-white/18 dark:border-white/10 dark:bg-slate-950/35 dark:hover:bg-slate-950/50"
                  >
                    <div
                      className={`rounded-[1.5rem] bg-linear-to-br ${related.preview.from} ${related.preview.via} ${related.preview.to} p-5`}
                    >
                      <div className="h-40 rounded-[1.2rem] border border-white/16 bg-white/14 backdrop-blur-xl" />
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
                          {related.category}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-foreground">
                          {related.title}
                        </h3>
                      </div>
                      <ArrowRight className="h-5 w-5 text-foreground/45 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </MagneticSurface>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          {...reveal}
          className="rounded-[2rem] border border-white/15 bg-white/12 p-8 text-center shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/35"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Need something similar?
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
            Let&apos;s design a product experience that feels effortless and
            memorable.
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <MagneticSurface>
              <a
                href="mailto:guruganesh.design@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
              >
                Start a conversation
                <MoveUpRight className="h-4 w-4" />
              </a>
            </MagneticSurface>
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/12 px-5 py-3 text-sm font-semibold text-foreground/80 backdrop-blur-xl transition-colors duration-300 hover:bg-white/18 dark:border-white/10 dark:bg-white/6"
            >
              Browse all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
