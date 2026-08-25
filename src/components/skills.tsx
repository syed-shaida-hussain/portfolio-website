"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { skillCategories } from "@/lib/data";

export function Skills() {
  const [active, setActive] = useState<string>("all");

  const visibleCategories =
    active === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === active);

  return (
    <section
      id="skills"
      className="container-px mx-auto max-w-6xl border-t border-border py-16 sm:py-24"
    >
      <SectionHeading
        number="02"
        title="Technical Skills"
        description="The tools and technologies I use to take an idea from a blank repository to a system running in production."
      />

      <Reveal delay={0.1} className="mb-10 flex flex-wrap gap-2">
        <FilterButton
          label="All"
          isActive={active === "all"}
          onClick={() => setActive("all")}
        />
        {skillCategories.map((cat) => (
          <FilterButton
            key={cat.id}
            label={cat.title}
            isActive={active === cat.id}
            onClick={() => setActive(cat.id)}
          />
        ))}
      </Reveal>

      <div className="space-y-10">
        <AnimatePresence mode="popLayout">
          {visibleCategories.map((category) => (
            <motion.div
              key={category.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="mb-4 font-mono-tight text-sm text-muted-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.03 }}
                    className="group relative cursor-default rounded-md border border-border bg-surface px-4 py-2 text-sm text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md hover:shadow-black/5 dark:hover:shadow-black/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

function FilterButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`rounded-full border px-4 py-1.5 text-sm transition-colors duration-200 ${
        isActive
          ? "border-accent bg-accent-soft text-foreground"
          : "border-border text-muted hover:border-border-strong hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}
