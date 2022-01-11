import React, { useState, useEffect } from "react";

// Components
import Modal from "../modal/modal";
import AlertItem from "../Alert-Item/AlertItem";

// Styled Components
import { SectionText, SectionItems } from "./style";

const Alert = ({ isOpen, handleClose, cart, zipCode }) => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    let ids = cart.map((item) => item.articulo_id);
    setProductsList(ids);
  }, [cart]);

  return (
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
      typeButton="button"
      click={handleClose}
      zipCode={zipCode}
      productsList={productsList}
    >
      <SectionText>
        <p>Lo sentimos, para poder enviarle a esa dirección postal,</p>
        <p>por favor comuníquese con nosotros</p>
      </SectionText>
      {cart && (
        <SectionItems>
          {cart.map((item) => (
            <AlertItem key={item.articulo_id} {...item} />
          ))}
        </SectionItems>
      )}
    </Modal>
  );
};

export default Alert;
