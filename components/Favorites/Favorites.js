import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Link from "next/link";
// import fetch from "isomorphic-unfetch";

// Data
import { articulos } from "../../database/articulos";

// Components
import CategorySection from "../Category-Section/CategorySection";

// Styled-Components
import { ContainerFavorites, Title, ListLink } from "./style";

const Favorites = ({ itemsIliked }) => {
  const [myFavorites, setmyFavorites] = useState([]);
  const [someArticles, setSomeArticles] = useState([]);
  // const [allCAtegories, setallCAtegories] = useState([]);
  // const [mainCategories, setMainCategories] = useState([]);

  useEffect(() => {
    if (articulos.length > 0) {
      const data = itemsIliked.map(
        (article) =>
          articulos.filter(
            (item) => item.articulo_id === article.articulo_id
          )[0]
      );

      if (data) {
        setmyFavorites(data);
      }
    }
  }, [itemsIliked, articulos]);

  // // Consulta las categorias
  // useEffect(async () => {
  //   if (itemsIliked.length === 0) {
  //     const response = await fetch(`/api/menu`);
  //     const { data } = await response.json();
  //     setallCAtegories(data);
  //   }
  // }, [itemsIliked]);

  // // Filtra las categorias principales
  // useEffect(() => {
  //   const cat = allCAtegories.map((item) => item.categorie);

  //   let result = cat.filter((item, index) => {
  //     return cat.indexOf(item) === index;
  //   });
  //   setMainCategories(result);
  // }, [allCAtegories]);

  // useEffect(async () => {
  //   if (itemsIliked.length === 0) {
  //     setSomeArticles(articulos.slice(0, 12));
  //   }
  // }, [itemsIliked, articulos]);

  return (
    <ContainerFavorites>
      {itemsIliked.length > 0 ? (
        <>
          <Title>Productos que te gustaron</Title>
          <CategorySection data={myFavorites} />
        </>
      ) : (
        <>
          <Title>Aún no seleccionas productos que te gusten</Title>
          <Link href={`/`}>
            <ListLink>Ver productos</ListLink>
          </Link>
          {someArticles.length > 0 && <CategorySection data={someArticles} />}
        </>
      )}
    </ContainerFavorites>
  );
};

const mapStateToProps = (state) => {
  return {
    myCart: state.myCart,
    itemsIliked: state.itemsIliked,
  };
};

export default connect(mapStateToProps, null)(Favorites);
