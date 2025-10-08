'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Code, PenTool, PlayCircle } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const MotionCard = ({ children, className, ...props }: any) => (
  <motion.div
    whileHover={{ scale: 1.03, zIndex: 10 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className={cn("bg-secondary rounded-3xl p-6 relative overflow-hidden", className)}
    {...props}
  >
    {children}
  </motion.div>
);

const Era = () => {
  const profileImage = PlaceHolderImages.find(img => img.id === 'hero-profile');
  const workImage1 = PlaceHolderImages.find(img => img.id === 'hero-work-1');
  const workImage2 = PlaceHolderImages.find(img => img.id === 'hero-work-2');

  const fadeIn = {
    initial: { clipPath: 'inset(0 100% 0 0)' },
    animate: (i: number) => ({
      clipPath: 'inset(0 0 0 0)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 + i * 0.1 }
    })
  };

  return (
    <section className="py-24 md:py-32">
       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
          <MotionCard className="md:col-span-4 row-span-2 flex flex-col justify-between">
            <motion.h1 custom={0} initial={fadeIn.initial} animate={fadeIn.animate(0)} className="font-headline text-5xl md:text-8xl">
              Cinematic Web Experiences
            </motion.h1>
            <motion.p custom={1} initial={fadeIn.initial} animate={fadeIn.animate(1)} className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              A creative developer crafting bold, interactive digital portfolios.
            </motion.p>
          </MotionCard>
          
          {profileImage && (
              <MotionCard className="md:col-span-2 row-span-2">
                  <Image src={profileImage.imageUrl} alt={profileImage.description} data-ai-hint={profileImage.imageHint} fill className="object-cover" />
              </MotionCard>
          )}

          <MotionCard className="md:col-span-2">
              <h2 className="font-headline text-2xl mb-2">My Toolkit</h2>
              <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-1 bg-background/50 text-sm px-2 py-1 rounded-full"><Code size={14}/> Next.js</span>
                  <span className="flex items-center gap-1 bg-background/50 text-sm px-2 py-1 rounded-full"><PlayCircle size={14}/> GSAP</span>
                  <span className="flex items-center gap-1 bg-background/50 text-sm px-2 py-1 rounded-full"><PenTool size={14}/> Framer</span>
              </div>
          </MotionCard>

          <MotionCard className="md:col-span-2">
            <Link href="#contact" className="h-full flex flex-col justify-between">
              <div>
                <h2 className="font-headline text-2xl">Have a project?</h2>
                <p className="text-muted-foreground">Let's build something epic.</p>
              </div>
              <div className="flex items-center justify-end">
                <Button size="icon" className="rounded-full w-12 h-12 bg-primary text-primary-foreground">
                  <ArrowRight />
                </Button>
              </div>
            </Link>
          </MotionCard>
      </div>
    </section>
  );
};

export default Era;
