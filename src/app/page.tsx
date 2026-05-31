'use client';

import { useHydratedModeState } from '@/store/mode-store';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ModeTransition } from '@/components/mode-transition';

// Engineer sections
import { HeroEngineer } from '@/components/engineer/hero-engineer';
import { AboutEngineer } from '@/components/engineer/about-engineer';
import { SkillsEngineer } from '@/components/engineer/skills-engineer';
import { TechStackEngineer } from '@/components/engineer/tech-stack-engineer';
import { ProjectsSoftware } from '@/components/engineer/projects-software';
import { ProjectsIoT } from '@/components/engineer/projects-iot';
import { ExperienceEngineer } from '@/components/engineer/experience-engineer';
import { CertificatesEngineer } from '@/components/engineer/certificates-engineer';
import { ContactEngineer } from '@/components/engineer/contact-engineer';

// Creator sections
import { HeroCreator } from '@/components/creator/hero-creator';
import { AboutCreator } from '@/components/creator/about-creator';
import { PhotographyCreator } from '@/components/creator/photography-creator';
import { VideographyCreator } from '@/components/creator/videography-creator';
import { GearCreator } from '@/components/creator/gear-creator';
import { GalleryCreator } from '@/components/creator/gallery-creator';
import { ContactCreator } from '@/components/creator/contact-creator';

function EngineerPage() {
  return (
    <main className="flex-1">
      <HeroEngineer />
      <AboutEngineer />
      <TechStackEngineer />
      <ProjectsSoftware />
      <ProjectsIoT />
      <ExperienceEngineer />
      <CertificatesEngineer />
      <ContactEngineer />
    </main>
  );
}

function CreatorPage() {
  return (
    <main className="flex-1">
      <HeroCreator />
      <AboutCreator />
      <PhotographyCreator />
      <VideographyCreator />
      <GearCreator />
      <ContactCreator />
    </main>
  );
}

export default function Home() {
  const { mode } = useHydratedModeState();

  return (
    <div data-mode={mode} className="transition-mode">
      <Navbar />
      <ModeTransition>
        {mode === 'engineer' ? <EngineerPage /> : <CreatorPage />}
      </ModeTransition>
      <Footer />

      {/* Film grain overlay for Creator mode */}
      {mode === 'creator' && (
        <>
          <div className="film-grain" />
          <div className="vignette" />
        </>
      )}

      {/* Global animated gradient background for Engineer mode */}
      {mode === 'engineer' && (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-background" />
          <div className="gradient-mesh" />
          <div
            className="gradient-mesh-orb"
            style={{
              width: '50vw',
              height: '50vw',
              maxWidth: '600px',
              maxHeight: '600px',
              background: 'var(--hero-gradient-1)',
              opacity: 0.15,
              top: '10%',
              left: '20%',
              animationDelay: '-2s',
              animationDuration: '12s',
            }}
          />
          <div
            className="gradient-mesh-orb"
            style={{
              width: '40vw',
              height: '40vw',
              maxWidth: '500px',
              maxHeight: '500px',
              background: 'var(--hero-gradient-2)',
              opacity: 0.12,
              bottom: '10%',
              right: '10%',
              animationDelay: '-6s',
              animationDuration: '14s',
            }}
          />
          {/* Subtle dot grid overlay for texture globally */}
          <div className="absolute inset-0 dot-grid opacity-30" />
        </div>
      )}
    </div>
  );
}
