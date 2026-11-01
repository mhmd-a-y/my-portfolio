import { skillGroups, currentlyExploring } from '@/data/experience';
import { Cpu, Wrench, Settings, Code2, Compass } from 'lucide-react';

const CATEGORY_ICONS: Record<string, typeof Cpu> = {
  'Industrial Automation & Controls': Settings,
  'Embedded Systems & Electronics': Cpu,
  'CAD & Engineering Design': Wrench,
  'Programming & Software': Code2,
  'Engineering Competencies': Settings,
  'Soft Skills': Compass,
};

export function Skills() {
  return (
    <>
      <section id="skills" className="section-anchor bg-ink-100/60 py-20 sm:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <span className="section-label">
              <span className="h-px w-6 bg-accent-500" />
              Skills
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Technical skills</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-600">
              Grouped by area. Skills are listed honestly at their actual level of familiarity — practical
              experience is distinguished from introductory knowledge.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = CATEGORY_ICONS[group.category] ?? Code2;
              return (
                <div key={group.category} className="card p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-50 text-accent-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-semibold text-ink-900">{group.category}</h3>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex items-start gap-2.5 text-sm text-ink-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {currentlyExploring.enabled && (
        <section id="learning" className="section-anchor py-20 sm:py-24">
          <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
            <div className="card border-accent-200 bg-accent-50/40 p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white text-accent-600 ring-1 ring-accent-200">
                  <Compass className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <span className="section-label">
                    <span className="h-px w-6 bg-accent-500" />
                    Currently Exploring
                  </span>
                  <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{currentlyExploring.title}</h2>
                  <span className="mt-2 inline-block rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[11px] font-medium text-amber-700">
                    {currentlyExploring.status}
                  </span>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-600">
                    {currentlyExploring.concept}
                  </p>

                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {currentlyExploring.plan.map((step, i) => (
                      <div
                        key={step}
                        className="flex items-center gap-2 rounded-md border border-ink-200 bg-white px-3 py-2 text-sm text-ink-600"
                      >
                        <span className="font-mono text-xs text-accent-600">{String(i + 1).padStart(2, '0')}</span>
                        {step}
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
