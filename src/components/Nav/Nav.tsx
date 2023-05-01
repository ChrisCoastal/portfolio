import React from 'react';

import MenuIcon from '@/components/UI/icons/MenuIcon/MenuIcon';

type Props = {};

const Nav = (props: Props) => {
  function handleNav() {
    const stack = document.getElementById('stack')!;
    console.log(stack.offsetTop);
    // stack.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="absolute right-4 top-4 flex h-12 w-12 items-center rounded-full bg-pink-300">
      <button className="flex justify-center" onClick={handleNav}>
        <MenuIcon height="70%" width="70%" color="000" />
      </button>
    </div>
  );
};

export default Nav;
