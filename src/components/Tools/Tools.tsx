import React from 'react';
import Image from 'next/image';

import { logos } from '@/utils/content';

type Props = {};

const Tools = (props: Props) => {
  return (
    <div className="m-8 mt-24 flex flex-col gap-8">
      <h3 className="text-4xl font-semibold">Standard +</h3>

      <div className="flex w-full justify-between">
        <span className="h-16 w-16 rounded-md bg-white/40 p-1">
          <Image
            src={logos.figmaLogo}
            alt={'text'}
            className={`grayscale transition-all duration-[1200ms] ease-in-out hover:grayscale-0`}
          />
        </span>
        <span className="h-16 w-16 rounded-md bg-white/40 p-1">
          <Image
            src={logos.figmaLogo}
            alt={'text'}
            className={`grayscale transition-all duration-[1200ms] ease-in-out hover:grayscale-0`}
          />
        </span>
        <span className="h-16 w-16 rounded-md bg-white/40 p-1">
          <Image
            src={logos.figmaLogo}
            alt={'text'}
            className={`grayscale transition-all duration-[1200ms] ease-in-out hover:grayscale-0`}
          />
        </span>
        <span className="h-16 w-16 rounded-md bg-white/40 p-1">
          <Image
            src={logos.figmaLogo}
            alt={'text'}
            className={`grayscale transition-all duration-[1200ms] ease-in-out hover:grayscale-0`}
          />
        </span>
      </div>
      <p>
        I build with standard tools and languages, while continually searching
        out and folding in future classic aesthetics and technologies.
      </p>
      <div className="flex w-full flex-wrap gap-2 rounded-md bg-teal-700/40 p-2">
        <span className="h-12 w-12 rounded-md p-1">
          <Image
            src={logos.figmaLogo}
            alt={'text'}
            className={`grayscale transition-all duration-[1200ms] ease-in-out hover:grayscale-0`}
          />
        </span>
        <span className="h-12 w-12 rounded-md p-1">
          <Image
            src={logos.figmaLogo}
            alt={'text'}
            className={`grayscale transition-all duration-[1200ms] ease-in-out hover:grayscale-0`}
          />
        </span>
        <span className="h-12 w-12 rounded-md p-1">
          <Image
            src={logos.figmaLogo}
            alt={'text'}
            className={`grayscale transition-all duration-[1200ms] ease-in-out hover:grayscale-0`}
          />
        </span>
        <span className="h-12 w-12 rounded-md p-1">
          <Image
            src={logos.figmaLogo}
            alt={'text'}
            className={`grayscale transition-all duration-[1200ms] ease-in-out hover:grayscale-0`}
          />
        </span>
        <span className="h-12 w-12 rounded-md p-1">
          <Image
            src={logos.figmaLogo}
            alt={'text'}
            className={`grayscale transition-all duration-[1200ms] ease-in-out hover:grayscale-0`}
          />
        </span>
        <span className="h-12 w-12 rounded-md p-1">
          <Image
            src={logos.figmaLogo}
            alt={'text'}
            className={`grayscale transition-all duration-[1200ms] ease-in-out hover:grayscale-0`}
          />
        </span>
        <span className="h-12 w-12 rounded-md p-1">
          <Image
            src={logos.figmaLogo}
            alt={'text'}
            className={`grayscale transition-all duration-[1200ms] ease-in-out hover:grayscale-0`}
          />
        </span>
        <span className="h-12 w-12 rounded-md p-1">
          <Image
            src={logos.figmaLogo}
            alt={'text'}
            className={`grayscale transition-all duration-[1200ms] ease-in-out hover:grayscale-0 `}
          />
        </span>
        <span className="h-12 w-12 rounded-md p-1">
          <Image
            src={logos.figmaLogo}
            alt={'text'}
            className={`grayscale transition-all duration-[1200ms] ease-in-out hover:grayscale-0`}
          />
        </span>
        <span className="h-12 w-12 rounded-md p-1">
          <Image
            src={logos.figmaLogo}
            alt={'text'}
            className={`grayscale transition-all duration-[1200ms] ease-in-out hover:grayscale-0`}
          />
        </span>
      </div>
    </div>
  );
};

export default Tools;
