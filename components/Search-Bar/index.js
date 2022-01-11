import React, { useState, useEffect } from "react";
import debounce from "just-debounce-it";
import { useRouter } from "next/router";
import { useGetProductos } from "../../hooks/useGetProductos";
import Link from "next/link";

// Data
// import { articulos } from "../../database/articulos";

//Components
import { MagnifierIcon } from "../IconsSVG/MagnifierIcon";
// import { Seeking } from "../Loaders/Seeking";
import SearchItem from "../Search-Item/SearchItem";

// CSS
import styles from "@/styles/components/SearchBar.module.css";

const SearchBar = () => {
  const {
    inputContainer,
    inputSearch,
    iconContainer,
    resultsContainer,
    titleEmty,
    titleMatch,
    navegateTo,
  } = styles;
  const router = useRouter();
  const id = router.query.id;
  const [searchText, setSearchText] = useState("");
  const [resultsByName, setResultsByName] = useState([]);
  const [resultsByCategorye, setResultsByCategorye] = useState([]);
  const [resultsByID, setresultsByID] = useState([]);
  const [showResults, setshowResults] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [articles] = useGetProductos();

  // Reinicia los valores
  const reset = () => {
    setSearchText("");
    setResultsByName([]);
    setResultsByCategorye([]);
    setresultsByID([]);
  };

  // Funcion para buscar productos
  const searchProduct = debounce(async (text) => {
    // // Ejemplo de AbortController
    // const controller = new AbortController();
    // const signal = controller.signal;
    // const responseRelatedByName = await fetch(
    //   `/api/related-by-name/${value}?first=1&last=8`,
    //   { signal }
    // );
    // controller.abort();
    const resultByName = articles.filter((item) =>
      item.description.includes(text.trim().replace(/s$/g, "").toUpperCase())
    );
    setResultsByName(resultByName.slice(0, 6));

    const resultByCategorye = articles.filter(
      (item) =>
        item.main_category !== null &&
        item.main_category.includes(text.trim().toUpperCase())
    );
    setResultsByCategorye(resultByCategorye.slice(0, 6));

    const resultByID = articles.filter((item) =>
      item.articulo_id.includes(text.trim().toUpperCase())
    );
    setresultsByID(resultByID.slice(0, 6));
  }, 1500);

  // Detectar cambios en el input de texto
  useEffect(() => {
    if (searchText !== "" && searchText.length > 3) {
      setNoResults(false);
      searchProduct(searchText);
    } else if (searchText === "") {
      reset();
    }
  }, [searchText]);

  // Detectar si existen resultados de la busqueda
  useEffect(() => {
    if (
      resultsByName.length === 0 &&
      resultsByCategorye.length === 0 &&
      resultsByID.length === 0
    ) {
      setNoResults(false);
      if (searchText !== "") {
        setNoResults(true);
        setshowResults(true);
      } else {
        setshowResults(false);
      }
    } else {
      setshowResults(true);
    }
  }, [resultsByName, resultsByCategorye, resultsByID]);

  useEffect(() => {
    reset();
  }, [id]);

  return (
    <>
      <div className={inputContainer}>
        <input
          type="text"
          placeholder="Buscar producto..."
          className={inputSearch}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value.toString())}
        />
        <div className={iconContainer}>
          <MagnifierIcon width="1.2rem" />
        </div>
      </div>
      {showResults && (
        <div className={resultsContainer}>
          {noResults && (
            <p className={titleEmty}>
              No hay nada que coincida con tu búsqueda
            </p>
          )}
          {resultsByName.length > 0 && (
            <>
              <h5 className={titleMatch}>Coincidencias por nombre</h5>
              {resultsByName.map((item) => (
                <SearchItem key={item.articulo_id} {...item} />
              ))}
            </>
          )}
          {resultsByCategorye.length > 0 && (
            <>
              <h5 className={titleMatch}>Coincidencias por categoría</h5>
              {resultsByCategorye.map((item) => (
                <SearchItem key={item.articulo_id} {...item} />
              ))}
            </>
          )}
          {resultsByID.length > 0 && (
            <>
              <h5 className={titleMatch}>Coincidencias por ID</h5>
              {resultsByID.map((item) => (
                <SearchItem key={item.articulo_id} {...item} />
              ))}
            </>
          )}
          {resultsByName.length > 5 && (
            <Link href={`/busqueda/${searchText.trim().replace(/s$/g, "")}`}>
              <a className={navegateTo}>Ver más sobre {searchText.trim()}</a>
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default SearchBar;
