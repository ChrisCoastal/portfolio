import React from 'react';

import ProjectsCarousel from '@/components/ProjectsCarousel/ProjectsCarousel';
import ProjectImages from '@/components/ProjectsSection/ProjectImages';
import StackGallery from '@/components/StackGallery/StackGallery';
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';
import { mainSections } from '@/utils/content';

type Props = {};

const ProjectsSection = (props: Props) => {
  return (
    <section>
      <SectionTitle text={mainSections.projectsSection.title} />
      {/* <ProjectsCarousel /> */}
      <ProjectImages />
    </section>
  );
};

export default ProjectsSection;
