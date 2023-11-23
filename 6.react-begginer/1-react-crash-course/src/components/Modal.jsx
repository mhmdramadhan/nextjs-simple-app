import { useNavigate } from 'react-router-dom';
import clasess from './Modal.module.css';

const Modal = (props) => {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate('/');
  };

  return (
    <>
      <div className={clasess.backdrop} onClick={closeHandler} />
      <dialog open={true} className={clasess.modal}>
        {props.children}
      </dialog>
    </>
  );
};

export default Modal;
