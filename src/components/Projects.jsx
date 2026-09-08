import { useState } from 'react';
import projects from '@/assets/data/projects.json';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section id="projects" className="bg-white pt-8 pb-16 text-[#292a26] sm:pt-12 sm:pb-24" aria-labelledby="work-title">
      <div className="mx-auto w-[88%] max-w-[1280px]">
        <h2 id="work-title" className="m-0 text-center [font-family:'Arial_Black',Arial,Helvetica,sans-serif] text-[clamp(40px,6.4vw,94px)] leading-none font-black tracking-[-0.065em] max-[600px]:text-[clamp(39px,10.5vw,63px)]">PROJECTS</h2>
        <div className="mt-8 mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#292a26]/20 pb-4 sm:mt-12">
          <p className="text-[10px] tracking-[0.15em] uppercase">Selected work</p>
          <button className="text-link" aria-expanded={showAll} aria-controls="project-grid" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show selected works' : `View all ${projects.length} projects`} <span aria-hidden="true">{showAll ? '−' : '↗'}</span></button>
        </div>
        <div id="project-grid" className="mt-10 space-y-14 sm:mt-14 sm:space-y-20 lg:space-y-24">
          {(showAll ? projects : projects.slice(0, 4)).map((project, index) => <ProjectCard key={project.slug + index} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}
