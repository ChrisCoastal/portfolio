import React, { useRef } from 'react';

import MenuIcon from '@/components/UI/icons/MenuIcon/MenuIcon';
import { animated, useChain, useSpring } from '@react-spring/web';

type ProjectNavProps = {};

const ProjectNav = () => {
  const showNavRef = useRef(false);

  const [menuStyles, animateMenu] = useSpring(() => ({
    from: {
      top: 0,
      right: 0,
      y: -50,
      x: 50,
    },
    config: {
      friction: 280,
      tension: 280,
      mass: 1,
    },
  }));

  function toggleNav() {
    //
  }

  return (
    <div className="flex justify-end">
      <animated.div className="fixed z-[1000] mr-4 mt-4 flex h-12 w-12 items-center bg-pink-300 shadow-md">
        <button className="flex justify-center" onClick={toggleNav}>
          <MenuIcon height="70%" width="70%" color="000" />
        </button>
      </animated.div>
    </div>
  );
};

export default ProjectNav;
