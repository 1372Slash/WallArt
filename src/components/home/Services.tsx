'use client'
import { motion } from 'framer-motion';
import { Code, PenTool, Gem } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '../ui/button';
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

const services = [
    {
        icon: <Code size={24} />,
        title: 'Web Development',
        description: 'Building modern, performant, and scalable web applications using the latest technologies like Next.js and React.'
    },
    {
        icon: <PenTool size={24} />,
        title: 'UI/UX Design',
        description: 'Crafting intuitive and beautiful user interfaces that provide a seamless user experience, with a focus on cinematic and interactive design.'
    },
    {
        icon: <Gem size={24} />,
        title: 'Creative Direction',
        description: 'Leading the artistic vision for digital projects, ensuring a cohesive and impactful brand presence.'
    }
]

const Services = () => {
    return (
        <section id="services" className="py-24 md:py-32">
            <h2 className="font-headline text-5xl md:text-7xl mb-12 text-center">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px] lg:auto-rows-[200px]">
                {services.map((service, index) => (
                    <MotionCard
                        key={service.title}
                        className="flex flex-col justify-between"
                    >
                        <div>
                            <div className="mb-4 text-primary bg-background rounded-full p-3 inline-flex">
                                {service.icon}
                            </div>
                            <h3 className="font-headline text-2xl mb-2">{service.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{service.description}</p>
                    </MotionCard>
                ))}
                 <MotionCard className="md:col-span-3">
                    <Link href="#contact" className="h-full flex flex-col justify-between md:flex-row md:items-center">
                        <div>
                        <h2 className="font-headline text-3xl">Have a project?</h2>
                        <p className="text-muted-foreground">Let's build something epic together.</p>
                        </div>
                        <div className="flex items-center justify-end">
                        <Button size="icon" className="rounded-full w-16 h-16 bg-primary text-primary-foreground">
                            <ArrowRight />
                        </Button>
                        </div>
                    </Link>
                </MotionCard>
            </div>
        </section>
    );
}

export default Services;
