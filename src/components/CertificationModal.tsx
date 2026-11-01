import { useEffect } from 'react';
import { Award, FileCheck, Globe, Play, X } from 'lucide-react';
import type { Certification } from '@/data/certifications';

interface Props {
  certification: Certification | null;
  onClose: () => void;
}

export function CertificationModal({ certification, onClose }: Props) {
  useEffect(() => {
    if (!certification) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [certification, onClose]);

  if (!certification) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink-900/40 p-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={certification.title}
    >
      <div className="card animate-scale-in my-8 w-full max-w-2xl bg-white shadow-xl" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-4 border-b border-ink-200 p-6">
          <div className="flex items-start gap-3">
            <Award className="mt-1 h-5 w-5 shrink-0 text-accent-600" />
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-accent-600">Certification / CS50x</p>
              <h3 className="mt-1.5 text-2xl font-bold text-ink-900">{certification.title}</h3>
            </div>
          </div>
          <button type="button" onClick={onClose} className="rounded-md p-2 text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-900" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-6">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-700">Certificate overview</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{certification.description}</p>
              <p className="mt-2 text-sm font-medium text-ink-700">{certification.institution} · {certification.credential}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-700">Skills and knowledge gained</h4>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-600">
                {certification.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>

            <div className="border-t border-ink-200 pt-5">
              <p className="font-mono text-xs uppercase tracking-wider text-accent-600">{certification.finalProject.type}</p>
              <h4 className="mt-1.5 text-xl font-semibold text-ink-900">{certification.finalProject.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{certification.finalProject.description}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-700">Main project features</h4>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-600">
                {certification.finalProject.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-700">Technologies and learning</h4>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {certification.finalProject.technologies.map((technology) => (
                  <span key={technology} className="rounded border border-ink-200 bg-ink-50 px-2 py-0.5 text-xs text-ink-600">{technology}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 border-t border-ink-200 pt-5">
              <a href={certification.finalProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Globe className="h-4 w-4" />
                Visit Live Website
              </a>
              <a href={certification.finalProject.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Play className="h-4 w-4" />
                Watch Project Demonstration
              </a>
              <a href={certification.certificateUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <FileCheck className="h-4 w-4" />
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
