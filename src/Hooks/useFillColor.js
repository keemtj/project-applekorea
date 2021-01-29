import { useRef, useEffect, useCallback } from 'react';

const useFillColor = (percent, threshold = 0) => {
  const dom = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;

    if (entry.isIntersecting) {
      current.style.transitionProperty =
        'background -webkit-background-clip color';
      current.style.transitionDuration = '5s';
      current.style.transitionTimingFunction = 'linear';
      current.style.transitionDelay = `0s`;
      current.style.background =
        'linear-gradient(to top, #4cd265 0% 100%, white 100% 100%)';
      current.style.WebkitBackgroundClip = 'text';
      current.style.color = 'transparent';
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
      background: `linear-gradient(to top, #4cd265 0% ${percent}%, white ${percent}% 100%)`,
      WebkitBackgroundClip: 'text',
      color: 'transparent',
    },
  };
};

export default useFillColor;
