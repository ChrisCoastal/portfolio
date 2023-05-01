import React, { useRef } from 'react';

const useDebounce = () => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const debounce = (callback: any, interval: number) => {
    timerRef.current && clearTimeout(timerRef.current);

    const timer = setTimeout(() => {
      callback();
    }, interval);

    timerRef.current = timer;
  };

  return { debounce, timerRef };
};

export default useDebounce;
