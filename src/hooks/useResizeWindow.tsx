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
      const { innerHeight, innerWidth } = window as Window;
      setWindowSize({
        innerHeight,
        innerWidth,
      });
    };

    window.addEventListener('resize', handleSize);

    // set initial size
    handleSize();
    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return { windowSize, breakPoints };
};

export default useResizeWindow;
