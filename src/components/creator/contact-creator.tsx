'use client';

import { SectionWrapper } from '@/components/section-wrapper';
import { Send, Mail } from 'lucide-react';
import { InstagramIcon, TiktokIcon } from '@/components/ui/brand-icons';
import { useTranslation } from '@/hooks/use-translation';

export function ContactCreator() {
  const { t, lang } = useTranslation();

  return (
    <SectionWrapper id="contact" className="py-28 px-6 bg-background">
      <div className="mx-auto max-w-3xl text-center">
        {/* Header */}
        <span className="mb-4 inline-block font-heading text-sm uppercase tracking-widest text-[#7d562d]">
          {t.creator.contact.subtitle}
        </span>
        <h2 className="mb-4 font-heading text-4xl font-bold sm:text-5xl text-foreground">
          {t.creator.contact.title.split(' ')[0]}{' '}
          <span className="font-script text-[#aa867c] opacity-90 text-5xl">
            {t.creator.contact.title.split(' ').slice(1).join(' ')}
          </span>
        </h2>
        <p className="mx-auto mb-12 max-w-md font-sans text-sm text-[#4d4540]">
          {t.creator.contact.p1} {t.creator.contact.p2}
        </p>

        {/* Form */}
        <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block font-heading text-sm font-bold text-foreground">{t.common.name}</label>
              <input
                type="text"
                placeholder={lang === 'id' ? 'Nama Anda' : 'Your name'}
                className="w-full border-b border-gray-300 bg-transparent px-0 py-3 font-sans text-sm outline-none transition-colors focus:border-[#7d562d]"
              />
            </div>
            <div>
              <label className="mb-2 block font-heading text-sm font-bold text-foreground">{t.common.email}</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border-b border-gray-300 bg-transparent px-0 py-3 font-sans text-sm outline-none transition-colors focus:border-[#7d562d]"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block font-heading text-sm font-bold text-foreground">Project Type</label>
            <select
              className="w-full border-b border-gray-300 bg-transparent px-0 py-3 font-sans text-sm outline-none transition-colors focus:border-[#7d562d]"
            >
              <option value="">{lang === 'id' ? 'Pilih layanan' : 'Select a service'}</option>
              <option value="wedding">{lang === 'id' ? 'Fotografi Acara' : 'Event Photography'}</option>
              <option value="portrait">{lang === 'id' ? 'Sesi Potret' : 'Portrait Session'}</option>
              <option value="commercial">{lang === 'id' ? 'Fotografi Komersial' : 'Commercial Photography'}</option>
              <option value="video">{lang === 'id' ? 'Videografi' : 'Videography'}</option>
              <option value="other">{lang === 'id' ? 'Lainnya' : 'Other'}</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block font-heading text-sm font-bold text-foreground">{t.common.message}</label>
            <textarea
              rows={4}
              placeholder={lang === 'id' ? 'Ceritakan tentang visi Anda...' : 'Tell me about your vision...'}
              className="w-full resize-none border-b border-gray-300 bg-transparent px-0 py-3 font-sans text-sm outline-none transition-colors focus:border-[#7d562d]"
            />
          </div>
          <div className="pt-8 text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#18120d] px-10 py-4 text-sm font-semibold text-white transition-all hover:bg-[#2d2621] hover:shadow-lg w-full sm:w-auto"
            >
              <Send size={16} />
              {t.common.submit}
            </button>
          </div>
        </form>

        {/* Social Links */}
        <div className="mt-20 flex items-center justify-center gap-6">
          {[
            { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/arifsulthaan' },
            { icon: TiktokIcon, label: 'TikTok', href: 'https://tiktok.com/@arifsulthaan' },
            { icon: Mail, label: 'Email', href: 'mailto:sulthonarifimadudin@gmail.com' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-3 transition-all duration-300 bg-white shadow-sm border border-gray-100 hover:shadow-md text-[#4d4540] hover:text-[#7d562d]"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
