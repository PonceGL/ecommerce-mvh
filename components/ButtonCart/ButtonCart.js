import React, { useEffect, useState } from "react";
import Link from "next/link";
import { connect } from "react-redux";

// Components
import { ShoppingBag } from "../IconsSVG/ShoppingBag";

// Styled-Components
import { ButtonStyled, Counter } from "./style";

const ButtonCart = ({ myCart }) => {
  return (
    <>
      <Link href="/carrito-de-compras" passHref>
        <ButtonStyled aria-label="Botón para ir al perfil del usuario">
          {myCart.length > 0 && <Counter>{myCart.length}</Counter>}
          <ShoppingBag />
        </ButtonStyled>
      </Link>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myCart: state.myCart,
  };
};

export default connect(mapStateToProps, null)(ButtonCart);
