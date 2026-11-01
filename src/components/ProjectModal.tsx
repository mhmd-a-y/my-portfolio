import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { Project } from '@/data/projects';
import { ProjectLinks } from '@/components/ProjectCard';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink-900/40 p-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="card animate-scale-in my-8 w-full max-w-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-ink-200 p-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-accent-600">{project.category}</p>
            <h3 className="mt-1.5 text-2xl font-bold text-ink-900">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-900"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-6">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="mb-5 aspect-[16/10] w-full rounded-md border border-ink-200 object-cover"
              loading="lazy"
            />
          )}

          <div className="space-y-5">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-700">Overview</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{project.description}</p>
            </div>

            {project.myContribution && (
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-700">My contribution</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{project.myContribution}</p>
              </div>
            )}

            {project.detailSections?.map((section) => (
              <div key={section.heading}>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-700">{section.heading}</h4>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-2 text-sm leading-relaxed text-ink-600">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-600">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-700">Technologies</h4>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-ink-200 bg-ink-50 px-2 py-0.5 text-xs text-ink-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.technicalDecisions && (
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-700">Technical decisions</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{project.technicalDecisions}</p>
              </div>
            )}

            {project.outcomes && (
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-700">Outcomes</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{project.outcomes}</p>
              </div>
            )}

            {project.lessonsLearned && (
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-700">Lessons learned</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{project.lessonsLearned}</p>
              </div>
            )}
          </div>

          <ProjectLinks project={project} />
        </div>
      </div>
    </div>
  );
}
