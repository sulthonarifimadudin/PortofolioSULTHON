'use client';

import { useState } from 'react';
import { SectionWrapper } from '@/components/section-wrapper';
import { Send, Mail, MapPin, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/brand-icons';
import { useTranslation } from '@/hooks/use-translation';

export function ContactEngineer() {
  const { t, lang } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "c11d6d9d-2edb-4e29-a908-aa15aba5cf9a");
    formData.append("subject", "Pesan Baru dari Web Portofolio (Engineer)");
    formData.append("from_name", "Portofolio Sulthon");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage(lang === 'id' ? 'Pesan berhasil terkirim!' : 'Message sent successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setMessage(data.message || 'Terjadi kesalahan.');
      }
    } catch (error) {
      setStatus('error');
      setMessage(lang === 'id' ? 'Gagal mengirim pesan. Silakan coba lagi.' : 'Failed to send message.');
    }
    
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <SectionWrapper id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            {t.engineer.contact.subtitle}
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.engineer.contact.title.split(' ')[0]}{' '}
            <span className="gradient-text">{t.engineer.contact.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            {t.engineer.contact.p1} {t.engineer.contact.p2}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">{t.common.name}</label>
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder={lang === 'id' ? 'Nama Anda' : 'Your name'}
                    className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">{t.common.email}</label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Subject</label>
                <input
                  name="Subject / Topik"
                  required
                  type="text"
                  placeholder={lang === 'id' ? 'Tujuan pesan' : 'Project inquiry'}
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">{t.common.message}</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder={lang === 'id' ? 'Ceritakan tentang proyek Anda...' : 'Tell me about your project...'}
                  className="w-full resize-none rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    {lang === 'id' ? 'Mengirim...' : 'Sending...'}
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    {t.common.submit}
                  </>
                )}
              </button>
              
              {status === 'success' && (
                <p className="text-sm text-green-500 font-medium">{message}</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-500 font-medium">{message}</p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 md:col-span-2">
            <div className="glass rounded-2xl p-6 hover-lift">
              <Mail size={20} className="mb-3 text-primary" />
              <p className="text-sm font-semibold">Email</p>
              <p className="text-sm text-muted-foreground">sulthonarifimadudin@gmail.com</p>
            </div>
            <div className="glass rounded-2xl p-6 hover-lift">
              <MapPin size={20} className="mb-3 text-primary" />
              <p className="text-sm font-semibold">Location</p>
              <p className="text-sm text-muted-foreground">Bandung, Jawa Barat</p>
            </div>
            <div className="glass rounded-2xl p-6 hover-lift">
              <div className="mb-3 flex gap-3">
                <a href="https://github.com/sulthonarifimadudin" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary/10 p-2.5 text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                  <GithubIcon size={16} />
                </a>
                <a href="https://www.linkedin.com/in/sulthon-arif-imadudin-3a2919263/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary/10 p-2.5 text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                  <LinkedinIcon size={16} />
                </a>
              </div>
              <p className="text-sm font-semibold">Social</p>
              <p className="text-sm text-muted-foreground">Follow my work</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
