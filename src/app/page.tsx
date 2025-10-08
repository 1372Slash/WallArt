import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import GalleryMarquee from '@/components/home/GalleryMarquee';
import Hero from '@/components/home/Hero';
import Projects from '@/components/home/Projects';
import Services from '@/components/home/Services';

export default function Home() {
  return (
    <div className="container mx-auto px-4 pb-4">
      <Hero />
      <Projects />
      <Services />
      <GalleryMarquee />
      <About />
      <Contact />
    </div>
  );
}
