import React, { useEffect } from "react";
import Image from "next/image";
import { useGetImage } from "../../hooks/useGetImage";

// Styled-Components
import { Products, Name, Price, ImageContainer } from "./style";

// Loader para componente Image
const loader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const SuccesProducts = ({ articulo_id, name, initialQuantity, price }) => {
  // Consulta la imagen
  const [image_url] = useGetImage(articulo_id);
  return (
    <Products>
      <Name>{name}</Name>
      <Price>
        ${formatter.format(price * initialQuantity)} |{" "}
        <span>
          {initialQuantity} {initialQuantity > 1 ? "piezas" : "pieza"}
        </span>
      </Price>
      <ImageContainer>
        {image_url !== "" && (
          <Image
            loader={loader}
            src={`data:image/jpg;base64,${image_url}`}
            width={300}
            height={300}
            alt={`Fotografía de ${name}`}
          />
        )}
      </ImageContainer>
    </Products>
  );
};

export default SuccesProducts;
