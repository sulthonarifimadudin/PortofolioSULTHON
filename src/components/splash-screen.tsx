"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [textStage, setTextStage] = useState<'corp' | 'photograph'>('corp');

  useEffect(() => {
    // Ganti teks setelah 1.2 detik
    const swapTimer = setTimeout(() => {
      setTextStage('photograph');
    }, 1200);

    // Sembunyikan splash screen setelah 3.2 detik
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3200);

    return () => {
      clearTimeout(swapTimer);
      clearTimeout(exitTimer);
    };
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
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#18120d]"
        >
          <div className="flex flex-col items-center overflow-hidden">
            <motion.div
              layout
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="flex items-end justify-center h-[60px] md:h-[80px]"
            >
              <motion.h1 
                layout
                className="text-4xl md:text-6xl font-heading font-black tracking-widest text-white leading-none flex"
              >
                Este<span className="text-[#a992fd]">.</span>
              </motion.h1>
              
              <motion.div layout className="flex items-end justify-start ml-1 md:ml-2 h-full">
                <AnimatePresence mode="popLayout">
                  {textStage === 'corp' ? (
                    <motion.span
                      key="corp"
                      layout
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                      transition={{ duration: 0.4 }}
                      className="text-4xl md:text-6xl font-heading font-black text-white/80 leading-none whitespace-nowrap inline-block"
                    >
                      Corp
                    </motion.span>
                  ) : (
                    <motion.span
                      key="photograph"
                      layout
                      initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-5xl md:text-7xl font-script text-[#aa867c] leading-none whitespace-nowrap inline-block translate-y-[5px] md:translate-y-[8px]"
                    >
                      Photograph
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 2.2, delay: 0.4, ease: "easeInOut" }}
              className="h-[2px] bg-gradient-to-r from-[#a992fd] to-[#aa867c] mt-8 rounded-full"
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
