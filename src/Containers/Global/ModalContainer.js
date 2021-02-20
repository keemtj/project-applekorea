import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../Components/Global/Modal';

const ModalContainer = ({ modalState, setModalState }) => {
  // ! redux
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.message.messages);

  // ! event
  const onCloseModal = () => {
    setModalState(!modalState);
  };

  const modalTitle = 'CPU';

  // ! effect
  useEffect(() => {
    console.log('메시지 페이지 들어오는순간~ 데이터 겟또!');
  }, [dispatch]);

  if (loading) return <div>로딩중 .... </div>;
  if (error) return <div>에러....</div>;
  if (!data) return null;

  return <Modal onCloseModal={onCloseModal} modalTitle={modalTitle} />;
};

export default ModalContainer;
