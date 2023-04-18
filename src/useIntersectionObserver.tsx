import { RefObject, useEffect, useState } from 'react';

const useIntersectionObserver = (
  elementRef: RefObject<HTMLElement>,
  options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  },
  callback?: () => void
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (!isIntersecting && entry.isIntersecting) {
        setIsIntersecting(entry.isIntersecting);
        // callback && callback();
      }
    }, options);

    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, options, isIntersecting, callback]);

  return isIntersecting;
};

export default useIntersectionObserver;
