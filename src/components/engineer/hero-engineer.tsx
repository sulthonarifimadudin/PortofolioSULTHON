'use client';

import { motion } from 'framer-motion';
import { ArrowDown, FileDown, Code2, Sparkles } from 'lucide-react';
import { SectionWrapper } from '@/components/section-wrapper';
import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';

export function HeroEngineer() {
  const { t } = useTranslation();

  return (
    <SectionWrapper className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="gradient-mesh" />
      <div
        className="gradient-mesh-orb"
        style={{
          width: '400px',
          height: '400px',
          background: 'oklch(0.623 0.214 259.815 / 0.15)',
          top: '20%',
          left: '30%',
          animationDelay: '-2s',
          animationDuration: '12s',
        }}
      />
      <div
        className="gradient-mesh-orb"
        style={{
          width: '300px',
          height: '300px',
          background: 'oklch(0.541 0.281 293.009 / 0.12)',
          bottom: '20%',
          right: '20%',
          animationDelay: '-6s',
          animationDuration: '14s',
        }}
      />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side: Text */}
          <div className="text-left">
            {/* Badge */}
            <motion.div
              className="mb-8 inline-flex items-center gap-2 rounded-full glass px-5 py-2.5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Code2 size={14} className="text-primary" />
              <span className="text-sm font-medium text-foreground/80">{t.engineer.hero.role}</span>
              <Sparkles size={14} className="text-accent" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="mb-6 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="gradient-text">{t.engineer.hero.headline}</span>
              <br />
              <span className="text-3xl font-bold text-foreground/90 sm:text-4xl lg:text-5xl mt-2 block">
                {t.engineer.hero.subheadline}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mb-10 max-w-xl text-lg text-muted-foreground sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {t.engineer.hero.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                {t.engineer.hero.cta1}
                <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl glass px-8 py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-primary/5">
                <FileDown size={16} />
                CV
              </button>
            </motion.div>
          </div>

          {/* Right Side: Image Card */}
          <motion.div 
            className="relative mx-auto w-full max-w-md lg:ml-auto lg:mr-0"
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="glass-strong relative overflow-hidden rounded-[2.5rem] p-4 shadow-2xl">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-muted/20">
                <Image
                  src="/FOTO2/ENGINEER/Foto diri/foto 1.jpg"
                  alt="Sulthon Profile"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Overlay content on the image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-2xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20 bg-background/50">
                          <Image src="/FOTO2/ENGINEER/Foto diri/foto 1.jpg" alt="Avatar" fill className="object-cover" unoptimized />
                       </div>
                       <div>
                         <p className="text-sm font-bold leading-none text-foreground">@arifsulthaan</p>
                         <div className="mt-1 flex items-center gap-1.5">
                           <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                           </span>
                           <span className="text-xs text-muted-foreground">Online</span>
                         </div>
                       </div>
                    </div>
                    <button className="rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background hover:bg-foreground/90 transition-colors">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating tech icons */}
            <motion.div
              className="absolute -right-6 top-1/4 z-20 hidden sm:block"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <div className="glass rounded-2xl p-4 shadow-lg backdrop-blur-xl border border-white/20 dark:border-white/10">
                <span className="text-2xl drop-shadow-md">⚛️</span>
              </div>
            </motion.div>
            <motion.div
              className="absolute -left-8 bottom-1/3 z-20 hidden sm:block"
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            >
              <div className="glass rounded-2xl p-4 shadow-lg backdrop-blur-xl border border-white/20 dark:border-white/10">
                <span className="text-2xl drop-shadow-md">🔧</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={20} className="text-muted-foreground" />
      </motion.div>
    </SectionWrapper>
  );
}
