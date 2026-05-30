import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useState, useEffect } from 'react';

export type Mode = 'engineer' | 'creator';

interface ModeState {
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
}

export const useModeStore = create<ModeState>()(
  persist(
    (set) => ({
      mode: 'engineer',
      setMode: (mode) => set({ mode }),
      toggleMode: () =>
        set((state) => ({
          mode: state.mode === 'engineer' ? 'creator' : 'engineer',
        })),
    }),
    {
      name: 'portfolio-mode',
    }
  )
);

export function useHydratedModeState() {
  const { mode, toggleMode, setMode } = useModeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    mode: mounted ? mode : 'engineer',
    toggleMode,
    setMode,
    mounted,
  };
}
