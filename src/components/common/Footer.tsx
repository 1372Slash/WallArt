'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SlashLogo from './SlashLogo';
import { Button } from '../ui/button';
import { ArrowRight, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: <Twitter size={20} /> },
    { name: 'LinkedIn', href: '#', icon: <Linkedin size={20} /> },
    { name: 'GitHub', href: '#', icon: <Github size={20} /> },
    { name: 'Instagram', href: '#', icon: <Instagram size={20} /> },
  ];

  return (
    <footer className="sticky bottom-0 left-0 w-full bg-primary text-primary-foreground -z-10 rounded-t-3xl mt-4 py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h2 className="font-headline text-5xl md:text-7xl mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Have a project you'd like to discuss? I'm always open to new opportunities and collaborations.
          </p>
          <Button size="lg" asChild className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="#contact">
              Get in Touch <ArrowRight className="ml-2"/>
            </Link>
          </Button>

          <div className="mt-24">
            <div className="flex justify-center gap-6 mb-8">
              {socialLinks.map(link => (
                <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-primary-foreground transition-colors" aria-label={link.name}>
                  {link.icon}
                </Link>
              ))}
            </div>
            <div className='flex justify-center items-center gap-2'>
              <SlashLogo className="!text-lg" />
              <p className="text-sm text-muted-foreground">&copy; {currentYear} Slash Portfolio. All Rights Reserved.</p>
            </div>
          </div>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
