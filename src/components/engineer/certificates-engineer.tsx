'use client';

import { SectionWrapper, StaggerChildren, StaggerItem } from '@/components/section-wrapper';
import { getCertificates } from '@/data/engineer';
import { Award, ScrollText, ExternalLink } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { TechIcon } from '@/components/ui/tech-icon';

export function CertificatesEngineer() {
  const { t, lang } = useTranslation();
  const certificates = getCertificates(lang);

  return (
    <SectionWrapper className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            {t.engineer.certificates.subtitle}
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.engineer.certificates.title.split(' ')[0]}{' '}
            <span className="gradient-text">{t.engineer.certificates.title.split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        <div 
          className="relative flex overflow-hidden w-full group/marquee py-8 mt-4 -mb-4"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <div className="flex shrink-0 gap-6 px-3 animate-[marquee_45s_linear_infinite] group-hover/marquee:[animation-play-state:paused]">
            {[...certificates, ...certificates, ...certificates].map((cert, i) => (
              <Sheet key={`${cert.name}-${i}`}>
                <SheetTrigger className="block text-left h-full">
                  <div className="glass group relative overflow-hidden rounded-2xl p-6 hover-lift flex flex-col h-full w-[350px] shrink-0 border border-primary-foreground/20 hover:border-primary/50 transition-all">
                    {/* Ribbon */}
                    <div className="absolute -right-8 -top-2 rotate-45 bg-primary/10 px-10 py-1 z-10">
                      <Award size={12} className="mx-auto text-primary" />
                    </div>

                    {cert.image ? (
                      <div className="mb-5 w-full h-44 rounded-[1.25rem] overflow-hidden bg-primary/5 relative shadow-lg">
                        <img src={cert.image} alt={cert.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[1.25rem]" />
                      </div>
                    ) : cert.link ? (
                      <div className="mb-5 w-full h-44 rounded-[1.25rem] overflow-hidden bg-white dark:bg-white/90 relative pointer-events-none shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-border/50">
                        <iframe src={`${cert.link}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`} className="w-[104%] h-[104%] absolute -top-[2%] -left-[2%] border-none opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" title="thumbnail" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[1.25rem] z-10" />
                        <div className="absolute inset-0 bg-transparent z-20" />
                      </div>
                    ) : (
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-primary/10 shadow-sm">
                        {cert.tech ? <TechIcon name={cert.tech} size={28} className="text-primary" /> : <ScrollText size={28} className="text-primary" />}
                      </div>
                    )}
                    
                    {/* Floating Icon if image/iframe is used */}
                    {(cert.image || cert.link) && cert.tech && (
                      <div className="absolute bottom-3 right-3 z-30 bg-background/95 backdrop-blur-md p-3 rounded-[1rem] shadow-xl border border-border/40 text-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1">
                         <TechIcon name={cert.tech} size={28} className="opacity-100" />
                      </div>
                    )}

                    <h3 className="mb-1 text-sm font-bold leading-snug line-clamp-2 min-h-[40px]">{cert.name}</h3>
                    <p className="mb-1 text-xs text-muted-foreground">{cert.issuer}</p>
                    <p className="mb-4 text-xs font-medium text-primary/70 mt-auto">{cert.date}</p>

                    <div className="inline-flex items-center gap-1 text-xs font-medium text-primary transition-colors group-hover:text-primary/80 mt-auto pt-2">
                      {lang === 'id' ? 'Lihat Sertifikat' : 'View Credential'} <ExternalLink size={10} />
                    </div>
                  </div>
                </SheetTrigger>
                <SheetContent side="right" className="!w-full sm:!max-w-[65vw] sm:!w-[65vw] flex flex-col p-0 border-l border-border/50">
                  <div className="p-6 pb-2 z-10 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm flex items-start gap-4">
                    {cert.tech && (
                      <div className="mt-1 bg-primary/10 p-2 rounded-xl">
                        <TechIcon name={cert.tech} size={28} className="text-primary" />
                      </div>
                    )}
                    <div>
                      <SheetTitle className="text-xl sm:text-2xl font-bold pr-8">{cert.name}</SheetTitle>
                      <SheetDescription className="text-sm sm:text-base">
                        {cert.issuer} • {cert.date}
                      </SheetDescription>
                    </div>
                  </div>
                  {cert.link && (
                    <div className="flex-1 bg-black/5 dark:bg-black/40 relative">
                      <iframe 
                        src={`${cert.link}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`} 
                        className="w-full h-full absolute inset-0 border-none" 
                        title={cert.name} 
                      />
                    </div>
                  )}
                </SheetContent>
              </Sheet>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
