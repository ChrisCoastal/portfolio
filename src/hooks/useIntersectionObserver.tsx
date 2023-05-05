import { RefObject, useEffect, useState } from 'react';

type Observer = {
  entry: IntersectionObserverEntry | null;
  viewPortPos: 'above' | 'below' | 'intersect';
  callback?: () => void;
};

const useIntersectionObserver = (
  elementRef: RefObject<HTMLElement>,
  options: IntersectionObserverInit | null = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  },
  callback?: () => void
) => {
  const [observerState, setObserverState] = useState<Observer>({
    entry: null,
    viewPortPos: 'above',
  });

  useEffect(() => {
    const element = elementRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (!observerState.entry?.isIntersecting && entry.isIntersecting) {
        setObserverState({ entry, viewPortPos: 'intersect' });
        callback && callback();
        console.log(entry, entry.isIntersecting);
      }

      if (observerState.entry?.isIntersecting && !entry.isIntersecting) {
        if (
          entry.target.getBoundingClientRect().top <= entry.rootBounds?.top!
        ) {
          setObserverState({ entry, viewPortPos: 'below' });
          console.log(entry, entry.isIntersecting);
          return;
        } else {
          setObserverState({ entry, viewPortPos: 'above' });
          console.log(entry, entry.isIntersecting);
          return;
        }
      }
    }, options!);

    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, options, observerState.entry?.isIntersecting]);

  return observerState;
};

export default useIntersectionObserver;
