'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { Camera, Film, Users, Star } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

const creatorStats = [
  { icon: Camera, value: '500+', label: 'Photos Delivered' },
  { icon: Film, value: '30+', label: 'Videos Produced' },
  { icon: Users, value: '50+', label: 'Happy Clients' },
  { icon: Star, value: '5.0', label: 'Average Rating' },
];

export function AboutCreator() {
  const { t, lang } = useTranslation();

  return (
    <SectionWrapper id="about" className="py-28 px-6 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left - Image area */}
          <div className="relative">
            <div className="aspect-[3/4] relative overflow-hidden rounded-2xl shadow-xl bg-[#f0ede6] p-2">
              <Image
                src="/FOTO2/CREATIVE/foto diri/foto 2.jpg"
                alt="Este Photograph Profile"
                fill
                className="object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative frame */}
            <div
              className="absolute -bottom-6 -right-6 h-full w-full rounded-2xl border-2 border-[#d1c4bc] -z-10"
            />
          </div>

          {/* Right - Content area */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl text-foreground">
                {t.creator.about.title.split(' ')[0]}{' '}
                <span className="font-script text-primary text-5xl sm:text-6xl lg:text-7xl">
                  {t.creator.about.title.split(' ').slice(1).join(' ')}
                </span>
              </h2>
            </motion.div>

            <motion.div
              className="mt-8 space-y-6 font-sans text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>{t.creator.about.p1}</p>
              <p>{t.creator.about.p2}</p>
              <p>{t.creator.about.p3}</p>
            </motion.div>

            {/* Quick Stats/Tags */}
            <motion.div 
              className="mt-10 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {['Portrait Photography', 'Graduation', 'Engagement', 'Fuji Enthusiast'].map((tag) => (
                <span 
                  key={tag} 
                  className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
