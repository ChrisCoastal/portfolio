import { RefObject, useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (
  elementRef: RefObject<HTMLElement>,
  options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  },
  callback?: () => void
) => {
  // const [intersectionEntry, setIntersectionEntry] =
  //   useState<IntersectionObserverEntry | null>(null);
  const intersectionEntryRef = useRef<IntersectionObserverEntry>();

  useEffect(() => {
    const element = elementRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      console.log(entry);
      if (!intersectionEntryRef.current && entry.isIntersecting) {
        intersectionEntryRef.current = entry;
        callback && callback();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, options, intersectionEntryRef.current?.isIntersecting]);

  return intersectionEntryRef.current;
};

export default useIntersectionObserver;
