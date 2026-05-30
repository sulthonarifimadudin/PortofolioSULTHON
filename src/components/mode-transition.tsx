'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useHydratedModeState } from '@/store/mode-store';
import React from 'react';

export function ModeTransition({ children }: { children: React.ReactNode }) {
  const { mode } = useHydratedModeState();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={mode}
        initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
