import { useRef, useEffect, useCallback } from 'react';

const useOpacity = (threshold = 0) => {
  const dom = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;

    if (entry.isIntersecting) {
      current.style.transitionProperty = 'opacity';
      current.style.transitionDuration = '0.5s';
      current.style.transitionTimingFunction = 'ease-in-out';
      current.style.transitionDelay = `0s`;
      current.style.opacity = '1';
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = dom;
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold });
      observer.observe(current);
      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: '0.2',
    },
  };
};

export default useOpacity;
