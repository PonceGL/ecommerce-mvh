import React from "react";
import Head from "next/head";

// Styled-Components
import {
  MainStiled,
  MainTitle,
  SubTitle,
  Paragraph,
  Strong,
  ListItem,
  ListTitle,
} from "../styles/cancelaciones-devoluciones/style";

const AboutUs = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <title>
          Cancelaciones y Devoluciones | Materiales Vasquez Hermanos
        </title>
      </Head>
      <MainStiled>
        <MainTitle>Cancelaciones y Devoluciones</MainTitle>
        <SubTitle>
          <Strong>Disposiciones Generales</Strong>
        </SubTitle>
        <ListTitle>Información básica</ListTitle>
        <Paragraph>
          Se tienen 3 días a partir de la fecha de compra para solicitar el
          reembolso o cambio de mercancía en la tienda donde se recogió la
          mercancía o en la matriz de la empresa ubicada en Lázaro Cárdenas
          esquina Coyoacán.
        </Paragraph>
        <Paragraph>
          En caso de solicitar un reembolso, el tiempo para devolver el recurso
          será de 25 a 30 días hábiles, esto depende totalmente del banco.
        </Paragraph>

        <ul>
          <ListTitle>Requisitos</ListTitle>
          <Paragraph>
            Para hacer válido el cambio de tu producto necesitas:
          </Paragraph>

          <ListItem>Ticket, factura o comprobante de compra</ListItem>
          <ListItem>Mercancía en su empaque original</ListItem>
          <ListItem>Componentes o accesorios del producto completos</ListItem>
        </ul>

        <ListTitle>Garantía con proveedores o centro de servicio</ListTitle>
        <Paragraph>
          Pasados los 30 días a partir de la fecha de compra, la garantía
          aplicará con el Proveedor o su Centro de Servicio Autorizado.
        </Paragraph>
        <ListTitle>
          Reembolsos o cambio de la mercancía de compra en línea
        </ListTitle>
        <Paragraph>
          Si el cambio no es una de las opciones, el monto de la devolución se
          podrá hacer a través de una nota de crédito que podrás utilizar en tu
          próxima compra por el valor de la devolución.
        </Paragraph>

        <ul>
          <ListTitle>Excepciones a la política</ListTitle>
          <Paragraph>
            Las devoluciones no aplican para los siguientes productos y/o
            servicios:
          </Paragraph>

          <ListItem>
            Órdenes especiales.
            <ListItem>
              Cuando el cliente está enterado que el producto es de exhibición y
              cuenta con algún defecto.
            </ListItem>
            <ListItem>
              Que el producto haya sido vendido con un descuento especial por
              oferta.
            </ListItem>
          </ListItem>
          <ListItem>No se devolverá el costo de envío pagado.</ListItem>
        </ul>
      </MainStiled>
    </>
  );
};

export default AboutUs;
