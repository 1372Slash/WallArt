import Hero from '@/components/home/Hero';
import Projects from '@/components/home/Projects';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Projects />
    </div>
  );
}
