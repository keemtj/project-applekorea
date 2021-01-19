import React from 'react';
import { useSelector } from 'react-redux';
import Mac from '../../Components/Mac/Mac';

const MacContainer = () => {
  const main = useSelector(state => state.mac.main);
  return <Mac main={main} />;
};

export default MacContainer;
