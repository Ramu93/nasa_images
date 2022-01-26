import React, { FC } from "react";
import {
  CloseButton,
  ModalContainer,
  ModalContent,
  ModalHeader,
} from "./styles";

type ModalProps = {
  visible: boolean;
  onClose: Function;
  header: string;
};

const Modal: FC<ModalProps> = ({ visible, onClose, children, header }) => {
  return (
    <ModalContainer visible={visible} onClick={() => onClose()}>
      <ModalContent>
        <CloseButton onClick={() => onClose()}>&times;</CloseButton>
        <ModalHeader>{header}</ModalHeader>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
