import React, { useEffect, useState } from "react";
import Head from "next/head";

// Styled-Components
import {
  MainStiled,
  MainTitle,
  ImageContainer,
  ImageCrop,
  Paragraph,
  Strong,
  ListItem,
} from "../styles/quienes-somos/style";

const AboutUs = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <title>Quienes somos | Materiales Vasquez Hermanos</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width user-scalable=no"
        />
      </Head>
      <MainStiled>
        <MainTitle>Quienes somos</MainTitle>
        <ImageContainer>
          <img
            src="https://res.cloudinary.com/duibtuerj/image/upload/v1630083634/brand/tienda_qvikh3.png"
            width={938}
            height={744}
            alt={`Fotografia de tienda de Materiales Vasquez Hermanos`}
          />
        </ImageContainer>
        <Paragraph>
          <Strong>Materiales Vásquez Hermanos</Strong> S.A. de C.V. Fundada el
          11 de noviembre de 1994 por él señor Alberto Vásquez Dorantes y sus
          hijos Arturo, Martin y Alejandro Vásquez Castillo, con sede y origen
          en la Ciudad de Xalapa, Veracruz. Empresa asociada y con respaldo de
          <Strong>Grupo Empresarial Vásquez</Strong>, generadora de empleo en la
          región, socialmente responsable.
        </Paragraph>
        <Paragraph>
          <Strong>Nuestra misión</Strong>: Ofrecer la mejor gama de productos
          para <Strong>obra negra</Strong>, <Strong>ferretería</Strong>,{" "}
          <Strong>muebles</Strong>, <Strong>acabados</Strong>, y{" "}
          <Strong>artículos para el hogar</Strong> a nuestros clientes, cuidando
          calidad, precio y tiempo de entrega.
        </Paragraph>
        <Paragraph>
          <Strong>Nuestra visión</Strong>: Consolidarnos como proveedores
          líderes en materiales para la construcción dentro y fuera en el{" "}
          <Strong>Estado de Veracruz</Strong>, satisfaciendo la demanda de
          nuestros clientes.
        </Paragraph>
        <ul>
          <Paragraph>Lo que nos distingue:</Paragraph>
          <ListItem>
            <Strong>Atención personalizada</Strong>.
          </ListItem>
          <ListItem>
            <Strong>Variedad y calidad</Strong> en nuestros productos.
          </ListItem>
          <ListItem>
            <Strong>Precios competitivos</Strong>.
          </ListItem>
          <ListItem>Logística de entrega.</ListItem>
          <ListItem>Cobertura amplia.</ListItem>
          <ListItem>
            Diferentes canales de comunicación con nuestros clientes.
          </ListItem>
          <ListItem>
            <Strong>Innovación</Strong> y última tendencia de productos.
          </ListItem>
        </ul>
      </MainStiled>
    </>
  );
};

export default AboutUs;
