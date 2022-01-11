import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NextSeo, LocalBusinessJsonLd } from "next-seo";

// Data
import { articulos } from "../../../database/articulos";

// Components
import CategorySection from "../../../components/Category-Section/CategorySection";
import { AddNewProducts } from "../../../components/IconsSVG/AddNewProducts";

// Styles
import {
  MainStyled,
  Title,
  SectionEmpty,
  TextEmpty,
  LoadMoreButton,
} from "../../../styles/categoria/style";

const Category = () => {
  const router = useRouter();
  const cat = router.query.cat || "";

  const [products, setProducts] = useState([]);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (articulos.length > 0 && cat) {
      const data = articulos.filter(
        (item) => item.main_category === cat.replace(/-/g, " ")
      );
      if (data) {
        setProducts(data.slice(0, 24));
        if (data.length >= 24) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      }
    }
  }, [cat]);

  const more = () => {
    const data = articulos.filter(
      (item) => item.main_category === cat.replace(/-/g, " ")
    );
    if (data) {
      let news = data.slice(products.length + 1, products.length + 25);
      setProducts(products.concat(news));
      if (news.length === 24) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
  };

  return (
    <>
      <NextSeo
        title={`${
          cat ? cat.replace(/-/g, " ") : "Categoría"
        } | Materiales Vasquez Hermanos`}
        description={`Amplia gama de productos ${
          cat && `de nuestra categoría ${cat.replace(/-/g, " ")}`
        }`}
        canonical="https://www.materialesvasquezhnos.com.mx/"
        openGraph={{
          url: `https://www.materialesvasquezhnos.com.mx/`,
          title: `Categoría ${
            cat && cat.replace(/-/g, " ")
          } | Materiales Vasquez Hermanos`,
          description: `Amplia gama de productos ${
            cat && `de nuestra categoría ${cat.replace(/-/g, " ")}`
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
        {cat && <Title>{cat.replace(/-/g, " ").toLowerCase()}</Title>}
        {products.length > 0 ? (
          <>
            <CategorySection data={products} />
            {showButton && (
              <LoadMoreButton type="button" onClick={more}>
                Cargar más productos 
              </LoadMoreButton>
            )}
          </>
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
