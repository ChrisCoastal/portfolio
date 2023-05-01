import React, { FC, useState } from 'react';

type HeroProps = {};

const Hero: FC<HeroProps> = () => {
  return (
    <div className={`absolute mt-48 h-screen w-full`}>
      <div className={`mx-auto flex w-full flex-col justify-center gap-4`}>
        <h1 className="text-4xl text-black">Yup, that&apos;s a problem.</h1>
      </div>
    </div>
  );
};

export default Hero;
