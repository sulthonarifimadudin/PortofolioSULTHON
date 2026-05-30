'use client';

import { SectionWrapper, StaggerChildren, StaggerItem } from '@/components/section-wrapper';
import { getExperiences } from '@/data/engineer';
import { Briefcase } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export function ExperienceEngineer() {
  const { t, lang } = useTranslation();
  const experiences = getExperiences(lang);

  return (
    <SectionWrapper id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            {t.engineer.experience.subtitle}
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.engineer.experience.title.split(' ')[0]}{' '}
            <span className="gradient-text">{t.engineer.experience.title.split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        <StaggerChildren className="relative" staggerDelay={0.15}>
          {/* Timeline line */}
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <StaggerItem key={i} className="relative mb-12 pl-16 last:mb-0">
              {/* Timeline dot */}
              <div className="timeline-dot" style={{ top: '6px' }} />

              <div className="glass rounded-2xl p-6 hover-lift">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Briefcase size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="ml-auto rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {exp.period}
                  </span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  );
}
