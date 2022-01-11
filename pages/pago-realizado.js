import React, { useEffect } from "react";
import { connect } from "react-redux";

// Actions
import { setPurchaseSuccess } from "../actions";

// Components
import { Logo } from "../components/IconsSVG/Logo";
import { SuccessIcon } from "../components/IconsSVG/SuccessIcon";
import { CodeQR } from "../components/IconsSVG/CodeQR";
import SuccesProducts from "../components/Succes-Products/SuccesProducts";

// Styles
import styles from "../styles/components/Main.module.css";

// Styled-Components
import {
  SuccessContainer,
  SuccessIconContainer,
  SuccessText,
  LogoContainer,
  InfoPrintContainer,
  PurchaseInfoContainer,
  InfoContainer,
  TotalContainer,
  ProductsContainer,
  Products,
  ShippingDetails,
  Gratitude,
  FiscalComprobant,
  QRContainer,
  ButtonsInfoContainer,
  PrintButton,
} from "../styles/pago-realizado/style";

const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Success = ({ purchasingData, setPurchaseSuccess }) => {
  // setPurchaseSuccess();
  console.log("purchasingData: ", purchasingData);

  return (
    <main className={styles.MainHome}>
      <SuccessContainer>
        <SuccessIconContainer>
          <SuccessIcon />
        </SuccessIconContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <SuccessText>La compra se ha realizado exitosamente</SuccessText>
        <InfoPrintContainer>
          <p>Tel: (228) 8-40-19-19 Ext. 838 y 839</p>
          <p>ventas.sucursal@grupovasquez.com.mx</p>
        </InfoPrintContainer>
      </SuccessContainer>
      {purchasingData && (
        <>
          <PurchaseInfoContainer>
            <TotalContainer>
              <p>Tu importe</p>
              <h2>${formatter.format(purchasingData.purchaseAmount)}</h2>
              <div>
                <p>Tarjeta con terminación: {purchasingData.terminatedCard}</p>
                <p>Número de pedido: {purchasingData.orderNumber}</p>
                <p>Código de aprobación: {purchasingData.approvalCode}</p>
              </div>
            </TotalContainer>
            <ProductsContainer>
              {purchasingData.products && (
                <>
                  {purchasingData.products.map((product) => (
                    <SuccesProducts key={product.articulo_id} {...product} />
                  ))}
                </>
              )}
              <Products>
                <p>Costo de envío</p>
                <p>${purchasingData.shippingCost}</p>
              </Products>
            </ProductsContainer>
          </PurchaseInfoContainer>
          <InfoContainer>
            <ShippingDetails>
              <h4>Información de la cuenta</h4>
              <p>
                {purchasingData.shippingName} {purchasingData.shippingLastName}
              </p>
              <p>{purchasingData.shippingEmail}</p>
              <p>{purchasingData.phoneNumber}</p>
            </ShippingDetails>
            <ShippingDetails>
              <h4>Dirección de envío</h4>
              <p>
                {purchasingData.addressCity} {purchasingData.addressState}
              </p>
              <p>
                {purchasingData.addressStreet} {purchasingData.addressNumber}{" "}
                C.P.
                {purchasingData.addressCP}
              </p>
            </ShippingDetails>
            <ShippingDetails>
              <h4>Referencias</h4>
              <p>{purchasingData.addressReferences}</p>
            </ShippingDetails>
            <ShippingDetails>
              <h4>{purchasingData.requiredInvoice}</h4>
              {purchasingData.invoiceRFC && <p>{purchasingData.invoiceRFC}</p>}
              {purchasingData.invoiceCompanyName && (
                <p>{purchasingData.invoiceCompanyName}</p>
              )}
              {purchasingData.invoicePhoneNumber && (
                <p>{purchasingData.invoicePhoneNumber}</p>
              )}
              {purchasingData.invoiceShippingEmail && (
                <p>{purchasingData.invoiceShippingEmail}</p>
              )}
            </ShippingDetails>
            <Gratitude>
              <p>Gracias por su compra</p>
              <FiscalComprobant>
                Esto no es un comprobante fiscal
              </FiscalComprobant>
            </Gratitude>
            <QRContainer>
              <CodeQR />
            </QRContainer>
          </InfoContainer>
        </>
      )}
      {/* <ButtonsInfoContainer>
        <PrintButton type="button" onClick={() => window.print()}>
          Imprimir
        </PrintButton>
        <p>
          Igualmente enviamos tu recibo al correo{" "}
          <span>{purchasingData.shippingEmail}</span>
        </p>
      </ButtonsInfoContainer> */}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    purchasingData: state.purchasingData,
  };
};

const mapDispatchToProps = {
  setPurchaseSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Success);
