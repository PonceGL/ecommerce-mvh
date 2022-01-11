import React from "react";

//Components
import PreviewItem from "../Preview-Item/PreviewItem";

// Styled-Components
import { ListFavorites, Title, FavoritesContainer } from "./style";

const FavoritesList = ({ itemsIliked }) => {
  return (
    <ListFavorites>
      <Title>Mis favoritos</Title>
      <FavoritesContainer>
        {itemsIliked &&
          itemsIliked.map((article, i) => (
            <PreviewItem
              key={article.articulo_id}
              {...article}
              isRelated={true}
            />
          ))}
      </FavoritesContainer>
    </ListFavorites>
  );
};

export default FavoritesList;
