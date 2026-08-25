"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { type MouseEvent } from "react";
import type { Project } from "@/lib/data";
import { GithubIcon } from "@/components/icons";
import { DiscoverKashmirArt, KashMeetArt } from "@/components/project-art";

const artByProject: Record<string, typeof DiscoverKashmirArt> = {
  "discover-kashmir": DiscoverKashmirArt,
  kashmeet: KashMeetArt,
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltX = useSpring(useMotionValue(0), { stiffness: 200, damping: 22 });
  const tiltY = useSpring(useMotionValue(0), { stiffness: 200, damping: 22 });
  const rotateX = useTransform(tiltY, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(tiltX, [-0.5, 0.5], ["-3deg", "3deg"]);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    tiltX.set((e.clientX - rect.left) / rect.width - 0.5);
    tiltY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onMouseLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  const background = useMotionTemplate`radial-gradient(360px circle at ${mouseX}px ${mouseY}px, var(--accent-soft), transparent 70%)`;
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="group relative overflow-hidden rounded-lg border border-border bg-surface transition-shadow duration-500 hover:border-border-strong hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-black/40"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background }}
        aria-hidden
      />

      <div className="relative grid gap-0 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative order-2 flex flex-col justify-between p-7 sm:p-9 lg:order-1">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono-tight text-xs text-muted-2">
                {number}
              </span>
              <div className="flex items-center gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} on GitHub`}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    <GithubIcon className="h-4.5 w-4.5" />
                  </a>
                ) : null}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} live site`}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    <ArrowUpRight className="h-4.5 w-4.5" />
                  </a>
                ) : null}
              </div>
            </div>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-1 font-mono-tight text-sm text-accent">
              {project.tagline}
            </p>

            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-[15px]">
              {project.description}
            </p>

            <ul className="mt-6 space-y-2.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((tech, ti) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + ti * 0.05 }}
                className="cursor-default rounded-md border border-border px-2.5 py-1 font-mono-tight text-[11px] text-muted-2 transition-colors duration-200 hover:border-accent/50 hover:text-accent group-hover:border-border-strong"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 flex gap-4">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
              >
                View Live
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            ) : null}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground"
              >
                Source
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            ) : null}
          </div>
        </div>

        <ProjectVisual id={project.id} name={project.name} number={number} />
      </div>
    </motion.div>
  );
}

function ProjectVisual({
  id,
  name,
  number,
}: {
  id: string;
  name: string;
  number: string;
}) {
  const Art = artByProject[id];
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="bg-noise relative order-1 flex min-h-55 items-center justify-center overflow-hidden border-b border-border bg-background lg:order-2 lg:min-h-0 lg:border-b-0 lg:border-l">
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20 blur-3xl transition-transform duration-700 group-hover:scale-125"
        style={{ background: "var(--accent)" }}
        aria-hidden
      />
      {Art ? (
        <Art className="relative h-full w-full p-8 transition-transform duration-700 group-hover:scale-[1.03] sm:p-10" />
      ) : (
        <span className="relative font-mono-tight text-7xl font-semibold text-foreground/8 transition-colors duration-500 group-hover:text-foreground/14 sm:text-8xl">
          {initials}
        </span>
      )}
      <span className="absolute bottom-4 right-4 font-mono-tight text-xs text-muted-2">
        {number}
      </span>
    </div>
  );
}
