import { useRef, useEffect, useCallback } from 'react';

const useLightOn = (brightness, threshold = 0) => {
  const dom = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;

    if (entry.isIntersecting) {
      current.style.transitionProperty = 'backdrop-filter';
      current.style.transitionDuration = '0.5s';
      current.style.transitionTimingFunction = 'ease-in-out';
      current.style.transitionDelay = `0s`;
      current.style.backdropFilter = 'brightness(100%)';
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
      backdropFilter: `brightness(${brightness}%)`,
    },
  };
};

export default useLightOn;
