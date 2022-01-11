import Image from "next/image";
import Link from "next/link";
import { connect } from "react-redux";
import { useGetImage } from "../../hooks/useGetImage";
import { useGetPrice } from "../../hooks/useGetPrice";
import { useMyItems } from "../../hooks/useMyItems";

//Actions
import {
  setMyCart,
  setPricesToCart,
  setIitemsIliked,
  setDeleteFavorite,
} from "../../actions";

// Components
import { Loading } from "../Loaders/Loading";
import { Consulting } from "../Loaders/Consulting";
import { HeartEmpty } from "../IconsSVG/HeartEmpty";
import { HeartFull } from "../IconsSVG/HeartFull";

// Styled-Components
import {
  Item,
  ItemLink,
  ImageContainer,
  ItemInfo,
  ItemText,
  CategoryAndIconContainer,
  ItemPrice,
  IconContainer,
  Categoryes,
  Categorie,
} from "./style";

// Loader para componente Image
const loader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

// Formatear precio
const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const PreviewItem = (props) => {
  const {
    articulo_id,
    name,
    category,
    main_category,

    itemsIliked,
    myCart,
    setIitemsIliked,
    setDeleteFavorite,
  } = props;

  // Hook que verifica si el producto esta entre los favoritos
  const [yesItIsMineLike] = useMyItems(articulo_id, itemsIliked);
  // Hook que verifica si el producto esta en el carrito
  const [yesItIsMineCart] = useMyItems(articulo_id, myCart);
  // Consulta la imagen
  const [image_url] = useGetImage(articulo_id);
  // Consulta el precio
  const [price] = useGetPrice(articulo_id);

  // Envia a favoritos
  const handleLike = () => {
    setIitemsIliked({ articulo_id });
  };

  // Elimina de favoritos
  const handleDeleteFavorite = () => {
    setDeleteFavorite(articulo_id);
  };

  return (
    <Item>
      <Link href={`/detalles/${articulo_id}`} passHref>
        <ItemLink aria-label={`Ver detalles de ${name}`}>
          <ImageContainer>
            {image_url ? (
              <Image
                loader={loader}
                src={`data:image/jpg;base64,${image_url}`}
                alt={`Imagen de producto no disponible`}
                layout="fill"
                objectFit="contain"
                blurDataURL
              />
            ) : (
              <Loading />
            )}
          </ImageContainer>
          <ItemInfo>
            <ItemText>{name.toLocaleLowerCase()}</ItemText>
            {price !== "" ? (
              <ItemPrice>${formatter.format(price)}</ItemPrice>
            ) : (
              <Consulting />
            )}
          </ItemInfo>
        </ItemLink>
      </Link>
      <CategoryAndIconContainer>
        {main_category && (
          <Categorie>{main_category.toLocaleLowerCase()}</Categorie>
        )}
        <IconContainer
          onClick={yesItIsMineLike ? handleDeleteFavorite : handleLike}
          aria-label="Botón para agregar a favoritos"
        >
          {yesItIsMineLike ? <HeartFull /> : <HeartEmpty />}
        </IconContainer>
      </CategoryAndIconContainer>
    </Item>
  );
};

const mapStateToProps = (state) => {
  return {
    myCart: state.myCart,
    articles: state.articles,
    itemsIliked: state.itemsIliked,
  };
};

const mapDispatchToProps = {
  setMyCart,
  setPricesToCart,
  setIitemsIliked,
  setDeleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewItem);
