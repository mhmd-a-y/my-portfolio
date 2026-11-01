import { ArrowRight, Download, Github, Linkedin, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { hasCv } from '@/lib/utils';

export function Hero() {
  return (
    <section id="hero" className="relative section-anchor overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="animate-fade-up">
              <span className="section-label">
                <span className="h-px w-6 bg-accent-500" />
                Portfolio
              </span>
            </div>
            <h1 className="mt-5 animate-fade-up text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="mt-3 animate-fade-up text-xl font-medium text-accent-700 sm:text-2xl">
              {siteConfig.title}
            </p>
            <p className="mt-3 inline-flex animate-fade-up items-center gap-1.5 text-sm text-ink-500">
              <MapPin className="h-4 w-4" />
              {siteConfig.location}
            </p>

            <p className="mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-ink-600">
              {siteConfig.hero.intro}
            </p>

            <div className="mt-8 flex animate-fade-up flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                Explore My Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              {hasCv() && (
                <a href={siteConfig.cvPath} download className="btn-secondary">
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              )}
              {siteConfig.github && (
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              )}
            </div>

            <div className="mt-8 flex animate-fade-up items-center gap-5">
              {siteConfig.linkedin && (
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-1.5 text-sm font-medium"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              )}
              {siteConfig.github && (
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-1.5 text-sm font-medium"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="card animate-scale-in relative p-4 shadow-sm">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
