import React from 'react';

import ProjectsCarousel from '@/components/ProjectsCarousel/ProjectsCarousel';
import ProjectImages from '@/components/ProjectsSection/ProjectImages';
import StackGallery from '@/components/StackGallery/StackGallery';
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';
import { mainPage } from '@/utils/textContent';

type Props = {};

const ProjectsSection = (props: Props) => {
  return (
    <div>
      <SectionTitle text={mainPage.projectsSection.title} />
      {/* <ProjectsCarousel /> */}
      <ProjectImages />
    </div>
  );
};

export default ProjectsSection;
