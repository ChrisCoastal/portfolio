import { useEffect, useState } from 'react';

const useScrollY = () => {
  const [scrollY, setScrollY] = useState({
    pos: 0,
    isChange: false,
    isDown: false,
  });

  useEffect(() => {
    function isScroll() {
      if (window.scrollY > scrollY.pos)
        setScrollY({ pos: window.scrollY, isChange: true, isDown: true });
      if (window.scrollY < scrollY.pos)
        setScrollY({ pos: window.scrollY, isChange: true, isDown: false });
      if (window.scrollY === scrollY.pos || window.scrollY === 0)
        setScrollY({ pos: window.scrollY, isChange: false, isDown: false });
    }

    window.addEventListener('scroll', isScroll, { passive: true });
    return () => window.removeEventListener('scroll', isScroll);
  }, [scrollY.pos]);

  return scrollY;
};

export default useScrollY;
