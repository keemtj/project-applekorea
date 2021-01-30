import { useRef, useEffect, useCallback } from 'react';

const useFillColor = (threshold = 0) => {
  const dom = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;

    if (entry.isIntersecting) {
      current.style.transitionProperty = 'all';
      current.style.transitionDuration = '2s';
      current.style.transitionTimingFunction = 'linear';
      current.style.transitionDelay = `0s`;
      current.style.background =
        'linear-gradient(to top, #4cd265 50%, white 50%)';
      current.style.backgroundSize = '100% 200%';
      current.style.backgroundPosition = 'bottom left';
      current.style.WebkitBackgroundClip = 'text';
      current.style.WebkitTextFillColor = 'transparent';
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
      background: `linear-gradient(to top, #4cd265 50%, white 50%)`,
      backgroundSize: '100% 200%',
      backgroundPosition: 'top left',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  };
};

export default useFillColor;
