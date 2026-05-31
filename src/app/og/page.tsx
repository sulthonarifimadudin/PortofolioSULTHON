'use client';

import Image from 'next/image';

export default function OGPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-8">
      {/* OG Container - 16:9 ratio */}
      <div className="relative w-[1200px] h-[630px] flex overflow-hidden">
        {/* ===== LEFT HALF: Engineer ===== */}
        <div
          className="relative w-1/2 h-full flex items-center"
          style={{
            background: 'linear-gradient(160deg, #ede8f5 0%, #ddd5f0 25%, #d0c8f0 50%, #e0d8f5 75%, #ede5fa 100%)',
          }}
        >
          {/* Engineer text content - RIGHT aligned, leaning towards photo */}
          <div className="absolute right-[255px] top-1/2 -translate-y-1/2 flex flex-col justify-center items-end text-right z-10 max-w-[310px]">
            {/* Badge pill - matching homepage */}
            <div className="mb-5 inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-white/50 self-end">
              <span className="text-[11px] font-bold text-indigo-500 font-sans">{'</>'}</span>
              <span className="text-[11px] font-semibold text-slate-700 font-sans">Full-Stack Software Engineer</span>
              <span className="text-[10px]">✨</span>
            </div>

            {/* Este.Corp - using font-heading (MADE Tommy Soft) */}
            <h1
              className="text-[3.8rem] font-heading font-black leading-[0.92] tracking-tight mb-3"
              style={{
                background: 'linear-gradient(135deg, #6C3AE0 0%, #5B4AE5 40%, #4F46E5 70%, #3B82F6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Este.Corp
            </h1>

            {/* Subheadline - bold black, font-sans (Inter) */}
            <p className="text-[1.35rem] font-sans font-black text-slate-800 leading-tight mb-3">
              Mulai dari prompt pertama.
            </p>

            {/* Description - font-sans (Inter) */}
            <p className="text-[11px] font-sans leading-relaxed text-slate-500 mb-5">
              Saya berfokus pada pengembangan perangkat lunak menggunakan ekosistem JavaScript (Next.js, React, Node.js, Vue).
            </p>

            {/* Social icons - matching homepage style */}
            <div className="flex items-center justify-end gap-3">
              <div className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm border border-slate-200/60 flex items-center justify-center shadow-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#1f2937">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm border border-blue-200/60 flex items-center justify-center shadow-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#2563EB">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Engineer photo - near center */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10">
            <div className="relative w-[230px] h-[320px] rounded-[1.8rem] overflow-hidden bg-white/50 backdrop-blur-md p-[5px] shadow-2xl border border-white/70">
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                <Image
                  src="/FOTO2/ENGINEER/Foto diri/foto 1.jpg"
                  alt="Engineer"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* ===== RIGHT HALF: Photograph ===== */}
        <div
          className="relative w-1/2 h-full flex items-center justify-end"
          style={{
            background: 'linear-gradient(160deg, #f0ece6 0%, #ebe5dd 30%, #e8e2d8 60%, #f2ede6 100%)',
          }}
        >
          {/* Creator photo - near center (left side of right half) */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
            <div className="relative w-[230px] h-[320px] rounded-[1.8rem] overflow-hidden bg-white/40 backdrop-blur-md p-[5px] shadow-2xl border border-white/50">
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                <Image
                  src="/FOTO2/CREATIVE/foto diri/foto 1.jpg"
                  alt="Photographer"
                  fill
                  className="object-cover object-bottom"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Photograph text content - LEFT aligned, leaning towards photo */}
          <div className="absolute left-[255px] top-1/2 -translate-y-1/2 flex flex-col justify-center z-10 max-w-[310px]">
            {/* ESTE. Photograph - using font-heading (MADE Tommy Soft) + font-script (Authentic Signature) */}
            <div className="relative mb-4 mt-2">
              <h1
                className="text-[3.5rem] font-heading font-black leading-[0.85] tracking-tight uppercase"
                style={{ color: '#18120d' }}
              >
                ESTE.
              </h1>
              <span
                className="text-[3.2rem] font-script block -mt-7 ml-4 relative z-10"
                style={{
                  color: '#aa867c',
                  transform: 'rotate(-2deg)',
                  textShadow: '1.5px 1.5px 0 #f0ece6, -1.5px -1.5px 0 #f0ece6, 1.5px -1.5px 0 #f0ece6, -1.5px 1.5px 0 #f0ece6, 0px 1.5px 0 #f0ece6, 0px -1.5px 0 #f0ece6, 1.5px 0px 0 #f0ece6, -1.5px 0px 0 #f0ece6',
                }}
              >
                Photograph
              </span>
            </div>

            {/* Description - font-sans (Inter), matching homepage color */}
            <p className="text-[11px] font-sans leading-relaxed mb-5" style={{ color: '#4d4540' }}>
              Pengguna &amp; antusias Fuji. Mengkhususkan diri dalam fotografi potret dan model. Mengabadikan momen otentik.
            </p>

            {/* Social icons + Fujifilm - matching homepage exactly */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ color: '#18120d' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ color: '#18120d' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </div>
              {/* Divider */}
              <div className="h-5 w-px" style={{ backgroundColor: '#18120d20' }} />
              {/* Fujifilm text - font-heading (MADE Tommy Soft) */}
              <span className="text-[13px] font-heading font-black tracking-tight" style={{ color: '#18120d' }}>
                FUJIFILM
              </span>
            </div>
          </div>
        </div>

        {/* ===== CENTER DIVIDER LINE ===== */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-20 bg-gradient-to-b from-transparent via-black/10 to-transparent" />

        {/* ===== TOP CENTER BADGE ===== */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-30">
          <div className="bg-white/90 backdrop-blur-xl rounded-full px-5 py-2 shadow-lg border border-white/50">
            <span className="text-sm font-heading font-bold tracking-tight text-slate-800">Sulthon.</span>
          </div>
        </div>

        {/* ===== BOTTOM CENTER URL ===== */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30">
          <span className="text-[10px] font-sans font-medium tracking-wider" style={{ color: '#8a8580' }}>
            sulthon.vercel.app
          </span>
        </div>
      </div>
    </div>
  );
}
