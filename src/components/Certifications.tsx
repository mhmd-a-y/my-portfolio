import { useState } from 'react';
import { Award, ExternalLink, FileCheck } from 'lucide-react';
import { certifications, type Certification } from '@/data/certifications';
import { CertificationModal } from '@/components/CertificationModal';

export function Certifications() {
  const [active, setActive] = useState<Certification | null>(null);

  return (
    <section id="learning" className="section-anchor bg-ink-100/60 py-20 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="section-label">
            <span className="h-px w-6 bg-accent-500" />
            Learning
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Certifications &amp; technical learning</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-600">
            Structured learning that has strengthened my computer science foundation and led to practical project work.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {certifications.map((certification) => (
            <article
              key={certification.id}
              className="card group flex flex-col overflow-hidden border-accent-200 hover:border-accent-300 hover:shadow-md"
            >
              <div className="relative flex items-center gap-4 border-b border-ink-200 bg-white p-5 sm:p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-accent-200 bg-accent-50 text-accent-700">
                  <Award className="h-7 w-7" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent-600">CS50x / HarvardX</p>
                  <p className="mt-1 text-sm font-medium text-ink-700">{certification.credential}</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-sm font-medium text-ink-500">{certification.institution}</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">{certification.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{certification.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {certification.skills.slice(0, 4).map((skill) => (
                    <span key={skill} className="rounded border border-ink-200 bg-ink-50 px-2 py-0.5 text-[11px] text-ink-600">
                      {skill}
                    </span>
                  ))}
                  {certification.skills.length > 4 && (
                    <span className="rounded border border-ink-200 bg-ink-50 px-2 py-0.5 text-[11px] text-ink-500">
                      +{certification.skills.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setActive(certification)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
                  >
                    Explore learning
                    <ExternalLink className="h-4 w-4" />
                  </button>
                  <a
                    href={certification.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-700 transition-colors hover:text-accent-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
                  >
                    <FileCheck className="h-4 w-4" />
                    View Certificate
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <CertificationModal certification={active} onClose={() => setActive(null)} />
    </section>
  );
}
