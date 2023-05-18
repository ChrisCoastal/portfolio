import React from 'react';
import Image from 'next/image';

import SectionTitle from '@/components/UI/SectionTitle/SectionTitle';
import { mainSections } from '@/constants/content';
type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section className="border-t border-stone-500">
      <SectionTitle text={mainSections.aboutSection.title} />
      <div className="flex justify-center gap-16 rounded-lg p-8">
        <div className="flex">
          <p className="flex w-96 flex-col gap-2">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sit
              perferendis beatae sapiente, vero ullam natus quam incidunt
              laboriosam iure, est deleniti. Autem incidunt voluptatibus
              provident labore recusandae rerum dicta.
            </span>
            <span>
              Voluptatum ipsam repellat quas illum quia sequi eveniet numquam.
              Quasi eos accusantium omnis ipsa error fuga maiores deleniti quam
              obcaecati?
            </span>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              magnam tenetur ratione, exercitationem fuga cumque modi
              repudiandae facilis quae esse voluptate unde beatae minus maiores
              ipsa molestiae voluptatem impedit labore asperiores similique,
              consectetur aliquid! Voluptate necessitatibus cupiditate nesciunt
              expedita? Quisquam doloribus sed cum fugit numquam, aperiam at et
              fugiat beatae ut corporis perferendis sit autem porro. Iure
              voluptate unde beatae corrupti.
            </span>
            <span>
              Incidunt, nihil quaerat sequi natus, illum sapiente architecto
              dignissimos corporis cupiditate tempora debitis placeat omnis rem
              saepe magnam! Nulla rem quia possimus eligendi omnis tempora cum
              incidunt, eveniet vel ut voluptate ab itaque magnam aut illo.
              Odit, recusandae repellendus?
            </span>
          </p>
          <div>
            <span className="relative overflow-hidden">
              {/* <span className="absolute left-1/2 top-1/3 z-20 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-teal-400 mix-blend-screen"></span> */}
              <div className="absolute bottom-1/4 right-0 z-20 h-60 w-60 rotate-45 bg-black"></div>
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
    </section>
  );
};

export default AboutSection;
