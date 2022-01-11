// Esta funcion es llamada en las secciones de las páginas de categorias
// con el boton "cargar mas"
import fetch from "isomorphic-unfetch";

const main = async (rute, updateItems, setNoMore, setLoad) => {
  const response = await fetch(rute);
  const { data: products } = await response.json();

  if (products.length > 0) {
    updateItems(products);
  }

  if (products.length < 20) {
    setNoMore(true);
  }
  setLoad(false);
};

export const uploadMoreItems = (rute, updateItems, setNoMore, setLoad) => {
  main(rute, updateItems, setNoMore, setLoad);
};
