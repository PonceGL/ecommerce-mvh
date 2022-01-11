import React from "react";
import { NextSeo, LocalBusinessJsonLd } from "next-seo";
import Image from "next/image";
import Link from "next/link";

// Components

// Styled-Components
import { MainStyled } from "../styles/Inicio/style";
import {
  Title,
  Conatiner,
  Branch,
  ImageContainer,
  Name,
  HoursContainer,
  ContactContainer,
  Address,
  PhoneContainer,
  ExtensionsContainer,
  Email,
  LinkToMap,
} from "../styles/sucursales/style";

// Data
import { branches } from "../database/sucursales";

// Loader para componente Image
const loader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const Branches = () => {
  return (
    <>
      <NextSeo
        title="Sucursales | Materiales Vasquez Hermanos"
        description={`¡Contamos con ${branches.length} sucursales para estar cerca de ti, visítanos!`}
        canonical="https://www.materialesvasquezhnos.com.mx/sucursales"
        openGraph={{
          url: "https://www.materialesvasquezhnos.com.mx/sucursales",
          title: "Sucursales | Materiales Vasquez Hermanos",
          description: `¡Contamos con ${branches.length} sucursales para estar cerca de ti, visítanos!`,
          images: [
            {
              url: "https://res.cloudinary.com/duibtuerj/image/upload/v1630083340/brand/meta-image_rcclee.jpg",
              width: 200,
              height: 200,
              alt: "Logotipo de Materiales Vasquez Hermanos",
            },
          ],
          site_name: "Materiales Vasquez Hermanos",
        }}
        twitter={{
          handle: "@MaterialesVH",
          site: "@MaterialesVH",
          cardType: "summary",
        }}
      />
      <LocalBusinessJsonLd
        type="HomeGoodsStore"
        name="Sucursales | Materiales Vasquez Hermanos"
        description={`¡Contamos con ${branches.length} sucursales para estar cerca de ti, visítanos!`}
        url="https://www.materialesvasquezhnos.com.mx/sucursales"
        telephone="+522288401919"
        address={{
          streetAddress: "Lázaro Cárdenas 274",
          addressLocality: "Xalapa",
          addressRegion: "MEX",
          postalCode: "91180",
          addressCountry: "MX",
        }}
      />
      <MainStyled>
        <Title>Tenemos una sucursal cerca de ti</Title>
        {branches && (
          <Conatiner>
            {branches.map(
              ({
                branch,
                address,
                photo,
                phone,
                option,
                email,
                hours,
                location,
              }) => (
                <Branch key={address}>
                  <ImageContainer>
                    <img src={photo} alt={`Fotografía de sucursal ${branch}`} />
                  </ImageContainer>
                  <Name>{branch}</Name>
                  <HoursContainer>
                    <h4>Horario</h4>
                    <p>
                      Lunes - Viernes: <span>{hours[0]}</span> -{" "}
                      <span>{hours[1]}</span>
                    </p>
                    <p>
                      Sábado: <span>{hours[0]}</span> - <span>{hours[2]}</span>
                    </p>
                    <p>Domingo: Cerrado</p>
                  </HoursContainer>
                  <ContactContainer>
                    <Address>{address}</Address>
                    <PhoneContainer>
                      <a href={`tel:+52${phone}`}>{phone}</a>
                      <ExtensionsContainer>
                        <p>Opción:</p>
                        <p>{option}</p>
                      </ExtensionsContainer>
                    </PhoneContainer>
                    <Email>{email}</Email>
                    <LinkToMap
                      href={location}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver en Mapa
                    </LinkToMap>
                  </ContactContainer>
                </Branch>
              )
            )}
          </Conatiner>
        )}
      </MainStyled>
    </>
  );
};

export default Branches;
