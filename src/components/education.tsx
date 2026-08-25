import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section className="container-px mx-auto max-w-6xl pb-16 sm:pb-24">
      <Reveal>
        <div className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-muted">
              <GraduationCap className="h-4.5 w-4.5" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                {education.degree}
              </p>
              <p className="text-sm text-muted">{education.school}</p>
            </div>
          </div>
          <div className="flex items-center gap-6 font-mono-tight text-xs text-muted-2 sm:text-right">
            <span>{education.period}</span>
            <span className="rounded-full border border-border px-2.5 py-1">
              CGPA {education.cgpa}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
