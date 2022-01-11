import React, { useState, useEffect } from "react";
import sjcl from "sjcl";

// Tarjeta de pruebas: 5426064000424979
// 5201160034352797
//--------
// 4931580001642617 Visa Secret3
// 5579220000000012 MasterCard Secret3
// Tarjeta para errores
// 4004430000000007

// Components
import { SuspensoryPoints } from "../../components/Loaders/SuspensoryPoints";

// Styled-Components
import { FormStyled, BuyButton, Iframe } from "./style";

const PasarelaDePagos = ({ total, pay, setShowForm, paymentGateway }) => {
  const [load, setLoad] = useState(false);
  const [show, setShow] = useState(false);
  const [urlWebsite, setUrlWebsite] = useState("http://localhost:3000");

  // Fecha y formato
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();
  // Obtiene date & time in YYYY-MM-DD HH:MM:SS format
  let dateFormat = `${year}:${month}:${date}-${hours}:${minutes}:${seconds}`;

  useEffect(() => {
    setUrlWebsite(window.location.origin);
  }, []);

  // Se obtiene la cadena hexadecimal
  const convertStringToHex = () => {
    // Se concatenen los valores requeridos
    const str = `${
      process.env.NEXT_PUBLIC_STORE_ID
    }${dateFormat}${total}${484}${process.env.NEXT_PUBLIC_SHARED_SECRET}`;

    // console.log("Concatenar los valores: ", str);
    const hex = Buffer.from(str, "utf8").toString("hex");

    const myBitArray = sjcl.hash.sha256.hash(hex);
    const hash = sjcl.codec.hex.fromBits(myBitArray);

    return hash;
  };

  const handleSubmitPayment = () => {
    setLoad(true);
    setShow(true);
    setShowForm(false);
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  };

  return (
    <>
      <Iframe name="myFrame" show={show}></Iframe>
      <FormStyled
        method="POST"
        target="myFrame"
        action={process.env.NEXT_PUBLIC_URL_FORM}
        onSubmit={handleSubmitPayment}
      >
        <input type="hidden" name="checkoutoption" value="simpleform" />
        <input
          type="hidden"
          name="hostURI"
          value={`${urlWebsite}/realizar-pago`}
        />
        <input type="hidden" name="txntype" value="sale" />
        <input type="hidden" name="timezone" value="America/Mexico_City" />
        <input type="hidden" name="txndatetime" value={dateFormat} />
        <input type="hidden" name="hash_algorithm" value="SHA256" />
        <input type="hidden" name="hash" value={convertStringToHex()} />
        <input
          type="hidden"
          name="storename"
          value={process.env.NEXT_PUBLIC_STORE_ID}
        />
        <input type="hidden" name="currency" value="484" />
        <input type="hidden" name="chargetotal" value={total} />
        <input
          type="hidden"
          name="responseFailURL"
          value={`${urlWebsite}/pago-error`}
        />
        <input
          type="hidden"
          name="responseSuccessURL"
          value={`${urlWebsite}/pago-realizado`}
        />
        <input type="hidden" name="authenticateTransaction" value="true" />
        <input
          type="hidden"
          name="threeDSRequestorChallengeIndicator"
          value="4"
        />
        <input
          type="hidden"
          name="buttonBackgroundHexColorCode"
          value="#3c74b9"
        />
        <input type="hidden" name="buttonBorderHexColorCode" value="#3c74b9" />
        <input type="hidden" name="buttonHexColorCode" value="#ffffff" />
        <input type="hidden" name="buttonHoverHexColorCode" value="#3c74b9" />
        <input
          type="hidden"
          name="buttonHoverBackgroundHexColorCode"
          value="#ffffff"
        />
        <input
          type="hidden"
          name="buttonHoverBorderHexColorCode"
          value="#3c74b9"
        />
        <BuyButton type="submit" ref={paymentGateway}>
          {load ? <SuspensoryPoints /> : "Submit"}
        </BuyButton>
        {/* {!show && (
          <>
            {pay && (
              <BuyButton type="submit" ref={paymentGateway}>
                {load ? <SuspensoryPoints /> : "Submit"}
              </BuyButton>
            )}
          </>
        )} */}
      </FormStyled>
    </>
  );
};

export default PasarelaDePagos;
