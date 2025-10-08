'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import CustomCursor from '@/components/common/CustomCursor';
import LoadingScreen from '@/components/common/LoadingScreen';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Toaster } from '@/components/ui/toaster';
import { useScrollspy } from '@/hooks/use-scrollspy';

const navItems = [
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery'},
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const activeSection = useScrollspy(navItems.map(item => item.href.substring(1)), { offset: 100 });

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
    }, 100); 

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

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onAnimationComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10 bg-background rounded-b-3xl shadow-2xl">
              <Header activeSection={activeSection} />
              <main
                className="bg-background rounded-b-3xl"
              >
                {children}
              </main>
            </div>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      <Toaster />
    </>
  );
}
