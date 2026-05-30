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
    </div>
  );
}
