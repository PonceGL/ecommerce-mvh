import { useState, useEffect } from "react";
import Fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { NextSeo, LocalBusinessJsonLd } from "next-seo";

// Components
import Filters from "@/components/Filters";
import PreviewItem from "@/components/Preview-Item/PreviewItem";
import FavoritesItem from "@/components/Favorites-Item";

// CSS
import styles from "@/styles/pages/Store.module.css";

const Store = () => {
  const { main, title, productsContainer } = styles;
  const [initialProducts, setInitialProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const getProducts = await window.fetch(`/api/new-products`);
    const { data } = await getProducts.json();

    setInitialProducts(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main className={main}>
        <h1 className={title}>Tienda</h1>
        <Filters setProducts={setProducts} />
        <section className={productsContainer}>
          {products.length > 0 ? (
            <>
              {products.map((item) => (
                <FavoritesItem key={item.articulo_id + item.price} {...item} />
              ))}
            </>
          ) : (
            <>
              {initialProducts.map((item) => (
                <PreviewItem key={item.articulo_id + item.price} {...item} />
              ))}
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default Store;
