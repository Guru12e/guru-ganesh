"use client";

import { motion } from "framer-motion";

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number;
  variant?:
    | "fadeUp"
    | "fadeDown"
    | "fadeLeft"
    | "fadeRight"
    | "scale"
    | "slide-in";
}

const defaultEase = [0.22, 1, 0.36, 1] as const;

const variants = {
  fadeUp: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: defaultEase },
  },
  fadeDown: {
    initial: { opacity: 0, y: -30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: defaultEase },
  },
  fadeLeft: {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: defaultEase },
  },
  fadeRight: {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: defaultEase },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: defaultEase },
  },
  "slide-in": {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.7, ease: defaultEase },
  },
};

export function ScrollAnimation({
  children,
  delay = 0,
  variant = "fadeUp",
}: ScrollAnimationProps) {
  return (
    <motion.div
      {...variants[variant as keyof typeof variants]}
      transition={{
        ...variants[variant as keyof typeof variants].transition,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
