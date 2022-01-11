import React, { useState, useEffect } from "react";

// Components
import PreviewItem from "../Preview-Item/PreviewItem";

// Styled-Components
import { ItemsContainer } from "./style";

const HomeSection = ({ data }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (data.length > 0) {
      setItems(data.slice(0, 12));
    }
  }, [data]);

  return (
    <ItemsContainer>
      {items.map((item) => (
        <PreviewItem key={item.articulo_id + item.price} {...item} />
      ))}
    </ItemsContainer>
  );
};

export default HomeSection;
