'use client';

import { motion } from 'framer-motion';
import { Code2, Camera } from 'lucide-react';
import { useHydratedModeState } from '@/store/mode-store';

export function ModeToggle() {
  const { mode, toggleMode } = useHydratedModeState();
  const isCreator = mode === 'creator';

  return (
    <button
      onClick={toggleMode}
      className="relative flex items-center gap-2 rounded-full p-1 transition-all duration-500"
      style={{
        background: isCreator
          ? 'linear-gradient(135deg, oklch(0.20 0.015 60), oklch(0.25 0.02 55))'
          : 'linear-gradient(135deg, oklch(0.95 0.01 270), oklch(0.92 0.02 260))',
        border: `1px solid ${isCreator ? 'oklch(0.35 0.03 55)' : 'oklch(0.85 0.02 270)'}`,
      }}
      aria-label={`Switch to ${isCreator ? 'Engineer' : 'Creator'} mode`}
    >
      <div className="relative flex items-center">
        {/* Icons */}
        <div className="flex items-center gap-0">
          <div
            className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-500"
          >
            <Code2
              size={14}
              className="transition-colors duration-500"
              style={{ color: isCreator ? 'oklch(0.5 0 0)' : 'oklch(1 0 0)' }}
            />
          </div>
          <div
            className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-500"
          >
            <Camera
              size={14}
              className="transition-colors duration-500"
              style={{ color: isCreator ? 'oklch(1 0 0)' : 'oklch(0.4 0 0)' }}
            />
          </div>
        </div>

        {/* Sliding pill */}
        <motion.div
          className="absolute top-0 h-8 w-8 rounded-full"
          style={{
            background: isCreator
              ? 'linear-gradient(135deg, oklch(0.75 0.15 55), oklch(0.70 0.18 45))'
              : 'linear-gradient(135deg, oklch(0.488 0.243 264), oklch(0.541 0.281 293))',
            boxShadow: isCreator
              ? '0 2px 12px oklch(0.75 0.15 55 / 0.4)'
              : '0 2px 12px oklch(0.488 0.243 264 / 0.4)',
          }}
          layout
          animate={{ x: isCreator ? 32 : 0 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
        />
      </div>
    </button>
  );
}
