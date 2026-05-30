'use client';

import Image from 'next/image';
import { SectionWrapper, StaggerChildren, StaggerItem } from '@/components/section-wrapper';
import { getFeaturedWorks } from '@/data/creator';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export function FeaturedCreator() {
  const { t, lang } = useTranslation();
  const featuredWorks = getFeaturedWorks(lang);

  return (
    <SectionWrapper id="featured" className="py-28 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-heading text-sm uppercase tracking-widest text-[#7d562d]">
            {t.creator.featured.subtitle}
          </span>
          <h2 className="font-heading text-4xl font-bold sm:text-5xl text-foreground">
            {t.creator.featured.title.split(' ')[0]}{' '}
            <span className="font-script text-[#aa867c] opacity-90 text-5xl">
              {t.creator.featured.title.split(' ').slice(1).join(' ')}
            </span>
          </h2>
        </div>

        <StaggerChildren className="space-y-24" staggerDelay={0.15}>
          {featuredWorks.map((work, i) => (
            <StaggerItem key={work.id}>
              <div
                className={`group grid items-center gap-12 lg:grid-cols-2 ${
                  i % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden rounded-2xl shadow-lg bg-white p-2 ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[16/10] overflow-hidden rounded-xl">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover transition-all duration-1000 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? 'lg:col-start-1 lg:text-right' : ''}`}>
                  <span className="mb-3 inline-block font-bold text-xs uppercase tracking-widest text-[#d8a47f]">
                    {work.category}
                  </span>
                  <h3 className="mb-4 font-script text-4xl text-foreground">{work.title}</h3>
                  <p className="mb-4 text-sm font-sans font-medium text-[#7d562d]">
                    {work.client} — {work.date}
                  </p>
                  <p className="mb-8 font-sans text-base leading-relaxed text-[#4d4540] max-w-md mx-auto lg:mx-0">
                    {work.description}
                  </p>
                  <button
                    className="group/btn inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-[#d8a47f] transition-colors hover:text-[#7d562d]"
                  >
                    View Project
                    <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  );
}
