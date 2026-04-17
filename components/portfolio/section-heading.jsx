import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "max-w-2xl space-y-4",
        align === "center" && "mx-auto text-center",
      )}
    >
      <span className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-foreground/70 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        {eyebrow}
      </span>
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="text-base leading-7 text-foreground/68 sm:text-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
