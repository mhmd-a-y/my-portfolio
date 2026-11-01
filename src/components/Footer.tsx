import { Linkedin, Github } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200 bg-ink-50">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-sm text-ink-500">
          <span className="font-semibold text-ink-700">{siteConfig.name}</span>{' '}
          &middot; &copy; {year}
        </div>

        <div className="flex items-center gap-3">
          {siteConfig.linkedin && (
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-md p-2 text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {siteConfig.github && (
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-md p-2 text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
