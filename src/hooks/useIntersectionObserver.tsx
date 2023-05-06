import { RefObject, useEffect, useState } from 'react';

export type ViewPortPos = 'above' | 'below' | 'intersect';

type Observer = {
  entry: IntersectionObserverEntry | null;
  from: ViewPortPos;
  viewPortPos: ViewPortPos;
};

const useIntersectionObserver = (
  elementRef: RefObject<HTMLElement>,
  options: IntersectionObserverInit | null = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  },
  callbacks?: {
    intersect?: (state: ViewPortPos, from: ViewPortPos) => void;
    above?: (state: ViewPortPos) => void;
    below?: (state: ViewPortPos) => void;
  }
) => {
  const [observerState, setObserverState] = useState<Observer>({
    entry: null,
    from: 'above',
    viewPortPos: 'above',
  });

  useEffect(() => {
    const element = elementRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      // intersecting
      if (!observerState.entry?.isIntersecting && entry.isIntersecting) {
        if (callbacks?.intersect && observerState.viewPortPos === 'above')
          callbacks.intersect('intersect', 'above');
        if (callbacks?.intersect && observerState.viewPortPos === 'below')
          callbacks.intersect('intersect', 'below');

        setObserverState((prev) => ({
          entry,
          from: prev.viewPortPos,
          viewPortPos: 'intersect',
        }));
        console.log(entry, entry.isIntersecting);
      }

      // below
      if (observerState.entry?.isIntersecting && !entry.isIntersecting) {
        if (
          entry.target.getBoundingClientRect().top <= entry.rootBounds?.top!
        ) {
          setObserverState((prev) => ({
            entry,
            from: prev.viewPortPos,
            viewPortPos: 'below',
          }));
          console.log(entry, entry.isIntersecting);
          callbacks?.below && callbacks.below('below');
          return;

          // above
        } else {
          setObserverState((prev) => ({
            entry,
            from: prev.viewPortPos,
            viewPortPos: 'above',
          }));
          callbacks?.above && callbacks.above('above');
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
