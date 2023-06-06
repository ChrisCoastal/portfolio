import { useCallback, useEffect, useState } from 'react';

import type { BreakPoint } from '@/@types/types';
import { breakPoints } from '@/constants/constants';

const useResizeWindow = () => {
  const getBreakPoint = useCallback((innerWidth: number) => {
    for (const [key, value] of Object.entries(breakPoints).reverse()) {
      if (innerWidth < value) {
        return key as BreakPoint;
      }
    }
  }, []);

  const [windowSize, setWindowSize] = useState<{
    innerHeight: number;
    innerWidth: number;
    breakPoint: BreakPoint | undefined;
  }>({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    breakPoint: getBreakPoint(window.innerWidth),
  });

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      const { innerHeight, innerWidth } = event.currentTarget as Window;
      const breakPoint = getBreakPoint(innerWidth);
      setWindowSize({
        innerHeight,
        innerWidth,
        breakPoint,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getBreakPoint]);

  return windowSize;
};

export default useResizeWindow;
