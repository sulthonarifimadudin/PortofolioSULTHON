'use client';

import Image from 'next/image';
import { SectionWrapper, StaggerChildren, StaggerItem } from '@/components/section-wrapper';
import { Code2, Cpu, Globe, Coffee } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

const stats = [
  { icon: Code2, value: '50+', label: 'Projects Built' },
  { icon: Globe, value: '3+', label: 'Years Experience' },
  { icon: Cpu, value: '15+', label: 'IoT Prototypes' },
  { icon: Coffee, value: '∞', label: 'Coffee Consumed' },
];

export function AboutEngineer() {
  const { t, lang } = useTranslation();

  const getStatLabel = (label: string) => {
    if (lang === 'en') return label;
    switch(label) {
      case 'Projects Built': return 'Proyek Dibuat';
      case 'Years Experience': return 'Tahun Pengalaman';
      case 'IoT Prototypes': return 'Prototipe IoT';
      case 'Coffee Consumed': return 'Kopi Diminum';
      default: return label;
    }
  };

  return (
    <SectionWrapper id="about" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            {t.engineer.about.subtitle}
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.engineer.about.title}
          </h2>
        </div>

        {/* Bento Grid */}
        <StaggerChildren className="bento-grid" staggerDelay={0.08}>
          {/* Photo Card */}
          <StaggerItem className="bento-row-2 aspect-[3/4]">
            <div className="glass relative h-full w-full overflow-hidden rounded-2xl hover-lift">
              <Image
                src="/FOTO2/ENGINEER/Foto diri/foto 2.jpg"
                alt="Sulthon Arif I"
                fill
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 640px) 100vw, 25vw"
                unoptimized
              />
            </div>
          </StaggerItem>

          {/* Main Bio Card */}
          <StaggerItem className="bento-span-3 bento-row-2">
            <div className="glass h-full rounded-2xl p-8 hover-lift">
              <h3 className="mb-4 text-xl font-bold">Hi, I&apos;m Sulthon 👋</h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                {t.engineer.about.p1}
              </p>
              <p className="leading-relaxed text-muted-foreground">
                {t.engineer.about.p2}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Full-Stack', 'IoT', 'UI/UX', 'Problem Solver'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Stats Cards */}
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="glass flex h-full flex-col items-center justify-center rounded-2xl p-6 text-center hover-lift">
                <stat.icon size={24} className="mb-3 text-primary" />
                <span className="text-3xl font-black gradient-text">{stat.value}</span>
                <span className="mt-1 text-xs font-medium text-muted-foreground">{getStatLabel(stat.label)}</span>
              </div>
            </StaggerItem>
          ))}

          {/* Location Card */}
          <StaggerItem className="bento-span-2">
            <div className="glass flex h-full items-center gap-6 rounded-2xl p-6 hover-lift">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-3xl">
                🇮🇩
              </div>
              <div>
                <p className="font-semibold">Based in Bandung, Jawa Barat</p>
                <p className="text-sm text-muted-foreground">Available for remote work worldwide</p>
              </div>
            </div>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </SectionWrapper>
  );
}
