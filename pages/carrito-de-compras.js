import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Link from "next/link";

// Data
// import { articulos } from "../database/articulos";

// Components
import ShoppingCartItem from "../components/ShoppingCart-Item/ShoppingCartItem";
import { Whatsapp } from "../components/IconsSVG/Whatsapp";

// Styled-Components
import { MainStyled } from "../styles/Inicio/style";
import {
  FirstSection,
  Title,
  FreeShipping,
  Footnotes,
  PaymentButton,
  ArtilcesSection,
  DetailsSection,
  Details,
  Totals,
  HelpSection,
  LinkWhatsApp,
  Separator,
} from "../styles/carrito-de-compras/style";

// Formatear precio
const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ShoppingCart = ({ myCart }) => {
  const [listPrices, setListPrices] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (myCart.length > 0) {
      let prices = myCart.map((item) => item.price * item.initialQuantity);
      setListPrices(prices);
    }
  }, [myCart]);

  useEffect(() => {
    if (listPrices.length > 0) {
      let total = listPrices.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
      setTotal(total);
    }
  }, [listPrices]);

  return (
    <MainStyled>
      {myCart.length > 0 ? (
        <>
          {total && (
            <FirstSection>
              <Title>Tu carrito contiene ${formatter.format(total)}</Title>
              {total > 200 && (
                <FreeShipping>
                  Envío gratis en Xalapa* o puedes recoger en tienda
                </FreeShipping>
              )}
              {/* <Link href="/realizar-pago">
                <PaymentButton>Pagar</PaymentButton>
              </Link> */}
            </FirstSection>
          )}
          <ArtilcesSection>
            <Separator />
            {myCart.map((item) => (
              <ShoppingCartItem key={item.articulo_id} {...item} />
            ))}
          </ArtilcesSection>
          <DetailsSection>
            <Details>
              <p>Subtotal</p>
              <p>${formatter.format(total)}</p>
            </Details>
            <Details>
              <p>Envío</p>
              <p>GRATIS*</p>
            </Details>
            <Separator />
            <Details>
              <p>Tu total</p>
              <Totals>${formatter.format(total)}</Totals>
            </Details>
            <Link href="/realizar-pago">
              <PaymentButton>Pagar</PaymentButton>
            </Link>
          </DetailsSection>
        </>
      ) : (
        <FirstSection>
          <Title>Tu carrito está vacío</Title>
          <FreeShipping>¿qué tal si agregas algo?</FreeShipping>
          <Link href="/">
            <PaymentButton>Ver productos</PaymentButton>
          </Link>
        </FirstSection>
      )}
      <HelpSection>
        <LinkWhatsApp
          href={`https://api.whatsapp.com/send?phone=522288366283`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enlace a WhatsApp"
          bg="#25d366"
        >
          <Whatsapp width="1.4rem" />
          ¿Necesitas ayuda?
        </LinkWhatsApp>
      </HelpSection>
      <Footnotes>
        *Envío gratis dentro de Xalapa en compras mayores a $200 pesos MXN,
        aplican restricciones
      </Footnotes>
    </MainStyled>
  );
};

const mapStateToProps = (state) => {
  return {
    myCart: state.myCart,
    itemsIliked: state.itemsIliked,
  };
};

// const mapDispatchToProps = {
//   setMyCart,
//   setPricesToCart,
//   setIitemsIliked,
//   setDeleteFavorite,
// };

export default connect(mapStateToProps, null)(ShoppingCart);
