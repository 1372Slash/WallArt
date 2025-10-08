'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const About = () => {
    const aboutImage = PlaceHolderImages.find(img => img.id === 'hero-profile');

    return (
        <section id="about" className="py-24 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {aboutImage && (
                        <div className="relative aspect-square rounded-3xl overflow-hidden border">
                            <Image
                                src={aboutImage.imageUrl}
                                alt={aboutImage.description}
                                data-ai-hint={aboutImage.imageHint}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                    <h2 className="font-headline text-5xl md:text-7xl mb-6">About Me</h2>
                    <div className="space-y-4 text-lg text-muted-foreground">
                        <p>
                            I'm a passionate creative developer with a love for building beautiful, cinematic, and interactive web experiences. My journey into code started with a fascination for how design and technology could merge to create something truly magical.
                        </p>
                        <p>
                            With a background in visual design, I bring a unique perspective to development, focusing not just on functionality but on the emotional impact of the digital product. I believe that every scroll, click, and transition is an opportunity to tell a story.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new coffee shops, capturing moments through my camera lens, or getting lost in a good film.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
