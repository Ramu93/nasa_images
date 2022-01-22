import React, { FC} from "react";
import './styles.css'
import { useNavigate } from "react-router-dom";

type ModalProps = {
  description: string;
};

const Modal: FC<ModalProps> = ({ description }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div id="myModal" className="modal">
  <div className="modal-content">
    <span className="close">&times;</span>
        <p>{ description}</p>
  </div>
</div>
  );
};

export default Modal;
