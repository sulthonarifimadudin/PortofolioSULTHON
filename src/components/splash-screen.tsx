"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Sembunyikan splash screen setelah 2 detik
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%", // Animasi naik ke atas saat selesai
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505]"
        >
          <div className="flex flex-col items-center overflow-hidden">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="flex items-center gap-2"
            >
              <h1 className="text-4xl md:text-6xl font-heading font-black tracking-widest text-white">
                ESTE
              </h1>
              <span className="text-4xl md:text-6xl font-heading font-black text-[#a992fd]">
                .
              </span>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
              className="h-[2px] bg-gradient-to-r from-[#a992fd] to-blue-500 mt-6 rounded-full"
              style={{ width: "0%" }}
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-white/50 text-sm mt-4 tracking-widest uppercase text-[10px]"
            >
              Engineer × Photographer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
