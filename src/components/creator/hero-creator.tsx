'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { TiktokIcon } from '@/components/ui/brand-icons';
import { useTranslation } from '@/hooks/use-translation';

export function HeroCreator() {
  const { t, lang } = useTranslation();

  return (
    <SectionWrapper className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Film grain and background */}
      <div className="absolute inset-0 bg-background" />
      <div className="film-grain" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side: Text */}
          <div className="text-left relative z-20">
            {/* Headline Group */}
            <div className="relative mb-6">
              <motion.h1
                className="flex flex-col relative z-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="font-heading text-6xl font-black tracking-tighter text-foreground sm:text-7xl lg:text-[7rem] leading-none uppercase">
                  ESTE.
                </span>
                <span 
                  className="font-script text-6xl sm:text-7xl lg:text-[6.5rem] text-[#aa867c] -mt-6 sm:-mt-8 lg:-mt-12 ml-4 sm:ml-12 lg:ml-16 relative z-30 transform -rotate-2"
                  style={{
                    textShadow: '4px 4px 0 var(--background), -4px -4px 0 var(--background), 4px -4px 0 var(--background), -4px 4px 0 var(--background), 0px 4px 0 var(--background), 0px -4px 0 var(--background), 4px 0px 0 var(--background), -4px 0px 0 var(--background)'
                  }}
                >
                  Photograph
                </span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              className="mt-10 mb-8 max-w-md font-sans text-base leading-relaxed text-[#4d4540]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {lang === 'id' 
                ? 'Pengguna & antusias Fuji. Mengkhususkan diri dalam fotografi potret dan model. Mengabadikan momen otentik, dari memori kelulusan yang indah hingga lamaran yang mengharukan.' 
                : 'Fuji user & enthusiast. Specializing in portrait and model photography. Capturing authentic moments, from beautiful graduation memories to heartwarming engagements.'}
            </motion.p>

            {/* Socials & Gear */}
            <motion.div 
              className="mb-10 flex items-center gap-6 text-[#18120d]/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a href="https://instagram.com/arifsulthaan" target="_blank" rel="noreferrer" className="hover:text-[#18120d] transition-colors" title="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://tiktok.com/@arifsulthaan" target="_blank" rel="noreferrer" className="hover:text-[#18120d] transition-colors" title="TikTok">
                <TiktokIcon className="w-6 h-6" />
              </a>
              <div className="h-5 w-px bg-[#18120d]/20" /> {/* Divider */}
              <div className="flex items-center gap-2 hover:text-[#18120d] transition-colors cursor-default" title="Main Gear">
                <div className="flex items-center">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Fujifilm_logo.svg" 
                    alt="Fujifilm" 
                    className="h-4 sm:h-5 opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  />
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.button
              onClick={() => document.getElementById('photography')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative flex items-center gap-2 rounded-full bg-[#18120d] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#2d2621] hover:shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {t.creator.hero.cta1}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </motion.button>
          </div>

          {/* Right Side: Image Card (Matching Engineer Mockup) */}
          <motion.div 
            className="relative mx-auto w-full max-w-md lg:ml-auto lg:mr-0"
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="bg-white/40 backdrop-blur-md relative overflow-hidden rounded-[2.5rem] p-4 shadow-2xl border border-white/60">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-[#f0ede6]">
                <Image
                  src="/FOTO2/CREATIVE/foto diri/foto 1.jpg"
                  alt="Este Photograph Profile"
                  fill
                  className="object-cover object-bottom transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                
                {/* Overlay content on the image */}
                <div className="absolute bottom-12 left-6 right-6">
                  <div className="bg-white/20 backdrop-blur-lg border border-white/20 rounded-2xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white/20 bg-black/20">
                          <Image src="/FOTO2/CREATIVE/foto diri/foto 1.jpg" alt="Avatar" fill className="object-cover" />
                       </div>
                       <div>
                         <p className="text-sm font-heading font-bold leading-none text-white">@arifsulthaan</p>
                         <div className="mt-1 flex items-center gap-1.5">
                           <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d8a47f] opacity-75"></span>
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d8a47f]"></span>
                           </span>
                           <span className="text-xs font-sans text-white/80">Available</span>
                         </div>
                       </div>
                    </div>
                    <a 
                      href="https://estephotograph.my.id"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white px-4 py-2 text-xs font-bold font-heading text-[#7d562d] hover:bg-[#f0ede6] transition-colors"
                    >
                      Book
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating icon */}
            <motion.div
              className="absolute -right-6 top-1/4 z-20 hidden sm:block"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <div className="bg-white/60 rounded-2xl p-4 shadow-lg backdrop-blur-xl border border-white">
                <span className="text-2xl drop-shadow-md">📸</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
