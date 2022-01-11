import React, { useState, useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";

// Styles
import styles from "../styles/components/Main.module.css";

// styled-Components
import { Main } from "../styles/pago-error/style";

const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const codes = {
  "N:01:01-REFERRAL": "Referir",
  "N:01:02-REFERRAL": "Referir",
  "N:03:03-INVLD MER ID": "Comercio Invalido",
  "N:60:04-HOLD-CALL CTR": "Retener Tarjeta",
  "N:51:05-DECLINED": "Llame a su banco",
  "N:01:06-DECLINED": "Error",
  "N:60:07-HOLD-CALL CTR": "Retener Tarjeta",
  "N:12:12-INV TRAN": "Transaccion Invalida",
  "N:13:13-INV AMT": "Monto Invalido",
  "N:14:14-INV ACCT NUM": "Numero invalido",
  "N:51:15-DECLINED": "Emisor No disponible",
  "N:91:30-PLEASE RETRY": "Reintente",
  "N:54:33-EXPIRED CARD": "Tarjeta Expirada",
  "N:51:39-DECLINED": "Cuenta Invalida",
  "N:60:41-HOLD-CALL CTR": "Tarjeta Perdida",
  "N:60:43-HOLD-CALL CTR": "Tarjeta Robada",
  "N:51:51-DECLINED": "Fondos Insuficientes",
  "N:54:54-EXPIRED CARD": "Tarjeta Expirada",
  "N:55:55-INCORRECT PIN": "Pin Incorrecto",
  "N:57:57-TXN NOT ALLOW": "Operación no permitida al tarjetahabiente",
  "N:63:58-SERV NOT ALLOWED": "Operación no permitida al comercio",
  "N:51:61-TRY AGAIN LATER": "Limite de retiro exedido",
  "N:63:62-SER NOT ALLOW": "Tarjeta Restringida",
  "N:51:65-TRY AGAIN LATER": "Limite de retiro exedido",
  "N:91:68-PLEASE RETRY": "Tiempo exedido de respuesta",
  "N:75:75-PIN RETRY MAX": "Intento de PIN exedido",
  "N:91:91-PLEASE RETRY": "Emisor No disponible",
  "N:91:92-PLEASE RETRY": "Error de red",
  "N:94:94-DUPLICATE TRAN": "Transaccion duplicada",
  "N:CE:96-SYSTEM PROBLEM": "Error de sistema",
};

const PagoError = ({ purchasingData }) => {
  const [reason, setReason] = useState("");

  useEffect(() => {
    if (purchasingData.failReason === "") {
      let code = codes[purchasingData.approval_code] || "Error de sistema";
      setReason(code);
    } else {
      setReason(purchasingData.failReason);
    }
  }, [purchasingData]);

  return (
    <Main className={styles.MainHome}>
      <h3>Ups!!</h3>
      <p>Ocurrió un error al procesar el pago</p>
      <p style={{ fontWeight: "700", fontSize: "1.8rem" }}>
        Status {purchasingData.status}
      </p>
      <p style={{ fontWeight: "600", fontSize: "1.6rem" }}>{reason}</p>
      <p>
        Monto de compra:{" "}
        <span style={{ fontWeight: "700" }}>
          ${formatter.format(purchasingData.chargeTotal)}
        </span>
      </p>
      <p>No te preocupes, los artículos en tu carrito te estarán esperando</p>
      <Link href="/">
        <a>Volver al inicio</a>
      </Link>
    </Main>
  );
};

const mapStateToProps = (state) => {
  return {
    purchasingData: state.purchasingData,
  };
};

export default connect(mapStateToProps, null)(PagoError);
