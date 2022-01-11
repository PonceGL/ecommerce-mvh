import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useGetImage } from "../../hooks/useGetImage";
import { useGetPrice } from "../../hooks/useGetPrice";
import { useGetStock } from "../../hooks/useGetStock";
import { connect } from "react-redux";

// Data
import { articulos } from "../../database/articulos";

//Actions
import { setMyCart, setRemovedFromCart, setUpdateCart } from "../../actions";

// Components
import { Loading } from "../Loaders/Loading";

// Styled-Components
import {
  Item,
  ImageContainer,
  Name,
  PriceAndQuantit,
  PriceContainer,
  Price,
  PriceOrigin,
  Select,
  DeleteButton,
  Separator,
} from "./style";

// Formatear precio
const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Loader para componente Image
const loader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ShoppingCartItem = ({
  articulo_id,
  initialQuantity,
  myCart,
  setMyCart,
  setRemovedFromCart,
  setUpdateCart,
}) => {
  const [item, setItem] = useState({});
  // Consulta la imagen
  const [image_url] = useGetImage(articulo_id);
  // Consulta el precio
  const [price] = useGetPrice(articulo_id);
  // Consulta el stock
  const [stock] = useGetStock(articulo_id);
  // Opciones para el Select de acuerdo al inventario
  const [quantityInInventory, setQuantityInInventory] = useState([]);
  // Referencia al select
  const selectQ = useRef(null);

  useEffect(() => {
    if (articulos.length > 0) {
      const data = articulos.filter(
        (item) => item.articulo_id === articulo_id
      )[0];

      if (data) {
        setItem(data);
      }
    }
  }, [articulo_id, articulos]);

  // Crea las opciones de cantidad que se puede seleccionar
  // de acuero al inventario real en tienda
  // añade como ultima opcion "Eliminar"
  const generateOptions = () => {
    setQuantityInInventory([]);
    for (let i = 1; i <= stock; i++) {
      setQuantityInInventory((quantityInInventory) => [
        ...quantityInInventory,
        i,
      ]);
    }
  };

  useEffect(() => {
    if (stock) {
      if (stock) {
        generateOptions();
      }
    }
  }, [stock]);

  const handleChange = () => {
    // Optiene el valor del select (la cantidad de prosuctos seleccionados)
    const selected = selectQ.current.value;

    let removeItemFromCart = myCart.filter(
      (item) => item.articulo_id !== articulo_id
    );

    let thisItem = {
      articulo_id,
      initialQuantity: parseInt(selected),
      price,
    };
    let newCArt = [...removeItemFromCart, thisItem];
    setUpdateCart(newCArt);
  };

  return (
    <>
      <Item>
        <ImageContainer>
          {image_url !== "" ? (
            <Image
              loader={loader}
              src={`data:image/jpg;base64,${image_url}`}
              width={300}
              height={300}
              alt={`Fotografía de ${name}`}
            />
          ) : (
            <Loading />
          )}
        </ImageContainer>
        {item.name && <Name>{item.name}</Name>}
        <PriceAndQuantit>
          {price && (
            <PriceContainer>
              <Price>${formatter.format(price * initialQuantity)}</Price>
              <PriceOrigin>${formatter.format(price)}</PriceOrigin>
            </PriceContainer>
          )}
          {stock ? (
            <>
              {stock > 0 ? (
                <>
                  {quantityInInventory.length > 0 && (
                    <Select
                      name="newQuantity"
                      defaultValue={initialQuantity}
                      ref={selectQ}
                      onChange={(e) => handleChange(e)}
                    >
                      {quantityInInventory.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </Select>
                  )}
                </>
              ) : (
                <p>Ups, el producto se agotó</p>
              )}
            </>
          ) : (
            <p>...</p>
          )}
        </PriceAndQuantit>
        <DeleteButton
          type="button"
          onClick={() => setRemovedFromCart(articulo_id)}
        >
          Eliminar
        </DeleteButton>
      </Item>
      <Separator />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myCart: state.myCart,
  };
};

const mapDispatchToProps = {
  setMyCart,
  setRemovedFromCart,
  setUpdateCart,
  setUpdateCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartItem);
