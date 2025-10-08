'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SlashLogo from './SlashLogo';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Pages',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Work', href: '#work' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Social',
      links: [
        { name: 'Twitter', href: '#' },
        { name: 'LinkedIn', href: '#' },
        { name: 'GitHub', href: '#' },
        { name: 'Instagram', href: '#' },
      ],
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
  };

  return (
    <footer className="bg-primary text-primary-foreground border-t border-border">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            className="lg:col-span-4"
            initial={fadeIn.initial}
            whileInView={fadeIn.whileInView}
            viewport={fadeIn.viewport}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <SlashLogo className="!h-8 mb-4" />
            <p className="text-muted-foreground mb-6 max-w-sm">
              A creative developer crafting bold, interactive digital portfolios that leave a lasting impression.
            </p>
            <p className="text-sm text-muted-foreground">&copy; {currentYear} Slash Portfolio. All Rights Reserved.</p>
          </motion.div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {footerLinks.map((section, sectionIndex) => (
              <motion.div 
                key={section.title}
                initial={fadeIn.initial}
                whileInView={fadeIn.whileInView}
                viewport={fadeIn.viewport}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 + sectionIndex * 0.1 }}
              >
                <h3 className="font-headline text-xl mb-4 text-primary-foreground">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <motion.li 
                      key={link.name}
                      initial={fadeIn.initial}
                      whileInView={fadeIn.whileInView}
                      viewport={fadeIn.viewport}
                      transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                    >
                      <Link href={link.href} className="text-muted-foreground hover:text-primary-foreground transition-colors">
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="lg:col-span-4"
            initial={fadeIn.initial}
            whileInView={fadeIn.whileInView}
            viewport={fadeIn.viewport}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <h3 className="font-headline text-xl mb-4 text-primary-foreground">Join the Newsletter</h3>
            <p className="text-muted-foreground mb-4">Get exclusive insights and updates.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-background/10 border-border text-primary-foreground placeholder:text-muted-foreground focus:bg-background/20" />
              <Button type="submit" size="icon" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 flex-shrink-0">
                <ArrowRight />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
