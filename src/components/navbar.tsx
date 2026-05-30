'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHydratedModeState } from '@/store/mode-store';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Menu, X, User, Code2, Briefcase, Folder, Mail, Camera, Sparkles, Image as ImageIcon, Aperture } from 'lucide-react';

import { useTranslation } from '@/hooks/use-translation';

export function Navbar() {
  const { mode } = useHydratedModeState();
  const { t, lang, toggleLang } = useTranslation();
  const [activeSection, setActiveSection] = useState('#about');
  const [mobileOpen, setMobileOpen] = useState(false);
  const isCreator = mode === 'creator';
  
  const engineerLinks = [
    { href: '#about', label: t.nav.about, icon: User },
    { href: '#skills', label: t.nav.skills, icon: Code2 },
    { href: '#projects', label: t.nav.projects, icon: Folder },
    { href: '#experience', label: t.nav.experience, icon: Briefcase },
    { href: '#contact', label: t.nav.contact, icon: Mail },
  ];

  const creatorLinks = [
    { href: '#about', label: t.nav.about, icon: User },
    { href: '#photography', label: t.nav.portfolio, icon: Camera },
    { href: '#videography', label: lang === 'id' ? 'Reels' : 'Reels', icon: Sparkles },
    { href: '#gear', label: t.nav.gear, icon: Aperture },
    { href: '#contact', label: t.nav.contact, icon: Mail },
  ];

  const links = isCreator ? creatorLinks : engineerLinks;

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(`#${section}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveSection(href);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="fixed top-6 left-1/2 z-50 w-max -translate-x-1/2 px-4 transition-all duration-500">
        <motion.nav
          className="flex items-center gap-2 rounded-full border border-black/5 bg-white/90 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-black/80"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Logo */}
          <div className="flex items-center pl-4 pr-6 border-r border-black/10 dark:border-white/10">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`text-lg tracking-tighter text-foreground transition-transform hover:scale-105 ${
                isCreator ? 'font-heading font-bold' : 'font-black'
              }`}
            >
              Sulthon<span className={isCreator ? 'text-[#aa867c]' : 'text-[#3b82f6] dark:text-[#60a5fa]'}>.</span>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                className="flex items-center gap-1"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
              >
                {links.map((link) => {
                  const isActive = activeSection === link.href;
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                        isCreator ? 'font-heading font-bold' : 'font-semibold'
                      } ${
                        isActive
                          ? (isCreator ? 'bg-[#18120d] text-white shadow-md' : 'bg-[#3b82f6] text-white shadow-md')
                          : 'text-[#475569] hover:bg-black/5 hover:text-foreground dark:text-[#cbd5e1] dark:hover:bg-white/10'
                      }`}
                    >
                      <Icon size={16} className={isActive ? 'text-white' : 'text-current'} />
                      <span className="tracking-wide">{link.label}</span>
                    </button>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Section (Mode Toggle & Mobile Menu) */}
          <div className="flex items-center gap-2 pl-4 pr-2 border-l border-black/10 dark:border-white/10 md:border-l-0 md:pl-0">
            <button
              onClick={toggleLang}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition-colors hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 text-foreground font-bold text-xs"
              title="Toggle Language"
            >
              {lang === 'en' ? 'EN' : 'ID'}
            </button>
            <ModeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition-colors hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 text-foreground"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 glass-strong md:hidden bg-background/95 backdrop-blur-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, i) => {
              const isActive = activeSection === link.href;
              const Icon = link.icon;
              return (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`flex items-center gap-3 rounded-full px-6 py-3 text-xl transition-all ${
                    isCreator ? 'font-heading font-bold' : 'font-medium'
                  } ${
                    isActive
                      ? (isCreator ? 'bg-[#18120d] text-white' : 'bg-[#3b82f6] text-white')
                      : 'text-foreground'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Icon size={24} />
                  <span>{link.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
