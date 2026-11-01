import { Cpu } from 'lucide-react';
import { siteConfig } from '@/config/site';

/** Initials placeholder shown when no profile photo is supplied. */
function ProfilePlaceholder() {
  return (
    <div className="flex h-32 w-32 items-center justify-center rounded-full border border-ink-200 bg-white">
      <span className="font-mono text-2xl font-semibold text-ink-500">{siteConfig.monogram}</span>
    </div>
  );
}

export function About() {
  const { body, currentlyInterestedIn } = siteConfig.about;

  return (
    <section id="about" className="section-anchor py-20 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex flex-col items-start gap-4">
              {siteConfig.profileImage ? (
                <img
                  src={siteConfig.profileImage}
                  alt={`${siteConfig.name}, ${siteConfig.title}`}
                  className="h-32 w-32 rounded-full border border-ink-200 object-cover"
                  loading="lazy"
                />
              ) : (
                <ProfilePlaceholder />
              )}
              <div>
                <span className="section-label">
                  <span className="h-px w-6 bg-accent-500" />
                  About
                </span>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">About me</h2>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-4 text-base leading-relaxed text-ink-600">
              {body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-ink-200 bg-white/70 p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-ink-700">
                <Cpu className="h-4 w-4 text-accent-600" />
                Currently interested in
              </h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {currentlyInterestedIn.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
