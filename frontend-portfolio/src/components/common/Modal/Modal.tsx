import React from "react";
import styles from './Modal.module.scss';

type Props ={
  children?: React.ReactNode;
}

const Modal: React.FC<Props> = ({children}) => {
  return <div className={styles.modalContainer}>
    {children}
  </div>
};

export default Modal;