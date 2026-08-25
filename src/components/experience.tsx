"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section
      id="experience"
      className="container-px mx-auto max-w-6xl border-t border-border py-16 sm:py-24"
    >
      <SectionHeading
        number="03"
        title="Experience"
        description="Real production work — building and shipping features used by active users, not tutorial projects."
      />

      <div className="relative">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1.75 top-2 bottom-2 hidden w-px origin-top bg-linear-to-b from-accent/60 via-border to-transparent sm:block"
          aria-hidden
        />
        <ol className="space-y-10">
          {experience.map((job, i) => (
            <li key={job.id} className="relative sm:pl-12">
              <Reveal delay={i * 0.1}>
                <span
                  className="absolute left-0 top-1.5 hidden h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-accent sm:flex"
                  aria-hidden
                >
                  {i === 0 ? (
                    <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-60" />
                  ) : null}
                </span>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-semibold text-foreground">
                    {job.role}
                  </h3>
                  <span className="font-mono-tight text-xs text-muted-2">
                    {job.period}
                  </span>
                </div>

                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm font-medium text-accent">
                    {job.company}
                  </span>
                  <span className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-2">
                    {job.type}
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {job.points.map((point, pi) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15 + pi * 0.07 }}
                      className="group/point flex gap-3 text-sm leading-relaxed text-muted transition-colors hover:text-foreground sm:text-[15px]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-strong transition-colors group-hover/point:bg-accent" />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
