import React from 'react';
import Image from 'next/image';

import { mainSections } from '@/app/_pageContent/content';
import ScrollSection from '@/components/ScrollSection/ScrollSection';
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';
type Props = {};

const AboutSection = (props: Props) => {
  return (
    <ScrollSection>
      <SectionTitle text={mainSections.aboutSection.title} />
      <div className="flex justify-center gap-16 rounded-lg p-8 ">
        <div className="flex flex-col-reverse sm:flex-row">
          <p className="flex w-96 flex-col gap-2">
            <span>
              Drawing from the chances I have taken and . Bridging the space
              between{' '}
            </span>
            <span></span>
            <span>
              Attentive to detail Success is in the details, but remaining
              conscious of granularity of level to which that detail is suited
              for the end goal is paramount.
            </span>
            <span>
              I approach Stand out web apps that Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Facere magnam tenetur ratione,
              exercitationem fuga cumque modi repudiandae facilis quae esse
              voluptate unde beatae minus maiores ipsa molestiae voluptatem
              impedit labore asperiores similique, consectetur aliquid!
              Voluptate necessitatibus cupiditate nesciunt expedita? Quisquam
              doloribus sed cum fugit numquam, aperiam at et fugiat beatae ut
              corporis perferendis sit autem porro. Iure voluptate unde beatae
              corrupti.
            </span>
            <span>
              Incidunt, nihil quaerat sequi natus, illum sapiente architecto
              dignissimos corporis cupiditate tempora debitis placeat omnis rem
              saepe magnam! Nulla rem quia possimus eligendi omnis tempora cum
              incidunt, eveniet vel ut voluptate ab itaque magnam aut illo.
              Odit, recusandae repellendus? Check out my CV
            </span>
          </p>
          <div>
            <span className="relative overflow-hidden">
              {/* <span className="absolute left-1/2 top-1/3 z-20 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-teal-400 mix-blend-screen"></span> */}
              <div className="absolute bottom-1/4 right-0 z-20 h-48 w-48 rotate-45 bg-black sm:h-60 sm:w-60"></div>
              <Image
                src="/assets/about/chris-bw.jpg"
                alt="me"
                width={480}
                height={800}
                className=""
              />
            </span>
            {/* <video
              width="270"
              height="720"
              autoPlay
              loop
              preload=""
              className="absolute"
            >
              <source src="/assets/about/lights_480.mp4" type="video/mp4" />
            </video> */}
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default AboutSection;
