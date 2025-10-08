'use client'
import { motion } from 'framer-motion';
import { Code, PenTool, Gem } from 'lucide-react';

const services = [
    {
        icon: <Code size={32} />,
        title: 'Web Development',
        description: 'Building modern, performant, and scalable web applications using the latest technologies like Next.js and React.'
    },
    {
        icon: <PenTool size={32} />,
        title: 'UI/UX Design',
        description: 'Crafting intuitive and beautiful user interfaces that provide a seamless user experience, with a focus on cinematic and interactive design.'
    },
    {
        icon: <Gem size={32} />,
        title: 'Creative Direction',
        description: 'Leading the artistic vision for digital projects, ensuring a cohesive and impactful brand presence across all platforms.'
    }
]

const Services = () => {
    return (
        <section id="services" className="py-24 md:py-32">
            <h2 className="font-headline text-5xl md:text-7xl mb-12 text-center">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
                        className="bg-secondary p-8 rounded-3xl text-center flex flex-col items-center"
                    >
                        <div className="mb-4 text-primary bg-background rounded-full p-4 inline-flex">
                            {service.icon}
                        </div>
                        <h3 className="font-headline text-2xl mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Services;
