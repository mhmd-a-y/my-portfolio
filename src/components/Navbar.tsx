import { useEffect, useState } from 'react';
import { Menu, X, Download, Github, Linkedin } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useActiveSection, hasCv } from '@/lib/utils';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'learning', label: 'Learning' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const SECTION_IDS = ['about', 'projects', 'experience', 'skills', 'learning', 'education', 'contact'];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled ? 'border-b border-ink-200 bg-ink-50/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          onClick={close}
          className="font-mono text-sm font-semibold tracking-widest text-ink-900"
        >
          {siteConfig.monogram}
          <span className="text-accent-600">.</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-medium transition-colors duration-200 ${
                active === link.id ? 'text-accent-600' : 'text-ink-600 hover:text-ink-900'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          {siteConfig.github && (
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-md p-2 text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {siteConfig.linkedin && (
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-md p-2 text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {hasCv() && (
            <a href={siteConfig.cvPath} download className="btn-primary ml-1 !py-2 !px-4">
              <Download className="h-4 w-4" />
              CV
            </a>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-ink-700 transition-colors hover:bg-ink-100 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-200 bg-ink-50 lg:hidden">
          <div className="mx-auto flex max-w-content flex-col px-4 py-3 sm:px-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={close}
                className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  active === link.id ? 'bg-accent-50 text-accent-700' : 'text-ink-700 hover:bg-ink-100'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2 border-t border-ink-200 pt-3">
              {siteConfig.github && (
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="btn-secondary flex-1"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              )}
              {siteConfig.linkedin && (
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="btn-secondary flex-1"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              )}
              {hasCv() && (
                <a href={siteConfig.cvPath} download onClick={close} className="btn-primary flex-1">
                  <Download className="h-4 w-4" /> CV
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
