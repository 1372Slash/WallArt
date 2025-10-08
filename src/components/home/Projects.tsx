import { PlaceHolderImages } from "@/lib/placeholder-images";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: "proj-1",
    title: "Project One",
    description: "A bold and beautiful web experience.",
    image: PlaceHolderImages.find(img => img.id === 'project-1')!,
    tags: ["Web Design", "Next.js", "GSAP"]
  },
  {
    id: "proj-2",
    title: "Project Two",
    description: "Interactive 3D product visualizer.",
    image: PlaceHolderImages.find(img => img.id === 'project-2')!,
    tags: ["Three.js", "E-commerce", "Animation"]
  },
  {
    id: "proj-3",
    title: "Project Three",
    description: "Mobile app for a creative agency.",
    image: PlaceHolderImages.find(img => img.id === 'project-3')!,
    tags: ["React Native", "UI/UX", "Mobile"]
  },
  {
    id: "proj-4",
    title: "Project Four",
    description: "Cinematic portfolio for a photographer.",
    image: PlaceHolderImages.find(img => img.id === 'project-4')!,
    tags: ["Framer Motion", "Portfolio", "Photography"]
  }
];

const Projects = () => {
  return (
    <section id="work" className="py-24 md:py-32">
       <h2 className="font-headline text-5xl md:text-7xl mb-12 text-center">Featured Work</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
       </div>
    </section>
  );
};

export default Projects;
