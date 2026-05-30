'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionWrapper, StaggerChildren, StaggerItem } from '@/components/section-wrapper';
import { useTranslation } from '@/hooks/use-translation';
import { getSkills } from '@/data/engineer';

const categories = [
  { id: 'fullstack', label: 'Fullstack', color: 'oklch(0.58 0.26 270.0)' },
  { id: 'frontend', label: 'Frontend', color: 'oklch(0.623 0.214 259.815)' },
  { id: 'backend', label: 'Backend', color: 'oklch(0.541 0.281 293.009)' },
  { id: 'database', label: 'Database', color: 'oklch(0.488 0.243 264.376)' },
  { id: 'devops', label: 'DevOps', color: 'oklch(0.60 0.20 250)' },
  { id: 'iot', label: 'IoT', color: 'oklch(0.65 0.18 280)' },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="group">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs font-semibold text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}dd)`,
            boxShadow: `0 0 12px ${color}40`,
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
}

export function SkillsEngineer() {
  const { t, lang } = useTranslation();
  const skills = getSkills(lang);

  return (
    <SectionWrapper id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            {t.engineer.skills.subtitle}
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.engineer.skills.title.split(' ')[0]}{' '}
            <span className="gradient-text">{t.engineer.skills.title.split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        <StaggerChildren className="grid gap-12 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.05}>
          {categories.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat.id);
            return (
              <StaggerItem key={cat.id}>
                <div className="glass rounded-2xl p-6 hover-lift">
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}60` }}
                    />
                    <h3 className="text-lg font-bold">{cat.label}</h3>
                  </div>
                  <div className="space-y-4">
                    {catSkills.map((skill, i) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        color={cat.color}
                        delay={i}
                      />
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  );
}
