"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.5,
            delay: delay + wordIndex * staggerDelay,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
