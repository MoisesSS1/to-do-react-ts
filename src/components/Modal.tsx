import React from "react";
import Styles from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.getElementById("modal");
    modal!.classList.add("hide");
  };

  return (
    <div id="modal" className="hide">
      <div className={Styles.fade} onClick={closeModal}></div>
      <div className={Styles.modal}>
        <h2>Texto Modal</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
