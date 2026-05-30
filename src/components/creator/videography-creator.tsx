'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, StaggerChildren, StaggerItem } from '@/components/section-wrapper';
import { getReels } from '@/data/creator';
import { useTranslation } from '@/hooks/use-translation';
import { InstagramIcon, TiktokIcon } from '@/components/ui/brand-icons';

export function VideographyCreator() {
  const { t, lang } = useTranslation();
  const reels = getReels(lang);
  const [visibleCount, setVisibleCount] = useState(4);

  const visibleReels = reels.slice(0, visibleCount);

  return (
    <SectionWrapper id="videography" className="py-28 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-heading text-sm uppercase tracking-widest text-primary">
            {t.creator.videography.subtitle}
          </span>
          <h2 className="font-heading text-4xl font-bold sm:text-5xl text-foreground">
            {t.creator.videography.title.split(' ')[0]}{' '}
            <span className="font-script text-[#aa867c] opacity-90 text-5xl">
              {t.creator.videography.title.split(' ').slice(1).join(' ')}
            </span>
          </h2>
        </div>

        {/* Reels Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:pb-24" staggerDelay={0.15}>
          <AnimatePresence>
            {visibleReels.map((reel, i) => {
              return (
                <StaggerItem key={reel.id}>
                  <div
                    className={`group flex flex-col lg:flex-row ${
                      i % 2 === 0 ? 'lg:flex-row-reverse text-right' : 'text-left'
                    } items-center lg:items-start gap-6 ${
                      i % 2 === 1 ? 'lg:translate-y-24' : ''
                    }`}
                  >
                    {/* Video Cover / Player */}
                    <div className="relative w-full max-w-[320px] lg:w-[260px] xl:w-[300px] shrink-0 aspect-[9/16] overflow-hidden rounded-3xl shadow-2xl border-4 border-[#f5f2eb] bg-black">
                      {reel.localVideo ? (
                        <>
                          {/* Platform Icon Badge */}
                          <div className="absolute top-4 right-4 z-10 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center p-2 shadow-lg border border-white/20">
                            {reel.platform === 'instagram' ? (
                              <InstagramIcon className="w-full h-full text-white" />
                            ) : (
                              <TiktokIcon className="w-full h-full text-white" />
                            )}
                          </div>
                          
                          <video
                            src={`${reel.localVideo}#t=0.001`}
                            controls
                            className="h-full w-full object-cover"
                            preload="metadata"
                          />
                        </>
                      ) : (
                        <a 
                          href={reel.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-full h-full block group/image"
                        >
                          {/* Platform Icon Badge */}
                          <div className="absolute top-4 right-4 z-10 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center p-2 shadow-lg border border-white/20">
                            {reel.platform === 'instagram' ? (
                              <InstagramIcon className="w-full h-full text-white" />
                            ) : (
                              <TiktokIcon className="w-full h-full text-white" />
                            )}
                          </div>

                          <Image
                            src={reel.coverImage}
                            alt={reel.title}
                            fill
                            className="object-cover transition-all duration-700 group-hover/image:scale-105 opacity-80 group-hover/image:opacity-100"
                          />
                          {/* Play Button Icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-12 w-12 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-white/30 backdrop-blur-md shadow-lg border border-white/40 transition-transform duration-300 group-hover/image:scale-110">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 w-5 h-5 lg:w-6 lg:h-6">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                            </div>
                          </div>
                        </a>
                      )}
                    </div>

                    {/* Content */}
                    <div className={`flex flex-col flex-1 py-2 ${i % 2 === 0 ? 'items-end' : 'items-start'}`}>
                      <span className="mb-2 inline-block font-bold text-xs uppercase tracking-widest text-[#d8a47f]">
                        {reel.category}
                      </span>
                      <h3 className="mb-2 text-2xl font-bold text-[#2b2724]">
                        {reel.title.split(' ')[0]}{' '}
                        <span className="font-script text-3xl text-[#aa867c] opacity-90 font-normal">
                          {reel.title.split(' ').slice(1).join(' ')}
                        </span>
                      </h3>
                      <p className="mb-3 text-sm font-sans font-medium text-[#7d562d]">
                        {reel.platform.charAt(0).toUpperCase() + reel.platform.slice(1)} — {reel.date}
                      </p>
                      <p className="mb-4 font-sans text-sm leading-relaxed text-[#4d4540]">
                        {reel.description}
                      </p>
                      <a
                        href={reel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-[#d8a47f] transition-colors hover:text-[#7d562d]"
                      >
                        VIEW ORIGINAL
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </AnimatePresence>
        </StaggerChildren>

        {/* Load More Button */}
        {visibleCount < reels.length && (
          <div className="mt-20 flex justify-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 font-heading text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105"
            >
              <span className="relative z-10">Load More</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform duration-300 group-hover:translate-y-1"><path d="M6 9l6 6 6-6"/></svg>
              <div className="absolute inset-0 z-0 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
