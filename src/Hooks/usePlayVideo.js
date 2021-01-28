import { useRef, useEffect, useCallback } from 'react';

const usePlayVideo = (threshold = 0) => {
  const dom = useRef();
  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;

    if (entry.isIntersecting) {
      // 진입했을 때 발생할 이벤트
      current.played.length !== 1 && current.play();
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
    autoPlay: false,
  };
};

export default usePlayVideo;
