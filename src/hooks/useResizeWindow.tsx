import { useCallback, useEffect, useState } from 'react';

import type { BreakPoint } from '@/@types/types';
import { breakPoints } from '@/constants/constants';

const useResizeWindow = (callback?: () => any) => {
  const getBreakPoint = useCallback((innerWidth: number) => {
    let breakPoint: BreakPoint | undefined;
    for (const [key, value] of Object.entries(breakPoints)) {
      if (innerWidth > value) {
        breakPoint = key as BreakPoint;
      }
    }
    return breakPoint;
  }, []);

  const [windowSize, setWindowSize] = useState<{
    innerHeight: number;
    innerWidth: number;
  }>({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      const { innerHeight, innerWidth } = event.currentTarget as Window;
      setWindowSize({
        innerHeight,
        innerWidth,
      });
      callback && callback();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [callback]);

  return { windowSize, breakPoints };
};

export default useResizeWindow;
