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
  const [intersectionEntry, setIntersectionEntry] =
    useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      // intersectionEntryRef.current = entry;
      console.log(entry);
      if (!intersectionEntry && entry.isIntersecting) {
        setIntersectionEntry(entry);
      }
      if (intersectionEntry && !entry.isIntersecting) {
        setIntersectionEntry(null);
      }
      // if (!intersectionEntryRef.current && entry.isIntersecting) {
      //   intersectionEntryRef.current = entry;
      //   // callback && callback();
      // }
      // if (intersectionEntryRef.current && !entry.isIntersecting) {
      //   intersectionEntryRef.current = entry;
      //   // callback && callback();
      // }
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
  }, [elementRef, options, intersectionEntry?.isIntersecting]);

  return intersectionEntry;
};

export default useIntersectionObserver;
