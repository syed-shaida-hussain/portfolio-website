"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const focusAreas = [
  "Frontend Development",
  "Backend Development",
  "APIs & Integrations",
  "Databases",
  "Authentication",
  "SEO",
  "Web Performance",
  "Accessibility",
  "Responsive UI",
];

export function About() {
  return (
    <section
      id="about"
      className="container-px mx-auto max-w-6xl border-t border-border py-16 sm:py-24"
    >
      <SectionHeading number="01" title="About" />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal delay={0.1} className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          <p>
            I&apos;m a full-stack developer who cares more about what ships
            than what looks good in a demo. My work sits at the intersection
            of interface and infrastructure — designing components that feel
            effortless to use, and building the APIs, databases, and auth
            systems that keep them honest under real usage.
          </p>
          <p>
            That means thinking past the happy path: how a page performs on a
            slow connection, how it reads to a screen reader, how it ranks
            when a search engine crawls it, and how the system behaves when
            a thousand people are using it at once. I&apos;ve worked across
            that full surface — from pixel-level UI decisions to
            schema design and server-rendered performance — because a
            product is only as good as its weakest layer.
          </p>
          <p>
            I&apos;m drawn to problems that require both craft and rigor:
            interfaces worth polishing, and systems worth trusting.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="rounded-lg border border-border bg-surface p-6">
            <h3 className="font-mono-tight text-xs uppercase tracking-wider text-muted-2">
              Areas of focus
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {focusAreas.map((area, i) => (
                <motion.li
                  key={area}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.045 }}
                  className="group flex items-center gap-2.5 text-sm text-foreground"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent transition-transform duration-200 group-hover:scale-[2.5]" />
                  {area}
                </motion.li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
