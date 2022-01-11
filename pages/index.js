import React, { useState, useEffect } from "react";
import { NextSeo, LocalBusinessJsonLd } from "next-seo";
import fetch from "isomorphic-unfetch";

// Data
import articles from "../database/articles.json";

// Components
import Slider from "../components/Slider/Slider";
import HomeSection from "../components/Home-Sections/index";

import HomeFavorites from "../components/Home-Favorites/HomeFavorites";

// CSS
import styles from "@/styles/pages/HomePage.module.css";

// g.DESGIR = 'LO MÁS VENDIDOS'
// g2.DESC_GIR2 = 'ILUMINACION'
// g.DESGIR = 'FERRETERIA'
// g2.DESC_GIR2 = 'PUERTAS Y VENTANAS'
// g2.DESC_GIR2 = 'VENTILACION Y CALEFACCIÓN'

const HomePage = ({
  BestSellers,
  LightingItems,
  FerrItems,
  DoorsItems,
  VentilationItems,
}) => {
  const { homeMain, productSection, titleSection } = styles;

  const [SlidersItems, setSlidersItems] = useState([]);

  // Solicita los sliders
  useEffect(async () => {
    const response = await fetch(`/api/slider`);
    const { data } = await response.json();

    setSlidersItems(data);
  }, []);

  return (
    <>
      <NextSeo
        title={`Home Center | Materiales Vasquez Hermanos`}
        description={`Amplia gama de productos para obra negra, ferretería, muebles, y artículos para el hogar`}
        canonical="https://www.materialesvasquezhnos.com.mx/"
        openGraph={{
          url: `https://www.materialesvasquezhnos.com.mx/`,
          title: `Home Center | Materiales Vasquez Hermanos`,
          description: `Amplia gama de productos para obra negra, ferretería, muebles, y artículos para el hogar`,
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
        name="Materiales Vasquez Hermanos"
        description="Amplia gama de productos para obra negra, ferretería, muebles, y artículos para el hogar"
        url="https://www.materialesvasquezhnos.com.mx/"
        telephone="+522288401919"
        address={{
          streetAddress: "Lázaro Cárdenas 274",
          addressLocality: "Xalapa",
          addressRegion: "MEX",
          postalCode: "91180",
          addressCountry: "MX",
        }}
      />

      <main className={homeMain}>
        {SlidersItems.length > 0 && <Slider sliderItems={SlidersItems} />}

        <HomeFavorites />
        {BestSellers.length > 0 && (
          <section className={productSection}>
            <h3 className={titleSection}>PRODUCTOS MÁS VENDIDOS</h3>
            <HomeSection data={BestSellers} />
          </section>
        )}
        {LightingItems.length > 0 && (
          <section className={productSection}>
            <h3 className={titleSection}>ILUMINACIÓN</h3>
            <HomeSection data={LightingItems} />
          </section>
        )}
        {FerrItems.length > 0 && (
          <section className={productSection}>
            <h3 className={titleSection}>FERRETERIA</h3>
            <HomeSection data={FerrItems} />
          </section>
        )}
        {DoorsItems.length > 0 && (
          <section className={productSection}>
            <h3 className={titleSection}>PUERTAS Y VENTANAS</h3>
            <HomeSection data={DoorsItems} />
          </section>
        )}
        {VentilationItems.length > 0 && (
          <section className={productSection}>
            <h3 className={titleSection}>VENTILACIÓN Y CALEFACCIÓN</h3>
            <HomeSection data={VentilationItems} />
          </section>
        )}
      </main>
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const BestSellers = articles.data.filter(
    (item) => item.category === "LO MÁS VENDIDOS"
  );

  const LightingItems = articles.data.filter(
    (item) => item.main_category === "ILUMINACION"
  );

  const FerrItems = articles.data.filter(
    (item) => item.category === "FERRETERIA"
  );

  const DoorsItems = articles.data.filter(
    (item) => item.main_category === "PUERTAS Y VENTANAS"
  );

  const VentilationItems = articles.data.filter(
    (item) => item.main_category === "VENTILACION Y CALEFACCIÓN"
  );

  return {
    props: {
      BestSellers,
      LightingItems,
      FerrItems,
      DoorsItems,
      VentilationItems,
    },
    revalidate: 10,
  };
};
