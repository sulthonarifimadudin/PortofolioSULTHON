'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { useTranslation } from '@/hooks/use-translation';
import { useRef } from 'react';

export function GearCreator() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <SectionWrapper id="gear" className="py-24 lg:py-32 bg-[#f8f6f3]">
      <div className="mx-auto max-w-7xl px-6" ref={containerRef}>
        {/* Header */}
        <div className="mb-20 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <span className="font-heading text-sm font-bold tracking-[0.2em] uppercase text-[#7d562d]">
              {t.creator.gear.subtitle}
            </span>
            <h2 className="font-heading text-4xl font-bold sm:text-5xl text-foreground flex flex-wrap justify-center items-center gap-3">
              <span>{t.creator.gear.title.split(' ')[0]}</span>
              <span className="font-script text-[#aa867c] opacity-90 text-5xl sm:text-6xl">
                {t.creator.gear.title.split(' ').slice(1).join(' ')}
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div 
            className="relative h-[500px] lg:h-[700px] w-full rounded-[2rem] overflow-hidden"
            style={{ y: y1, scale }}
          >
            <img 
              src="/FOTO2/CREATIVE/-1499711324121212121.jpg" 
              alt="Fujifilm X-T200" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#18120d]/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Fujifilm_logo.svg" 
                alt="Fujifilm" 
                className="h-6 mb-4 filter invert brightness-0 opacity-90"
              />
            </div>
          </motion.div>

          {/* Details */}
          <div className="flex flex-col justify-center gap-8 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative p-8 rounded-3xl bg-white shadow-sm border border-[#e8e4dc] hover:shadow-md transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#8c7a6b] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <h3 className="font-heading text-sm uppercase tracking-widest text-[#8c7a6b] mb-2">{t.creator.gear.camera}</h3>
              <p className="font-heading text-3xl md:text-4xl font-bold text-[#18120d]">Fujifilm X-T200</p>
              <p className="mt-4 text-[#4d4540] leading-relaxed">
                {t.creator.gear.cameraDesc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group relative p-8 rounded-3xl bg-white shadow-sm border border-[#e8e4dc] hover:shadow-md transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#8c7a6b] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <h3 className="font-heading text-sm uppercase tracking-widest text-[#8c7a6b] mb-2">{t.creator.gear.lens}</h3>
              <p className="font-heading text-3xl md:text-4xl font-bold text-[#18120d]">Fujinon XC 35mm f/2.0</p>
              <p className="mt-4 text-[#4d4540] leading-relaxed">
                {t.creator.gear.lensDesc}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
