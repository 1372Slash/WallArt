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
    setIsLoading(true);
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
      
      {!isLoading && (
         <motion.div
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          className="relative z-10 bg-background"
        >
          <Header />
          <main>
            {children}
          </main>
        </motion.div>
      )}
      <Footer />
      <Toaster />
    </>
  );
}
