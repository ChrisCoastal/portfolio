import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';

import { logos } from '@/assets';
import ProjectsCarousel from '@/components/ProjectsCarousel/ProjectsCarousel';
import ProjectImages from '@/components/ProjectsSection/ProjectImages';
import StackGallery from '@/components/StackGallery/StackGallery';
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';
import type { ProjectContent } from '@/constants/content';
import { mainSections, projectContent } from '@/constants/content';

type Props = {};

const ProjectsSection = (props: Props) => {
  const width = 320;
  const height = 320;

  const projects = Object.values(projectContent);

  function handleClick() {
    console.log('clicked');
  }

  return (
    <section className="border-t border-stone-500">
      <SectionTitle text={mainSections.projectsSection.title} />
      <div className="w-full">
        <div className="grid-row-2 mx-auto grid w-fit grid-cols-3 gap-2">
          {projects.map((project) => (
            <div key={uuid()} className="">
              <Link href={`/work/${project.path}`}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  onClick={handleClick}
                  width={width}
                  height={height}
                />
              </Link>
              <span className="flex items-center gap-2 text-black">
                <h4 className="pr-4 text-lg font-bold">{project.title}</h4>
                <span className="rounded-lg bg-green-200 px-2 text-xs backdrop-blur-md">
                  <p>{project.kind}</p>
                </span>
                <span className="rounded-lg bg-green-200 px-2 text-xs backdrop-blur-md">
                  <p>{project.year}</p>
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
