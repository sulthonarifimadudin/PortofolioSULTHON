'use client';

import { SectionWrapper } from '@/components/section-wrapper';
import { getTechStack } from '@/data/engineer';
import { useTranslation } from '@/hooks/use-translation';

import { TechIcon } from '@/components/ui/tech-icon';

const TechBadge = ({ tech }: { tech: any }) => (
  <div className="flex items-center gap-4 rounded-full border border-border bg-card/40 px-8 py-5 shadow-sm backdrop-blur-sm transition-all hover:bg-card hover:shadow-md hover:scale-105 w-max shrink-0 cursor-default">
    <TechIcon name={tech.name} />
    <span className="font-semibold text-lg">{tech.name}</span>
  </div>
);

const MarqueeRow = ({ items, reverse = false }: { items: any[], reverse?: boolean }) => (
  <div className="relative flex overflow-hidden w-full group py-4">
    <div className={`flex shrink-0 gap-6 px-3 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused]`}>
      {[...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items].map((tech, i) => (
        <TechBadge key={`${tech.name}-${i}`} tech={tech} />
      ))}
    </div>
  </div>
);

export function TechStackEngineer() {
  const { t, lang } = useTranslation();
  const techStack = getTechStack(lang);
  
  // Split into two rows
  const mid = Math.ceil(techStack.length / 2);
  const row1 = techStack.slice(0, mid);
  const row2 = techStack.slice(mid);

  return (
    <SectionWrapper className="py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl relative">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            {t.engineer.techStack.subtitle}
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.engineer.techStack.title.split(' ')[0]}{' '}
            <span className="gradient-text">{t.engineer.techStack.title.split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        <div className="relative flex flex-col gap-5 max-w-6xl mx-auto mt-8">
          {/* Top Marquee */}
          <MarqueeRow items={row1} />

          {/* Bottom Marquee */}
          <MarqueeRow items={row2} reverse={true} />
          
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>
    </SectionWrapper>
  );
}
