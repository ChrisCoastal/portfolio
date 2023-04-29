import React, { FC } from 'react';

type HeroProps = { pos: number };

const Hero: FC<HeroProps> = ({ pos }) => {
  return (
    <div className="fixed mt-48 h-screen w-full">
      <div className={`mb-16 w-full text-center`}>
        <h1 className={`text-8xl font-semibold`}>
          that looks <br /> like a problem...
        </h1>
        {/* <h1 className="">
          I like to build creative solutions <span>problems</span> in nice ways.
        </h1> */}
      </div>
    </div>
  );
};

export default Hero;
