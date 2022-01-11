import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { useGetProductos } from "@/hooks/useGetProductos";

// Components
import FavoritesItem from "@/components/Favorites-Item";

// CSS
import styles from "@/styles/components/HomeFavorites.module.css";

const HomeFavorites = ({ itemsIliked }) => {
  const { containerFavorites, title, itemsContainer, linkProfile } = styles;
  const [myFavorites, setmyFavorites] = useState([]);
  const [articles] = useGetProductos();

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

  if (itemsIliked.length > 0) {
    return (
      <section className={containerFavorites}>
        {myFavorites.length > 0 && (
          <>
            <h3 className={title}>PRODUCTOS QUE TE GUSTAN</h3>
            <div className={itemsContainer}>
              {myFavorites.slice(0, 3).map((article, i) => (
                <FavoritesItem key={article.articulo_id} {...article} />
              ))}
            </div>
          </>
        )}
        {myFavorites.length > 2 && (
          <Link href="/perfil">
            <a className={linkProfile}>Ver todos</a>
          </Link>
        )}
      </section>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return {
    myCart: state.myCart,
    itemsIliked: state.itemsIliked,
  };
};

export default connect(mapStateToProps, null)(HomeFavorites);
