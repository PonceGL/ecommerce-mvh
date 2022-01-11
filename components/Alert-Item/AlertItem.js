import { useState, useEffect } from "react";
import Image from "next/image";
import { useGetImage } from "../../hooks/useGetImage";

// Data
import { articulos } from "../../database/articulos";

// Styled Components
import { Item, ImageConatiner } from "./style";

// Formatear precio
const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Loader para componente Image
const loader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const AlertItem = ({ articulo_id, initialQuantity, price }) => {
  const [product, setProduct] = useState({});
  // Consulta la imagen
  const [image_url] = useGetImage(articulo_id);

  useEffect(() => {
    if (articulos.length > 0 && articulo_id) {
      const data = articulos.filter((item) => item.articulo_id === articulo_id);
      if (data) {
        setProduct(data[0]);
      }
    }
  }, [articulo_id]);

  return (
    <Item key={articulo_id}>
      {product && (
        <>
          <p>{product.name}</p>
          <p>${formatter.format(price)}</p>
          <p>Cantidad: {initialQuantity}</p>
        </>
      )}
      <ImageConatiner>
        {image_url && (
          <Image
            loader={loader}
            src={`data:image/jpg;base64,${image_url}`}
            width={80}
            height={80}
            alt={`Fotografía de algo`}
            placeholder="blurDataURL"
          />
        )}
      </ImageConatiner>
    </Item>
  );
};

export default AlertItem;
