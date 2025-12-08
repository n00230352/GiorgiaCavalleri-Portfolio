import { useState } from 'react';
import projectsJSON from '@/assets/data/projects.json';
import ProjectCard from '@/components/ProjectCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

export default function Projects() {
  const [projects] = useState(projectsJSON);

    return (
    <section id="projects" className="py-20 sm:py-32 opacity-0">
      <div className="space-y-10">
        <div className="space-y-6 sm:space-y-8 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-light">Projects</h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Projects I have worked on.
          </p>
        </div>
        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.slug} className="md:basis-1/2 lg:basis-1/3">
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
    )
};