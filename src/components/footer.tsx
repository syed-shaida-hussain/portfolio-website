import { ArrowUp } from "lucide-react";
import { site } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const stack = ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-px mx-auto max-w-6xl py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono-tight text-sm text-foreground">
              SSH<span className="text-accent">.</span>
            </span>
            <span className="hidden h-3 w-px bg-border sm:inline-block" />
            <p className="text-xs text-muted-2">
              © {new Date().getFullYear()} {site.name}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-muted-2 transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted-2 transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <span className="h-3 w-px bg-border" />
            <a
              href="#home"
              className="group inline-flex items-center gap-1.5 text-xs text-muted-2 transition-colors hover:text-foreground"
            >
              Back to top
              <ArrowUp className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 border-t border-border pt-6 font-mono-tight text-[11px] text-muted-2">
          <span className="text-accent">$</span>
          <span>crafted with</span>
          {stack.map((tech, i) => (
            <span key={tech} className="flex items-center gap-2">
              <span className="rounded border border-border px-1.5 py-0.5 text-muted">
                {tech}
              </span>
              {i < stack.length - 1 ? (
                <span aria-hidden className="text-border-strong">
                  +
                </span>
              ) : null}
            </span>
          ))}
          <span
            aria-hidden
            className="ml-0.5 inline-block h-3 w-1.5 animate-pulse bg-accent"
          />
        </div>
      </div>
    </footer>
  );
}
