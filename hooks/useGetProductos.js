import Fetch from "isomorphic-unfetch";
import { useState, useEffect } from "react";

export function useGetProductos() {
  const [articles, setArticles] = useState([]);

  useEffect(async () => {
    const getProduct = await Fetch(`/api/todos-los-articulos`);
    const { data } = await getProduct.json();

    setArticles(data);
  }, []);

  return [articles];
}
