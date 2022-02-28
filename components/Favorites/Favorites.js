import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Link from "next/link";
// import fetch from "isomorphic-unfetch";

// Data
import articles from "../../database/articles.json";

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
    if (articles.length > 0) {
      const data = itemsIliked.map(
        (article) =>
          articles.filter((item) => item.articulo_id === article.articulo_id)[0]
      );

      if (data) {
        setmyFavorites(data);
      }
    }
  }, [itemsIliked, articles]);

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
