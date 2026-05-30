'use client';

import { SectionWrapper, StaggerChildren, StaggerItem } from '@/components/section-wrapper';
import { getCertificates } from '@/data/engineer';
import { Award, ExternalLink } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export function CertificatesEngineer() {
  const { t, lang } = useTranslation();
  const certificates = getCertificates(lang);

  return (
    <SectionWrapper className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            {t.engineer.certificates.subtitle}
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.engineer.certificates.title.split(' ')[0]}{' '}
            <span className="gradient-text">{t.engineer.certificates.title.split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {certificates.map((cert) => (
            <StaggerItem key={cert.name}>
              <div className="glass group relative overflow-hidden rounded-2xl p-6 hover-lift">
                {/* Ribbon */}
                <div className="absolute -right-8 -top-2 rotate-45 bg-primary/10 px-10 py-1">
                  <Award size={12} className="mx-auto text-primary" />
                </div>

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Award size={22} className="text-primary" />
                </div>

                <h3 className="mb-1 text-sm font-bold leading-snug">{cert.name}</h3>
                <p className="mb-1 text-xs text-muted-foreground">{cert.issuer}</p>
                <p className="mb-4 text-xs font-medium text-primary/70">{cert.date}</p>

                {cert.link && (
                  <a
                    href={cert.link}
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Verify <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  );
}
