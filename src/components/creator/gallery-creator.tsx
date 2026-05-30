'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { portfolioPhotos } from '@/data/gallery-data';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type Category = 'All' | 'Graduation' | 'Engagement';

export function GalleryCreator() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<Category>('All');
  
  const filteredPhotos = activeTab === 'All' 
    ? portfolioPhotos 
    : portfolioPhotos.filter(photo => photo.category === activeTab);

  // Show 1/3 of the photos initially
  const [visibleCount, setVisibleCount] = useState(1);

  // Reset visible count when tab changes
  useEffect(() => {
    setVisibleCount(Math.ceil(filteredPhotos.length / 3));
  }, [activeTab]); // eslint-disable-line react-hooks/exhaustive-deps

  const visiblePhotos = filteredPhotos.slice(0, visibleCount);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredPhotos.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + Math.ceil(filteredPhotos.length / 3), filteredPhotos.length));
  };

  return (
    <SectionWrapper id="gallery" className="py-28 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block font-heading text-sm uppercase tracking-widest text-[#7d562d]">
            Portfolio
          </span>
          <h2 className="font-heading text-4xl font-bold sm:text-5xl text-foreground">
            Visual <span className="font-script text-[#aa867c] opacity-90 text-5xl">Stories</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A collection of authentic moments, featuring graduation celebrations and beautiful engagement sessions.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-4">
          {(['All', 'Graduation', 'Engagement'] as Category[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-[#18120d] text-white shadow-md'
                  : 'bg-white text-muted-foreground hover:bg-white/80 hover:text-foreground'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Masonry Grid (Pinterest Style) */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {visiblePhotos.map((photo, i) => (
              <motion.div
                key={photo.id}
                layout
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedIndex(i)}
              >
              <img
                src={photo.src}
                alt={photo.category}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/30" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-heading font-bold text-sm text-white">{photo.category}</p>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {visibleCount < portfolioPhotos.length && (
          <div className="mt-16 text-center">
            <button
              onClick={loadMore}
              className="rounded-full border border-[#d1c4bc] bg-transparent px-8 py-4 font-heading font-bold text-[#7d562d] transition-all hover:bg-[#18120d] hover:text-white hover:border-[#18120d]"
            >
              Lihat Lebih Banyak
            </button>
          </div>
        )}

        {/* Full Screen Viewer */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/98"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Close */}
              <button
                className="absolute right-6 top-6 z-10 rounded-full p-2 text-white/60 transition-colors hover:text-white"
                onClick={() => setSelectedIndex(null)}
              >
                <X size={24} />
              </button>

              {/* Navigation */}
              <button
                className="absolute left-4 z-10 rounded-full p-3 text-white/40 transition-colors hover:text-white md:left-8"
                onClick={goPrev}
              >
                <ChevronLeft size={32} />
              </button>
              <button
                className="absolute right-4 z-10 rounded-full p-3 text-white/40 transition-colors hover:text-white md:right-8"
                onClick={goNext}
              >
                <ChevronRight size={32} />
              </button>

              {/* Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  className="relative flex flex-col items-center justify-center max-h-[90vh] max-w-[90vw]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={portfolioPhotos[selectedIndex].src}
                    alt={portfolioPhotos[selectedIndex].category}
                    className="max-h-[80vh] w-auto rounded-sm object-contain"
                  />
                  <div className="mt-4 text-center">
                    <p className="font-sans text-sm font-semibold tracking-wider uppercase text-white/80">
                      {portfolioPhotos[selectedIndex].category}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-sm text-white/50">
                {selectedIndex + 1} / {portfolioPhotos.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
