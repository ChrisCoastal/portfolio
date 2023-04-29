import React from 'react';

import MenuIcon from '@/components/UI/icons/MenuIcon/MenuIcon';

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="absolute right-4 top-4 flex h-12 w-12 items-center rounded-full bg-pink-300">
      <a className="flex justify-center" href="stack">
        <MenuIcon height="70%" width="70%" color="000" />
      </a>
    </div>
  );
};

export default Nav;
