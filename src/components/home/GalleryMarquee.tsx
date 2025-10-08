'use client';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

const marqueeImages = [
    ...PlaceHolderImages.filter(img => img.id.startsWith('project-')),
    ...PlaceHolderImages.filter(img => img.id.startsWith('hero-'))
];

const MarqueeItem = ({ imageUrl, alt, hint, reverse = false }: { imageUrl: string, alt: string, hint: string, reverse?: boolean }) => {
    return (
        <div className="relative aspect-video w-[60vw] md:w-[30vw] shrink-0 overflow-hidden rounded-2xl border">
            <Image
                src={imageUrl}
                alt={alt}
                data-ai-hint={hint}
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
        </div>
    )
}

const GalleryMarquee = () => {
    const marqueeVariants = {
        animate: {
            x: ['0%', '-100%'],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 50,
                    ease: 'linear',
                },
            },
        },
    };

    return (
        <section id="gallery" className="py-24 md:py-32 overflow-hidden">
             <h2 className="font-headline text-5xl md:text-7xl mb-12 text-center">Gallery</h2>
            <div className="relative flex flex-nowrap">
                <motion.div className="flex items-center gap-4" variants={marqueeVariants} animate="animate">
                    {marqueeImages.map((img, i) => <MarqueeItem key={`p1-${i}`} imageUrl={img.imageUrl} alt={img.description} hint={img.imageHint} />)}
                    {marqueeImages.map((img, i) => <MarqueeItem key={`p2-${i}`} imageUrl={img.imageUrl} alt={img.description} hint={img.imageHint} />)}
                </motion.div>
            </div>
        </section>
    );
};

export default GalleryMarquee;
