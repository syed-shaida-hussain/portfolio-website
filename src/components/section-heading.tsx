"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  number: string;
  title: string;
  description?: string;
};

const ease = [0.16, 1, 0.3, 1] as const;

export function SectionHeading({ number, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mb-10 sm:mb-14"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 12 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease }}
        className="flex items-baseline gap-3 font-mono-tight text-sm text-accent"
      >
        <span>{number}</span>
        <motion.span
          variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="h-px w-8 origin-left bg-border-strong"
        />
        <span className="text-muted">Section</span>
      </motion.div>

      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, delay: 0.08, ease }}
        className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
      >
        {title}
      </motion.h2>

      {description ? (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.16, ease }}
          className="mt-4 max-w-xl text-base leading-relaxed text-muted"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
