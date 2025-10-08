'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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

const About = () => {
    const aboutImage = PlaceHolderImages.find(img => img.id === 'hero-profile');

    return (
        <section id="about" className="py-24 md:py-32">
             <h2 className="font-headline text-5xl md:text-7xl mb-12 text-center">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px] lg:auto-rows-[220px]">
                {aboutImage && (
                    <MotionCard className="md:col-span-1 md:row-span-2">
                        <Image
                            src={aboutImage.imageUrl}
                            alt={aboutImage.description}
                            data-ai-hint={aboutImage.imageHint}
                            fill
                            className="object-cover"
                        />
                    </MotionCard>
                )}
                <MotionCard className="md:col-span-2">
                    <h3 className="font-headline text-3xl mb-4">A bit about me</h3>
                    <p className="text-lg text-muted-foreground">
                        I'm a passionate creative developer with a love for building beautiful, cinematic, and interactive web experiences. My journey into code started with a fascination for how design and technology could merge to create something truly magical.
                    </p>
                </MotionCard>
                 <MotionCard className="md:col-span-1">
                    <h3 className="font-headline text-2xl mb-2">My Philosophy</h3>
                     <p className="text-sm text-muted-foreground">
                        I believe that every scroll, click, and transition is an opportunity to tell a story and create an emotional impact.
                    </p>
                </MotionCard>
                <MotionCard className="md:col-span-1">
                    <h3 className="font-headline text-2xl mb-2">Off the Clock</h3>
                     <p className="text-sm text-muted-foreground">
                        When not coding, you'll find me exploring coffee shops, behind a camera, or lost in a good film.
                    </p>
                </MotionCard>
                 <MotionCard className="md:col-span-2">
                     <Link href="#contact" className="h-full flex flex-col justify-between">
                        <div>
                        <h2 className="font-headline text-3xl">Let's connect</h2>
                        <p className="text-muted-foreground">Always open to new ideas and collaborations.</p>
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

export default About;
