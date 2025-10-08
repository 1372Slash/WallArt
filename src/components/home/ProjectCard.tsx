'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type ProjectCardProps = {
  project: {
    id: string;
    title: string;
    description: string;
    image: {
      id: string;
      description: string;
      imageUrl: string;
      imageHint: string;
    };
    tags: string[];
  };
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ y: 50, clipPath: 'inset(10% 10% 90% 10%)' }}
      whileInView={{ y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href="#">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4 border">
          <Image
            src={project.image.imageUrl}
            alt={project.image.description}
            data-ai-hint={project.image.imageHint}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-headline text-2xl">{project.title}</h3>
            <p className="text-muted-foreground">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-sm px-2 py-1 bg-secondary rounded-full">{tag}</span>
              ))}
            </div>
          </div>
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-secondary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-45">
            <ArrowRight size={20} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
