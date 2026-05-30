'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { getPhotos, getPhotoCategories } from '@/data/creator';
import { portfolioPhotos } from '@/data/gallery-data';
import { X } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export function PhotographyCreator() {
  const { t, lang } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(24);

  const photoCategories = getPhotoCategories(lang);

  // Format portfolio photos
  const allPhotos = useMemo(() => {
    return portfolioPhotos.map(p => ({
      id: p.id,
      title: p.category.charAt(0).toUpperCase() + p.category.slice(1),
      category: p.category,
      image: p.src,
      description: ''
    }));
  }, []);

  const filteredPhotos = activeFilter === 'all'
    ? allPhotos
    : allPhotos.filter((p) => p.category === activeFilter);

  const visiblePhotos = filteredPhotos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPhotos.length;

  const handleFilterChange = (cat: string) => {
    setActiveFilter(cat);
    setVisibleCount(24);
  };

  return (
    <SectionWrapper id="photography" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-heading text-sm uppercase tracking-widest text-[#7d562d]">
            {t.creator.photography.subtitle}
          </span>
          <h2 className="font-heading text-4xl font-bold sm:text-5xl text-foreground">
            {t.creator.photography.title.split(' ')[0]}{' '}
            <span className="font-script text-[#aa867c] opacity-90 text-5xl">
              {t.creator.photography.title.split(' ').slice(1).join(' ')}
            </span>
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {photoCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilterChange(cat.id)}
              className={`relative rounded-full px-6 py-2 font-heading text-sm transition-all duration-300 ${
                activeFilter === cat.id
                  ? 'text-white'
                  : 'text-[#4d4540] hover:text-[#18120d]'
              }`}
            >
              {activeFilter === cat.id && (
                <motion.div
                  layoutId="photo-filter"
                  className="absolute inset-0 rounded-full bg-[#18120d]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="masonry-grid">
          <AnimatePresence mode="popLayout">
            {visiblePhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
                onClick={() => setSelectedImage(photo.image)}
              >
                <div className={`relative w-full overflow-hidden rounded-2xl bg-[#f0ede6] ${
                  ['aspect-[3/4]', 'aspect-[4/5]', 'aspect-[2/3]', 'aspect-[4/3]', 'aspect-[5/4]'][
                    (index * 3 + photo.id.length) % 5
                  ]
                }`}>
                  <img
                    src={photo.image}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p className="font-heading text-lg font-bold text-white">{photo.title}</p>
                    <p className="font-heading text-sm text-white/80 tracking-wide">Este.Photograph</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 24)}
              className="rounded-full border-2 border-[#18120d] px-8 py-3 font-heading text-sm font-bold text-[#18120d] transition-all hover:bg-[#18120d] hover:text-white"
            >
              {t.common.loadMore}
            </button>
          </div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute right-6 top-6 rounded-full p-2 text-white/60 transition-colors hover:text-white"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <motion.div
                className="relative max-h-[85vh] max-w-[90vw]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Full view"
                  width={1200}
                  height={800}
                  className="max-h-[85vh] w-auto rounded-sm object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
