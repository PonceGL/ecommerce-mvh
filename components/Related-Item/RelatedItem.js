import Image from "next/image";
import Link from "next/link";
import { connect } from "react-redux";
import { useGetImage } from "../../hooks/useGetImage";
import { useMyItems } from "../../hooks/useMyItems";

//Actions
import { setIitemsIliked, setDeleteFavorite } from "../../actions";

// Components
import { Loading } from "../Loaders/Loading";
import { Consulting } from "../Loaders/Consulting";
import { HeartEmpty } from "../IconsSVG/HeartEmpty";
import { HeartFull } from "../IconsSVG/HeartFull";

// CSS
import styles from "@/styles/components/RelatedItem.module.css";

// Loader para componente Image
const loader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

// Formatear precio
const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const RelatedItem = (props) => {
  const {
    item,
    itemLink,
    imageContainer,
    itemInfo,
    itemTitle,
    itemPrice,
    lastSection,
    categorie,
    iconContainer,
  } = styles;

  const {
    articulo_id,
    name,
    price,
    category,
    main_category,

    itemsIliked,
    setIitemsIliked,
    setDeleteFavorite,
  } = props;

  // Hook que verifica si el producto esta entre los favoritos
  const [yesItIsMineLike] = useMyItems(articulo_id, itemsIliked);
  // Consulta la imagen
  const [image_url] = useGetImage(articulo_id);

  // Envia a favoritos
  const handleLike = () => {
    setIitemsIliked({ articulo_id });
  };

  // Elimina de favoritos
  const handleDeleteFavorite = () => {
    setDeleteFavorite(articulo_id);
  };

  return (
    <div className={item}>
      <Link href={`/detalles/${articulo_id}`} passHref>
        <a className={itemLink} aria-label={`Ver detalles de ${name}`}>
          <div className={imageContainer}>
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
          </div>
          <div className={itemInfo}>
            <p className={itemTitle}>{name.toLocaleLowerCase()}</p>
            {price !== "" ? (
              <p className={itemPrice}>${formatter.format(price)}</p>
            ) : (
              <Consulting />
            )}
          </div>
        </a>
      </Link>
      <dic className={lastSection}>
        {main_category && (
          <p className={categorie}>{main_category.toLocaleLowerCase()}</p>
        )}
        <button
          type="button"
          onClick={yesItIsMineLike ? handleDeleteFavorite : handleLike}
          aria-label="Botón para agregar a favoritos"
          className={iconContainer}
        >
          {yesItIsMineLike ? <HeartFull /> : <HeartEmpty />}
        </button>
      </dic>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    itemsIliked: state.itemsIliked,
  };
};

const mapDispatchToProps = {
  setIitemsIliked,
  setDeleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(RelatedItem);
