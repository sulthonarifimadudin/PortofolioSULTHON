'use client';

import { SectionWrapper, StaggerChildren, StaggerItem } from '@/components/section-wrapper';
import { getIotProjects } from '@/data/engineer';
import { Cpu } from 'lucide-react';
import { GithubIcon } from '@/components/ui/brand-icons';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useTranslation } from '@/hooks/use-translation';
import { TechIcon } from '@/components/ui/tech-icon';
import { cn } from '@/lib/utils';

export function ProjectsIoT() {
  const { t, lang } = useTranslation();
  const iotProjects = getIotProjects(lang);

  return (
    <SectionWrapper className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            {t.engineer.iot.subtitle}
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.engineer.iot.title.split(' ')[0]}{' '}
            <span className="gradient-text">{t.engineer.iot.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {lang === 'id' 
              ? 'Menjembatani jarak antara perangkat lunak dan perangkat keras dengan sistem tertanam dan solusi IoT' 
              : 'Bridging the gap between software and hardware with embedded systems and IoT solutions'}
          </p>
        </div>

        <StaggerChildren className="grid gap-6 md:grid-cols-3" staggerDelay={0.1}>
          {iotProjects.map((project) => (
            <StaggerItem key={project.title}>
              <Sheet>
                <SheetTrigger className="block text-left h-full w-full">
                  <div className="group relative cursor-pointer overflow-hidden rounded-2xl hover-lift h-full flex flex-col">
                    {/* Dotted background */}
                    <div className="absolute inset-0 dot-grid rounded-2xl" />

                    <div className="relative h-full rounded-2xl flex flex-col overflow-hidden border border-primary-foreground/20 group-hover:border-primary-foreground/50 transition-all duration-300 bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40">
                    {/* Project Image Thumbnail */}
                    <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border-b border-border/50">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className={cn(
                            "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110",
                            project.title.includes('Tong Sampah') ? "object-[center_80%]" : "object-center"
                          )}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Cpu size={40} className="text-primary/30" />
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-1 relative z-10">
                      <h3 className="mb-2 text-lg font-bold group-hover:text-white transition-colors">{project.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-primary-foreground/80 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="mt-auto flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/20 px-2.5 py-1 text-xs font-medium text-white shadow-sm"
                          >
                            <TechIcon name={t} size={14} className="opacity-100" />
                            <span>{t}</span>
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-2.5 py-1 text-xs font-medium text-white shadow-sm">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  </div>
                </SheetTrigger>
                
                <SheetContent className="w-full sm:!w-[600px] sm:!max-w-[600px] lg:!w-[700px] lg:!max-w-[700px] overflow-y-auto border-l border-border/50 bg-background/95 backdrop-blur-xl p-6 sm:p-10">
                  <SheetHeader className="mb-6 text-left">
                    <SheetTitle className="text-3xl font-black">{project.title}</SheetTitle>
                    <SheetDescription className="text-base mt-3 leading-relaxed text-muted-foreground">
                      {project.description}
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-primary/20 mb-8 flex items-center justify-center shadow-lg">
                     {project.video ? (
                        <video 
                          src={project.video}
                          autoPlay
                          muted
                          loop
                          controls
                          className="h-full w-full object-cover"
                          poster={project.image}
                        />
                     ) : project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="h-full w-full object-cover"
                        />
                     ) : (
                       <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/10 glass shadow-lg">
                          <Cpu size={48} className="text-primary" />
                       </div>
                     )}
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-semibold text-primary"
                        >
                          <TechIcon name={t} size={14} className="opacity-100" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.github && (
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 rounded-full border border-border bg-background px-4 py-3 text-sm font-bold hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm hover:shadow-md"
                      >
                        <GithubIcon size={18} /> Source Code
                      </a>
                    </div>
                  )}
                </SheetContent>
              </Sheet>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  );
}
