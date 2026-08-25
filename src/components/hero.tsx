"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Magnetic } from "@/components/magnetic";

const name = site.name;
const nameParts = name.split(" ");

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[82vh] items-center overflow-hidden pt-16"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[520px] w-[520px] opacity-[0.15]"
        style={{
          background:
            "radial-gradient(closest-side, var(--accent), transparent 100%)",
        }}
        aria-hidden
      />

      <div className="container-px mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 font-mono-tight text-xs text-muted"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Open to opportunities
          </motion.div>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
            aria-label={name}
          >
            {nameParts.map((part, pi) => (
              <span key={part} className="mr-3 inline-block last:mr-0">
                {part.split("").map((char, ci) => (
                  <motion.span
                    key={`${pi}-${ci}`}
                    variants={letter}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="mt-3 font-mono-tight text-lg text-accent sm:text-xl"
          >
            {site.title}
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            I design and build modern, scalable, high-performance web
            applications — from responsive interfaces to production APIs —
            using React, Next.js, Node.js, PostgreSQL, MongoDB, and Prisma.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background"
              >
                <span className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-400 ease-out group-hover:translate-x-0" />
                <span className="relative">View Projects</span>
                <ArrowUpRight className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/50 hover:bg-surface"
              >
                Let&apos;s Connect
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="mt-10 flex items-center gap-5"
          >
            <motion.a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="text-muted transition-colors hover:text-accent"
            >
              <GithubIcon className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={`mailto:${site.email}`}
              aria-label="Send an email"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="text-muted transition-colors hover:text-accent"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: "transform", backfaceVisibility: "hidden" }}
          >
            <CodeCard />
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-2 transition-colors hover:text-foreground sm:flex"
      >
        <span className="font-mono-tight text-[10px] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <span className="relative flex h-9 w-5 justify-center rounded-full border border-border-strong pt-1.5">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-accent"
          />
        </span>
      </motion.a>
    </section>
  );
}

function CodeCard() {
  return (
    <div className="relative rounded-lg border border-border bg-surface shadow-xl shadow-black/5 contain-paint dark:shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono-tight text-xs text-muted-2">
          developer.ts
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono-tight text-[13px] leading-6">
        <code>
          <span className="text-muted-2">1</span>{"  "}
          <span style={{ color: "#c586c0" }}>const</span>{" "}
          <span style={{ color: "#4fc1ff" }}>developer</span> = {"{"}
          {"\n"}
          <span className="text-muted-2">2</span>{"    "}
          name:{" "}
          <span style={{ color: "#ce9178" }}>&quot;Syed Shaida Hussain&quot;</span>,
          {"\n"}
          <span className="text-muted-2">3</span>{"    "}
          role:{" "}
          <span style={{ color: "#ce9178" }}>&quot;Full-Stack Developer&quot;</span>,
          {"\n"}
          <span className="text-muted-2">4</span>{"    "}
          stack: [
          <span style={{ color: "#ce9178" }}>&quot;React&quot;</span>,{" "}
          <span style={{ color: "#ce9178" }}>&quot;Next.js&quot;</span>,{" "}
          <span style={{ color: "#ce9178" }}>&quot;Node&quot;</span>],
          {"\n"}
          <span className="text-muted-2">5</span>{"    "}
          focus:{" "}
          <span style={{ color: "#ce9178" }}>&quot;production-ready systems&quot;</span>,
          {"\n"}
          <span className="text-muted-2">6</span>{"    "}
          <span style={{ color: "#4fc1ff" }}>available</span>:{" "}
          <span style={{ color: "#569cd6" }}>true</span>,
          {"\n"}
          <span className="text-muted-2">7</span>{"  "}
          {"};"}
        </code>
      </pre>
      <div className="flex items-center justify-between border-t border-border px-5 py-3">
        <span className="font-mono-tight text-xs text-muted-2">
          ~/portfolio
        </span>
        <span className="font-mono-tight text-xs text-emerald-500">
          ● build passing
        </span>
      </div>
    </div>
  );
}
