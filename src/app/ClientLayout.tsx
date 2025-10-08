'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import CustomCursor from '@/components/common/CustomCursor';
import LoadingScreen from '@/components/common/LoadingScreen';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Toaster } from '@/components/ui/toaster';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // On route change, show the loading screen
    setIsLoading(true);
    // A short delay to allow content to mount behind the loading screen
    const timer = setTimeout(() => {
      // This could be tied to a more specific content-loaded event if needed
    }, 100); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onAnimationComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.6s ease-in' }}>
        <div className="relative z-10 bg-background rounded-b-3xl shadow-2xl">
          <Header />
          <motion.main
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="bg-background rounded-b-3xl"
          >
            {children}
          </motion.main>
        </div>
        <Footer />
      </div>

      <Toaster />
    </>
  );
}
