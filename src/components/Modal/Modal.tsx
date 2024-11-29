import { ReactNode } from "react";
import "./Modal.scss";

interface ModalProps {
  children: ReactNode;
  onCloseModal: () => void;
}

function Modal({ children, onCloseModal }: ModalProps) {
  return (
    <div className="backdrop">
      <div className="modal">
        <div className="content">{children}</div>

        <button className="close-button" onClick={onCloseModal}></button>
      </div>
    </div>
  );
}

export default Modal;
