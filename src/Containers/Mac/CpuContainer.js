import React, { useState } from 'react';
import Cpu from '../../Components/Mac/Cpu';

const CpuContainer = () => {
  const [modalState, setModalState] = useState(false);
  const onModal = () => {
    setModalState(!modalState);
  };
  return (
    <Cpu
      modalState={modalState}
      setModalState={setModalState}
      onModal={onModal}
    />
  );
};

export default CpuContainer;
