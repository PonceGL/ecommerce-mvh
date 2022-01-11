import React from "react";
import ReactDOM from "react-dom";

// Components
import { Whatsapp } from "../IconsSVG/Whatsapp";

// Styled Components
import {
  ModalBackground,
  ModalContainer,
  ModalHeader,
  ModalFooter,
  ModalMain,
  CloseButton,
  AcceptButton,
} from "./style";

const Modal = ({
  children,
  isOpen,
  handleClose,
  typeButton,
  click,
  zipCode,
  productsList,
}) => {
  if (!isOpen) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <ModalBackground>
        <ModalContainer>
          <ModalHeader>
            <CloseButton type="button" onClick={() => handleClose(false)} />
          </ModalHeader>
          <ModalMain>{children}</ModalMain>
          <ModalFooter>
            <AcceptButton
              href={`https://api.whatsapp.com/send?phone=522288366283&text=Hola,%20quiero%20comprar%20con%20env%C3%ADo%20a%20este%20c%C3%B3digo%20postal:%20*${zipCode}*,%20esta%20lista%20de%20productos:,%20${productsList}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a WhatsApp"
              bg="#25d366"
            >
              <Whatsapp width="2rem" /> Contactar por WhatsApp
            </AcceptButton>
          </ModalFooter>
        </ModalContainer>
      </ModalBackground>,
      document.getElementById("modal-root")
    );
  }
};

export default Modal;
