import { useState } from 'react';
import { projects, type Project } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const visible = projects.filter((p) => !p.hidden);

  return (
    <section id="projects" className="section-anchor bg-ink-100/60 py-20 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="section-label">
            <span className="h-px w-6 bg-accent-500" />
            Projects
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Featured projects</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-600">
            A selection of coursework, design, and personal projects across embedded systems, mechanical
            design, industrial exposure, and software development. Click any project to read the full details.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setActive} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
