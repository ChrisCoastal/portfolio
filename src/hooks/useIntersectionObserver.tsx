import { RefObject, useEffect, useState } from 'react';

export type ViewPortPos = 'above' | 'below' | 'intersect';

type ObserverState = {
  entry: IntersectionObserverEntry | null;
  from: ViewPortPos;
  viewPortPos: ViewPortPos;
};

type Observer = {
  elementRef: RefObject<HTMLElement>;
  options?: IntersectionObserverInit | null;
  observeAfterEntry?: boolean;
  callback?: (pos: ViewPortPos, from: ViewPortPos) => void;
};

const useIntersectionObserver = ({
  elementRef,
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  },
  observeAfterEntry = true,
  callback,
}: Observer) => {
  const [observerState, setObserverState] = useState<ObserverState>({
    entry: null,
    from: 'above',
    viewPortPos: 'above',
  });

  useEffect(() => {
    const element = elementRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      // intersecting
      if (!observerState.entry?.isIntersecting && entry.isIntersecting) {
        if (callback && observerState.viewPortPos === 'above') {
          callback('intersect', 'above');
        }
        if (callback && observerState.viewPortPos === 'below') {
          callback('intersect', 'below');
        }
        setObserverState((prev) => ({
          entry,
          from: prev.viewPortPos,
          viewPortPos: 'intersect',
        }));
      }

      if (observerState.entry?.isIntersecting && !entry.isIntersecting) {
        // below
        if (
          entry.target.getBoundingClientRect().top <= entry.rootBounds?.top!
        ) {
          setObserverState((prev) => ({
            entry,
            from: prev.viewPortPos,
            viewPortPos: 'below',
          }));
          callback && callback('below', 'intersect');

          // above
        } else {
          setObserverState((prev) => ({
            entry,
            from: prev.viewPortPos,
            viewPortPos: 'above',
          }));
          callback && callback('above', 'intersect');
        }
      }
      // unobserve after entry
      !observeAfterEntry && observer.unobserve(element!);
    }, options!);

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [
    observerState.entry,
    options,
    callback,
    elementRef,
    observeAfterEntry,
    observerState.viewPortPos,
  ]);

  return observerState;
};

export default useIntersectionObserver;
