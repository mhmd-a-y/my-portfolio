import { GraduationCap, Award, BookOpen, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Education() {
  const { education } = siteConfig;

  return (
    <section id="education" className="section-anchor bg-ink-100/60 py-20 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="section-label">
            <span className="h-px w-6 bg-accent-500" />
            Education
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Education &amp; achievements</h2>
        </div>

        <div className="card p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent-50 text-accent-600">
              <GraduationCap className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-ink-900">{education.degree}</h3>
              <p className="mt-1 text-sm font-medium text-accent-700">{education.institution}</p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-ink-500">
                <MapPin className="h-3.5 w-3.5" />
                {education.location}
              </p>
              <p className="mt-1 text-sm text-ink-500">{education.studyPeriod}</p>

              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                {education.studyPeriod && (
                  <div className="rounded-md border border-ink-200 bg-ink-50 px-4 py-3">
                    <dt className="text-xs font-medium uppercase tracking-wide text-ink-500">Study period</dt>
                    <dd className="mt-1 text-sm text-ink-700">{education.studyPeriod}</dd>
                  </div>
                )}
                {education.currentYear && (
                  <div className="rounded-md border border-ink-200 bg-ink-50 px-4 py-3">
                    <dt className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-ink-500">
                      <BookOpen className="h-3.5 w-3.5" />
                      Current year
                    </dt>
                    <dd className="mt-1 text-sm text-ink-700">{education.currentYear}</dd>
                  </div>
                )}
                {education.cgpa && (
                  <div className="rounded-md border border-ink-200 bg-ink-50 px-4 py-3">
                    <dt className="text-xs font-medium uppercase tracking-wide text-ink-500">CGPA</dt>
                    <dd className="mt-1 text-sm text-ink-700">{education.cgpa}</dd>
                  </div>
                )}
                {education.graduationDate && (
                  <div className="rounded-md border border-ink-200 bg-ink-50 px-4 py-3">
                    <dt className="text-xs font-medium uppercase tracking-wide text-ink-500">
                      Expected graduation
                    </dt>
                    <dd className="mt-1 text-sm text-ink-700">{education.graduationDate}</dd>
                  </div>
                )}
                {education.deansList && (
                  <div className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3">
                    <dt className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-emerald-700">
                      <Award className="h-3.5 w-3.5" />
                      Recognition
                    </dt>
                    <dd className="mt-1 text-sm text-emerald-800">{education.deansList}</dd>
                  </div>
                )}
              </dl>

              {!education.studyPeriod && !education.currentYear && !education.cgpa && !education.graduationDate && !education.deansList && (
                <p className="mt-4 text-sm text-ink-400">
                  Additional details will be added once confirmed.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
