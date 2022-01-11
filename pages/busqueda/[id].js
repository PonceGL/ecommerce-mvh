import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NextSeo, LocalBusinessJsonLd } from "next-seo";

// Data
import { articulos } from "../../database/articulos";

// Components
import CategorySection from "../../components/Category-Section/CategorySection";
import { AddNewProducts } from "../../components/IconsSVG/AddNewProducts";

// Styles
import {
  MainStyled,
  Title,
  SectionEmpty,
  TextEmpty,
} from "../../styles/categoria/style";

const Category = () => {
  const router = useRouter();
  const id = router.query.id;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (articulos.length > 0 && id) {
      const data = articulos.filter((item) =>
        item.description.includes(id.toUpperCase())
      );
      setProducts(data.slice(0, 50));
    }
  }, [id, articulos]);

  return (
    <>
      <NextSeo
        title={`${
          id ? id.replace(/-/g, " ") : "Categoría"
        } | Materiales Vasquez Hermanos`}
        description={`Amplia gama de productos ${
          id && `de nuestra categoría ${id.replace(/-/g, " ")}`
        }`}
        canonical="https://www.materialesvasquezhnos.com.mx/"
        openGraph={{
          url: `https://www.materialesvasquezhnos.com.mx/`,
          title: `Categoría ${
            id && id.replace(/-/g, " ")
          } | Materiales Vasquez Hermanos`,
          description: `Amplia gama de productos ${
            id && `de nuestra categoría ${id.replace(/-/g, " ")}`
          }`,
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

      <MainStyled>
        {id && <Title>{id.replace(/-/g, " ").toLowerCase()}</Title>}
        {products.length > 0 ? (
          <CategorySection data={products} />
        ) : (
          <SectionEmpty>
            <AddNewProducts />
            <TextEmpty>Pronto tendremos productos aquí</TextEmpty>
          </SectionEmpty>
        )}
      </MainStyled>
    </>
  );
};

export default Category;
