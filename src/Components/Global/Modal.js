import React from 'react';
import styled from 'styled-components';
import ModalPortal from '../../ModalPortal';
import { Close } from '@styled-icons/evaicons-solid/Close';
// import ModalSubContents from './ModalSubContents';
import ModalSubContentsContainer from '../../Containers/Global/ModalSubContentsContainer';

const Modal = ({ modalState, setModalState }) => {
  console.log(modalState, setModalState);
  const onCloseModal = () => {
    // if (!modalState) {
    //   document.body.style.overflow = 'hidden';
    // }
    setModalState(!modalState);
  };

  return (
    <ModalPortal>
      <StModal>
        <StModalContentsWrapper>
          <StModalContents>
            <h3>모달 제목</h3>
            <StContent>
              <h4>모달 서브 제목</h4>
              <StParagraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </StParagraph>
            </StContent>
            <StContent>
              <h4>모달 서브 제목</h4>
              <StParagraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </StParagraph>
            </StContent>
            <StContent>
              <h4>모달 서브 제목</h4>
              <StParagraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </StParagraph>
            </StContent>
            <StContent>
              <h4>모달 서브 제목</h4>
              <StParagraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </StParagraph>
            </StContent>
            <ModalSubContentsContainer />
          </StModalContents>
          <StCloseButton onClick={onCloseModal}>
            <StClose />
          </StCloseButton>
        </StModalContentsWrapper>
      </StModal>
    </ModalPortal>
  );
};

const StModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1rem);
  height: 100%;
  width: 100%;
  overflow: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;

const StModalContentsWrapper = styled.div`
  position: absolute;
  top: 0;
  padding: 6rem 0rem;
`;

const StModalContents = styled.div`
  border: none;
  border-radius: 3rem;
  background: #1d1d1f;
  padding: 9rem 15rem;
  width: 75vw;
  height: auto;
  color: white;
  font-size: 2rem;
  font-weight: 600;
`;

const StContent = styled.div`
  margin: 3rem 0rem;
  font-size: 1.8rem;
  line-height: 1.5;
`;

const StParagraph = styled.p`
  color: #a1a1a6;
  word-break: keep-all;
`;

const StCloseButton = styled.button`
  border: 2px solid white;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  color: white;
  position: absolute;
  top: 11rem;
  left: 5rem;
`;

const StClose = styled(Close)`
  width: 100%;
  height: 100%;
`;

export default Modal;
