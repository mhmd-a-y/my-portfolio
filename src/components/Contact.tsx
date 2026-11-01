import { Mail, Linkedin, Github, Download, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { hasCv, mailtoLink } from '@/lib/utils';

export function Contact() {
  return (
    <section id="contact" className="section-anchor py-20 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="card overflow-hidden">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="p-8 sm:p-10">
              <span className="section-label">
                <span className="h-px w-6 bg-accent-500" />
                Contact
              </span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Let&rsquo;s talk</h2>
              <p className="mt-4 text-base leading-relaxed text-ink-600">
                I&rsquo;m actively seeking internship and engineering-related opportunities in R&amp;D,
                robotics, embedded systems, industrial automation, and product development. If you&rsquo;re
                recruiting or would like to discuss my work, I&rsquo;d be glad to hear from you.
              </p>

              {siteConfig.email && (
                <a
                  href={mailtoLink()}
                  className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-accent-700 transition-colors hover:text-accent-800"
                >
                  <Mail className="h-5 w-5" />
                  {siteConfig.email}
                </a>
              )}
            </div>

            <div className="flex flex-col justify-center gap-3 border-t border-ink-200 bg-ink-50/60 p-8 sm:p-10 md:border-l md:border-t-0">
              {hasCv() && (
                <a href={siteConfig.cvPath} download className="btn-primary">
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              )}
              {siteConfig.linkedin && (
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
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
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              {siteConfig.email && (
                <a href={mailtoLink()} className="btn-secondary">
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
