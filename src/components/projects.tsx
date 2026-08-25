import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section
      id="projects"
      className="container-px mx-auto max-w-6xl border-t border-border py-16 sm:py-24"
    >
      <SectionHeading
        number="04"
        title="Featured Projects"
        description="A selection of full-stack platforms I've designed, built, and shipped end to end."
      />

      <div className="space-y-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
