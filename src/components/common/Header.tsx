'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SlashLogo from './SlashLogo';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import React from 'react';

const navItems = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="hidden md:flex items-center gap-2 rounded-full bg-primary text-primary-foreground p-2 shadow-lg"
        >
          <Link href="/" className="px-3 py-1 flex items-center justify-center">
            <SlashLogo />
          </Link>
          <div className="w-px h-5 bg-primary-foreground/30" />
          <nav>
            <ul className="flex items-center gap-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="px-3 py-1 rounded-full text-sm hover:bg-white/10 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>

        <div className="md:hidden">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground p-2 shadow-lg"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary-foreground hover:bg-white/10 rounded-full"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </motion.div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-lg"
          onClick={() => setMobileMenuOpen(false)}
        >
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-24 flex flex-col items-center gap-8 pt-10"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-headline text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </>
  );
};

export default Header;
