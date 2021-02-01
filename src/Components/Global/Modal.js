import React from 'react';
import styled from 'styled-components';

const Modal = () => {
  return (
    <StModal>
      <StModalContents>
        <h3>모달 헤더</h3>
        <p>모달 문단</p>
        <button>x</button>
      </StModalContents>
    </StModal>
  );
};

const StModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;

  position: fixed;
  left: 0;
  top: 0;
`;

const StModalContents = styled.div`
  background: white;
  padding: 3rem;
  width: 40rem;
  height: auto;
`;

export default Modal;
