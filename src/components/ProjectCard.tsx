import type { Project } from '@/data/projects';
import { ArrowUpRight, ExternalLink, Github, FileText } from 'lucide-react';

function ProjectThumbnail({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-contain"
        loading="lazy"
      />
    );
  }
  // Neutral patterned placeholder — derived from project id for visual variety.
  return (
    <div className="relative h-full w-full overflow-hidden bg-ink-100">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id={`p-${project.id}`} width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M16 0 L0 0 0 16" fill="none" stroke="#cbd5e1" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="200" height="120" fill={`url(#p-${project.id})`} />
        <circle cx="100" cy="60" r="26" fill="none" stroke="#94a3b8" strokeWidth="1.2" />
        <line x1="60" y1="60" x2="140" y2="60" stroke="#94a3b8" strokeWidth="1.2" />
        <line x1="100" y1="20" x2="100" y2="100" stroke="#94a3b8" strokeWidth="1.2" />
      </svg>
      <div className="absolute bottom-2 left-3 font-mono text-[10px] uppercase tracking-widest text-ink-400">
        {project.category.split(' / ')[0]}
      </div>
    </div>
  );
}

interface Props {
  project: Project;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: Props) {
  const statusStyles: Record<string, string> = {
    Completed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'In Progress': 'bg-amber-50 text-amber-700 border-amber-200',
    'Design Concept': 'bg-accent-50 text-accent-700 border-accent-200',
  };

  return (
    <article className="card group flex flex-col overflow-hidden hover:border-accent-300 hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-ink-200 bg-ink-100">
        <ProjectThumbnail project={project} />
        <span
          className={`absolute right-3 top-3 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
            statusStyles[project.status] ?? 'bg-ink-100 text-ink-600 border-ink-200'
          }`}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-xs uppercase tracking-wider text-accent-600">{project.category}</p>
        <h3 className="mt-2 text-lg font-semibold text-ink-900">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{project.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded border border-ink-200 bg-ink-50 px-2 py-0.5 text-[11px] text-ink-600"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded border border-ink-200 bg-ink-50 px-2 py-0.5 text-[11px] text-ink-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => onOpen(project)}
          className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
        >
          View Project
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </article>
  );
}

/** Optional link row used in the modal footer. */
export function ProjectLinks({ project }: { project: Project }) {
  const links: { href: string; label: string; icon: typeof Github }[] = [];
  if (project.github) links.push({ href: project.github, label: 'Code', icon: Github });
  if (project.demo) links.push({ href: project.demo, label: 'Demo', icon: ExternalLink });
  if (project.report) links.push({ href: project.report, label: 'Report', icon: FileText });
  if (links.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3 border-t border-ink-200 pt-4">
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <Icon className="h-4 w-4" />
          {label}
        </a>
      ))}
    </div>
  );
}
