import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";

const Layout = ({ children, myCart, user }) => {
  const { pathname } = useRouter();

  // Regresa el scroll al remover el carrtio de compras
  useEffect(() => {
    if (myCart.length === 0 || pathname === "/realizar-pago") {
      document.body.style.position = "initial";
    }
  }, [myCart]);
  return (
    <>
      <Header user={user} />
      {children}
      <Footer user={user} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    carIsEmpty: state.carIsEmpty,
    myCart: state.myCart,
    carIsOpen: state.carIsOpen,
    shoppingCartPrices: state.shoppingCartPrices,
    shippingCost: state.shippingCost,
  };
};

export default connect(mapStateToProps, null)(Layout);
