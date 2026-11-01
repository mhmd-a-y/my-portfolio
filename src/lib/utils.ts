import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';

/**
 * Tracks which section is currently in view for nav highlighting.
 * Falls back to the first section id.
 */
export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.1, 0.5] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

/** Whether the CV download should be rendered. */
export function hasCv(): boolean {
  return Boolean(siteConfig.cvPath);
}

/** Safe mailto link builder. */
export function mailtoLink(): string {
  return siteConfig.email ? `mailto:${siteConfig.email}` : '';
}
