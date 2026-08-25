"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="bg-noise relative overflow-hidden border-t border-border"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden />
      <div className="container-px mx-auto max-w-6xl py-16 sm:py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <Reveal>
            <span className="font-mono-tight text-sm text-accent">06 — Contact</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Let&apos;s build something great.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              I&apos;m currently open to new opportunities and interesting
              projects. If you have something in mind, or just want to talk
              shop, my inbox is open.
            </p>

            <div className="mt-10 space-y-4">
              <ContactLink
                icon={<Mail className="h-4 w-4" />}
                label={site.email}
                href={`mailto:${site.email}`}
              />
              <ContactLink
                icon={<LinkedinIcon className="h-4 w-4" />}
                label="LinkedIn"
                href={site.linkedin}
              />
              <ContactLink
                icon={<GithubIcon className="h-4 w-4" />}
                label="GitHub"
                href={site.github}
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-lg border border-border bg-surface p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  id="name"
                  value={name}
                  onChange={setName}
                  type="text"
                  required
                />
                <Field
                  label="Email"
                  id="email"
                  value={email}
                  onChange={setEmail}
                  type="email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium text-muted-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-2 focus:border-accent focus:ring-2 focus:ring-accent/15"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background sm:w-auto"
              >
                <span className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-400 ease-out group-hover:translate-x-0" />
                <span className="relative">Send Message</span>
                <Send className="relative h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-3 text-sm text-foreground"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors group-hover:border-accent/40 group-hover:text-accent">
        {icon}
      </span>
      <span className="border-b border-transparent transition-colors group-hover:border-border-strong">
        {label}
      </span>
      <ArrowUpRight className="h-3.5 w-3.5 text-muted-2 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
    </a>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type,
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-muted-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-2 focus:border-accent focus:ring-2 focus:ring-accent/15"
      />
    </div>
  );
}
