import clasess from './Modal.module.css';

const Modal = (props) => {
  return (
    <>
      <div className={clasess.backdrop} onClick={props.onClose} />
      <dialog open={true} className={clasess.modal}>{props.children}</dialog>
    </>
  );
};

export default Modal;
