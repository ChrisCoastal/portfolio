import React from 'react';

import MenuIcon from '@/components/UI/icons/MenuIcon/MenuIcon';

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="absolute right-4 top-4 h-12 w-12 rounded-full bg-pink-500">
      <MenuIcon height="80%" width="80%" color="000" />
    </div>
  );
};

export default Nav;
