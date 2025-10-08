'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import CustomCursor from '@/components/common/CustomCursor';
import LoadingScreen from '@/components/common/LoadingScreen';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Toaster } from '@/components/ui/toaster';

const FOOTER_HEIGHT_PX = 96;

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Show loading screen on initial load and route changes
    setIsLoading(true);
  }, [pathname]);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  const { scrollYProgress } = useScroll();
  const contentY = useTransform(scrollYProgress, [0.95, 1], [0, -FOOTER_HEIGHT_PX]);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onAnimationComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      <motion.div style={{ y: contentY }}>
        <Header />
        <main style={{ marginBottom: `${FOOTER_HEIGHT_PX}px` }} className="bg-background">
          {children}
        </main>
      </motion.div>
      
      <Footer />
      <Toaster />
    </>
  );
}
