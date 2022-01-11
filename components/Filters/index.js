import { useState, useEffect } from "react";
import { useGetProductos } from "@/hooks/useGetProductos";

// Formatear precio
const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// CSS
import styles from "@/styles/components/Filters.module.css";

const Filters = ({ setProducts }) => {
  const {
    sectionFilters,
    openFilters,
    sectionOptions,
    buttonOpenMenu,
    closeButton,
    filterModule,
    slider,
    maxPriceContainer,
    minPriceContainer,
    inputRange,
    bransContainer,
    brandButton,
    selected,
    buttonsActionsConatiner,
    buttonAction,
    buttonClear,
  } = styles;
  const [higherPrice, setHigherPrice] = useState(200);
  const [allBrands, setAllBrands] = useState([]);

  const [maxPrice, setMaxPrice] = useState(100000);
  const [minPrice, setMinPrice] = useState(0);
  const [selectBrands, setSelectBrands] = useState([]);
  const [open, setOpen] = useState(false);
  // Todos los productos
  const [articles] = useGetProductos();
  // Filtra los precios
  useEffect(() => {
    if (articles.length > 0) {
      const result = articles.map((item) => item.price);
      const prices = result.filter(
        (item, index) => result.indexOf(item) === index
      );

      const getMaxPrice = Math.max(...prices);
      setHigherPrice(getMaxPrice);
    }
  }, [articles]);
  // Filtra las marcas
  useEffect(() => {
    if (articles.length > 0) {
      const result = articles.map((item) => item.brand);
      const brands = result.filter(
        (item, index) => result.indexOf(item) === index
      );

      setAllBrands(brands.sort());
    }
  }, [articles]);

  const handleFilter = () => {
    const resultByPrice = articles.filter(
      (item) =>
        parseInt(item.price) >= parseInt(minPrice) &&
        parseInt(item.price) <= parseInt(maxPrice)
    );

    const result = selectBrands.map((item) =>
      resultByPrice.filter((element) => element.brand === item)
    );
    setProducts(result.flat().slice(0, 50));
    setOpen(false);
  };

  const clear = () => {
    setMaxPrice(100000);
    setMinPrice(0);
    setSelectBrands([]);
    setProducts([]);
  };

  const handleClick = (brand) => {
    if (selectBrands.toString().includes(brand)) {
      let remove = selectBrands.filter((item) => item !== brand);
      setSelectBrands(remove);
    } else {
      setSelectBrands((selectBrands) => [...selectBrands, brand]);
    }
  };

  return (
    <>
      {articles.length > 0 && (
        <div className={sectionOptions}>
          <p>{articles.length} resultados</p>
          <button
            type="button"
            aria-label="Botón para abrir el menú de filtros"
            className={buttonOpenMenu}
            onClick={() => setOpen(true)}
          >
            Filtrar
          </button>
        </div>
      )}

      <section
        className={open ? `${sectionFilters} ${openFilters}` : sectionFilters}
      >
        <button
          type="button"
          aria-label="Botón para cerrar el menú de filtros"
          className={closeButton}
          onClick={() => setOpen(false)}
        />

        <div className={filterModule}>
          <h4>Filtrar por precio</h4>

          <div className={maxPriceContainer}>
            <p>
              ${maxPrice !== 100000 ? formatter.format(maxPrice) : higherPrice}
              <br />
              <span>máximo</span>
            </p>
          </div>
          <div className={slider}>
            <input
              type="range"
              min="200"
              max={higherPrice}
              step="100"
              defaultValue={higherPrice}
              className={inputRange}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>

          <div className={`${maxPriceContainer} ${minPriceContainer}`}>
            <p>
              ${formatter.format(minPrice)}
              <br />
              <span>mínimo</span>
            </p>
          </div>
          <div className={slider}>
            <input
              type="range"
              min="0"
              max="100"
              step="10"
              defaultValue="0"
              className={inputRange}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
        </div>

        {allBrands.length > 0 && (
          <div className={filterModule}>
            <h4>Filtrar por marca</h4>
            <div className={bransContainer}>
              {allBrands.map((brand) => (
                <button
                  type="button"
                  key={brand}
                  className={
                    selectBrands.toString().includes(brand)
                      ? `${brandButton} ${selected}`
                      : brandButton
                  }
                  onClick={() => handleClick(brand)}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className={buttonsActionsConatiner}>
          <button
            type="button"
            className={`${buttonAction} ${buttonClear}`}
            onClick={clear}
          >
            Limpiar filtros
          </button>
          <button type="button" className={buttonAction} onClick={handleFilter}>
            Aplicar filtros
          </button>
        </div>
      </section>
    </>
  );
};

export default Filters;

// brand,
// category,
// description,
// main_category,
// name,
// price,

//  Marcar que no son marcas

// LAMOSA DESCONTINUADO
// TILES 2000 S.A. DE C.V.
// ART. ELECTRICOS
