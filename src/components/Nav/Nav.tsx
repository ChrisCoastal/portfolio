import React from 'react';

import MenuIcon from '@/components/UI/icons/MenuIcon/MenuIcon';

type Props = {};

const Nav = (props: Props) => {
  function handleNav() {
    console.log('handleWheel');
    const scrollTo = document.getElementById('scrollTo') as HTMLDivElement;
    if (!scrollTo) return;
    scrollTo.scrollIntoView({ behavior: 'smooth' });
    // const canvas = document.getElementById('canvas')! as HTMLDivElement;
    // const event = new WheelEvent('wheel', { deltaY: 1000 });
    // canvas.dispatchEvent(event);
  }

  return (
    // <div className="absolute right-4 top-4 flex h-12 w-12 items-center rounded-full bg-pink-300">
    //   <button className="flex justify-center" onClick={handleNav}>
    //     <MenuIcon height="70%" width="70%" color="000" />
    //   </button>
    // </div>
    <div className="absolute right-4 top-4 flex h-12 w-12 flex-col items-center text-black">
      <ul onClick={handleNav}>push</ul>
    </div>
  );
};

export default Nav;
