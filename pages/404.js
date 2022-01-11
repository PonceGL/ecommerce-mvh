import React from "react";
import Head from "next/head";
import Link from "next/link";

// Components
import { NotFound } from "../components/IconsSVG/NotFound";

//Styled-Componets
import {
  MainStiled,
  Title,
  IconConatiner,
  ButtonLink,
} from "../styles/404/style";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 | Página no encontrada</title>
      </Head>
      <MainStiled>
        <Title>Materiales Vasquez Hermanos</Title>
        <IconConatiner>
          <NotFound />
        </IconConatiner>
        <Link href="/">
          <ButtonLink>Volver a la tienda</ButtonLink>
        </Link>
      </MainStiled>
    </>
  );
};

export default Custom404;
