// Components
import PreviewItem from "../Preview-Item/PreviewItem";

// Styled-Components
import { ItemsContainer } from "../Home-Sections/style";

const RelatedSecction = ({ data }) => {
  return (
    <ItemsContainer>
      {data.map((item) => (
        <PreviewItem key={item.articulo_id + item.price} {...item} />
      ))}
    </ItemsContainer>
  );
};

export default RelatedSecction;
