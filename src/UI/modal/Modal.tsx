import { FC } from "react";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root") as HTMLElement;

interface ModalProps {
  children?: React.ReactNode;
  closeModal?: () => void;
}

export const Modal: FC<ModalProps> = ({ children, closeModal }) => {
  const handleClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!closeModal) return;
    if (event.target === event.currentTarget) closeModal();
  };

  return createPortal(
    <>
      <div className={styles.substrate} onClick={(event) => handleClose(event)}>
        {children}
      </div>
    </>,
    modalRoot
  );
};
