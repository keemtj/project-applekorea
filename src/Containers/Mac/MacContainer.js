import React, { useLayoutEffect } from 'react';
import Mac from '../../Components/Mac/Mac';

const MacContainer = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = 'black';
    // window.scrollTo(0, 0);
  }, []);
  return <Mac />;
};

export default MacContainer;
