"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Gauge,
  Layers,
  Plug,
  ServerCog,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { capabilities } from "@/lib/data";

const icons = {
  "frontend-eng": Layers,
  "backend-eng": ServerCog,
  "database-arch": Boxes,
  "performance-seo": Gauge,
  integration: Plug,
};

export function Capabilities() {
  return (
    <section className="container-px mx-auto max-w-6xl border-t border-border py-16 sm:py-24">
      <SectionHeading
        number="05"
        title="What I Do"
        description="The layers of a product I build and own, end to end."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((cap, i) => {
          const Icon = icons[cap.id as keyof typeof icons];
          return (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-lg border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/40 ${
                i === capabilities.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15"
              />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-md border border-border text-accent transition-all duration-300 group-hover:-rotate-6 group-hover:border-accent/40 group-hover:bg-accent-soft">
                <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
              </div>
              <h3 className="relative mt-5 text-base font-semibold text-foreground">
                {cap.title}
              </h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-muted">
                {cap.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
