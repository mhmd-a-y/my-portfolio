import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experiences } from '@/data/experience';

export function Experience() {
  const visible = experiences.filter((e) => !e.hidden);

  return (
    <section id="experience" className="section-anchor py-20 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="section-label">
            <span className="h-px w-6 bg-accent-500" />
            Experience
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Industrial experience</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-600">
            Practical industrial exposure in the Cranes Department at Sea Ports Corporation, covering crane
            control, automation, and maintenance of large port equipment.
          </p>
        </div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-0 top-2 hidden h-full w-px bg-ink-200 sm:block sm:left-[7rem]" />

          <div className="space-y-10">
            {visible.map((exp) => (
              <div key={exp.id} className="relative sm:pl-32">
                {/* date marker */}
                <div className="absolute left-0 top-1 hidden items-start gap-2 sm:flex sm:w-28">
                  <span className="font-mono text-xs text-ink-500">
                    {exp.dates.start}
                    <br />
                    To
                    <br />
                    {exp.dates.end}
                  </span>
                </div>
                <span className="absolute left-[7rem] top-2 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent-500 bg-white sm:block" />

                <div className="card p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-500">
                    <span className="inline-flex items-center gap-1.5 font-medium text-ink-700">
                      <Briefcase className="h-4 w-4 text-accent-600" />
                      {exp.organization}
                    </span>
                    <span className="text-ink-300">•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                    <span className="text-ink-300">•</span>
                    <span>{exp.department}</span>
                    <span className="text-ink-300">•</span>
                    <span>{exp.role}</span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink-600">{exp.summary}</p>

                  {/* mobile date */}
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-ink-500 sm:hidden">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.dates.start} To {exp.dates.end}
                  </p>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    {exp.areas.map((area) => (
                      <div key={area.heading} className="border-l-2 border-accent-200 pl-4">
                        <h4 className="text-sm font-semibold text-ink-800">{area.heading}</h4>
                        <ul className="mt-2 space-y-1.5">
                          {area.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-ink-600">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-400" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
