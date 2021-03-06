import { useRef, useEffect, useCallback } from 'react';

const useScrollFadeIn = (direction = 'stop', threshold = 0, delay = 0) => {
  const dom = useRef();

  const handleDirection = name => {
    switch (name) {
      case 'stop':
        return 'translate3d(0,0,0)';
      case 'up':
        return 'translate3d(0, 50%, 0)';
      default:
        return;
    }
  };

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;

    if (entry.isIntersecting) {
      current.style.transitionProperty = 'opacity transform';
      current.style.transitionDuration = '1s';
      current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
      current.style.transitionDelay = `${delay}s`;
      current.style.opacity = 1;
      current.style.transform = 'translate3d(0, 0, 0)';
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
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
};

export default useScrollFadeIn;
