'use client';

import { useHydratedModeState } from '@/store/mode-store';
import { useTranslation } from '@/hooks/use-translation';
import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, YoutubeIcon, TiktokIcon } from '@/components/ui/brand-icons';

export function Footer() {
  const { mode } = useHydratedModeState();
  const { t } = useTranslation();
  const isCreator = mode === 'creator';

  const socialLinks = isCreator
    ? [
        { icon: InstagramIcon, href: 'https://instagram.com/arifsulthaan', label: 'Instagram' },
        { icon: TiktokIcon, href: 'https://tiktok.com/@arifsulthaan', label: 'TikTok' },
        { icon: Mail, href: 'mailto:sulthonarifimadudin@gmail.com', label: 'Email' },
      ]
    : [
        { icon: GithubIcon, href: 'https://github.com/sulthonarifimadudin', label: 'GitHub' },
        { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/sulthon-arif-imadudin-3a2919263/', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:sulthonarifimadudin@gmail.com', label: 'Email' },
      ];

  return (
    <footer className="border-t border-border/50 transition-mode">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Brand */}
          <div className="text-center">
            <p className="text-lg font-bold tracking-tight">
              <span className="gradient-text">Engineer</span>
              <span className="mx-2 text-muted-foreground">×</span>
              <span className={`${isCreator ? 'font-serif' : ''}`}>Creator</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Building Digital Experiences. Capturing Visual Stories.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="rounded-full p-2.5 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Sulthon. {t.common.rights}</span>
            <Heart size={12} className="text-red-500" fill="currentColor" />
          </div>
        </div>
      </div>
    </footer>
  );
}
