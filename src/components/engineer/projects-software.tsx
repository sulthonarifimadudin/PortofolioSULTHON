'use client';

import { SectionWrapper, StaggerChildren, StaggerItem } from '@/components/section-wrapper';
import { getSoftwareProjects } from '@/data/engineer';
import { ExternalLink } from 'lucide-react';
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

export function ProjectsSoftware() {
  const { t, lang } = useTranslation();
  const softwareProjects = getSoftwareProjects(lang);

  return (
    <SectionWrapper id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            {t.engineer.projects.subtitle}
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.engineer.projects.title.split(' ')[0]}{' '}
            <span className="gradient-text">{t.engineer.projects.title.split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        <StaggerChildren className="columns-1 md:columns-2 lg:columns-3 gap-6" staggerDelay={0.1}>
          {softwareProjects.map((project) => (
            <StaggerItem key={project.title} className="break-inside-avoid mb-6">
              <Sheet>
                <SheetTrigger className="block text-left h-full w-full">
                  <div className={cn(
                    "glass group cursor-pointer overflow-hidden rounded-2xl hover-lift h-full flex border border-border/50 shadow-sm",
                    project.isPortrait ? "flex-row items-stretch min-h-[400px]" : "flex-col"
                  )}>
                    {/* Project Image Thumbnail */}
                    <div className={cn(
                      "relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border-border/50 shrink-0",
                      project.isPortrait ? "w-2/5 sm:w-[45%] border-r" : "w-full border-b aspect-video"
                    )}>
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className={cn(
                            "transition-transform duration-500 group-hover:scale-110 block",
                            project.isPortrait ? "absolute inset-0 w-full h-full object-cover" : "w-full h-full object-cover"
                          )}
                        />
                      ) : (
                        <div className={cn(
                          "absolute inset-0 flex items-center justify-center",
                          project.isPortrait ? "" : "absolute inset-0"
                        )}>
                          <span className="text-4xl opacity-20">💻</span>
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="mb-2 text-lg font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className={cn(
                        "mb-4 text-sm leading-relaxed text-muted-foreground",
                        project.isPortrait ? "line-clamp-none" : "line-clamp-3"
                      )}>
                        {project.description}
                      </p>

                      <div className="mt-auto flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary"
                          >
                            <TechIcon name={t} size={14} className="opacity-100" />
                            <span>{t}</span>
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary">
                            +{project.tech.length - 4}
                          </span>
                        )}
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
                  
                  <div className={cn(
                    "relative rounded-xl overflow-hidden bg-black border border-white/10 mb-8 flex items-center justify-center shadow-2xl ring-1 ring-white/5 mx-auto",
                    project.isPortrait ? "w-full max-w-[320px] sm:max-w-[360px] aspect-[9/16]" : "w-full aspect-video"
                  )}>
                     {project.video ? (
                        <video 
                          src={project.video}
                          autoPlay
                          muted
                          loop
                          controls
                          className={cn(
                            "w-full h-full",
                            project.isPortrait ? "object-contain" : "object-cover"
                          )}
                          poster={project.image}
                        />
                     ) : project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className={cn(
                            "w-full h-full",
                            project.isPortrait ? "object-contain" : "object-cover"
                          )}
                        />
                     ) : (
                       <span className="text-7xl opacity-30">💻</span>
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

                  <div className="flex gap-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 rounded-full border border-border bg-background px-4 py-3 text-sm font-bold hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm hover:shadow-md"
                      >
                        <GithubIcon size={18} /> Source Code
                      </a>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  );
}
