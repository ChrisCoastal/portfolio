import { useEffect, useState } from 'react';

import { breakPoints } from '@/constants/constants';

const useResizeWindow = () => {
  const [windowSize, setWindowSize] = useState<{
    innerHeight: number;
    innerWidth: number;
  }>({
    innerHeight: 0,
    innerWidth: 0,
  });

  useEffect(() => {
    const handleSize = () => {
      const { clientHeight, clientWidth } = document.documentElement;
      setWindowSize({
        innerHeight: clientHeight,
        innerWidth: clientWidth,
      });
    };

    document.addEventListener('resize', handleSize);

    // set initial size
    handleSize();
    return () => document.removeEventListener('resize', handleSize);
  }, []);

  return { windowSize, breakPoints };
};

export default useResizeWindow;
