import React from 'react';
import Link from 'next/link';

import Title from '@/components/UI/Title/Title';

const page = () => {
  return (
    <div className="trans relative cursor-auto flex-col items-center justify-center gap-4">
      <div>
        <Title className="z-20 w-full cursor-auto text-center text-2xl">
          4
          <span className="cursor-auto text-base tracking-tighter sm:text-2xl">
            ◆
          </span>
          4
        </Title>
      </div>
      <p className="max-w-xs cursor-auto">
        This isn&apos;t very nice. I&apos;m not sure how we got here... but I
        know how to get{' '}
        <Link href={'/'} className="cursor-pointer underline">
          home
        </Link>
        .
      </p>
    </div>
  );
};

export default page;
