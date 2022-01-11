import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { connect } from "react-redux";

//Components
import { Logo } from "@/components/IconsSVG/Logo";
import { MagnifierIcon } from "@/components/IconsSVG/MagnifierIcon";
import { ShoppingBag } from "@/components/IconsSVG/ShoppingBag";
import SearchBar from "@/components/Search-Bar";
import MainMenu from "@/components/Main-Menu";

// CSS
import styles from "@/styles/components/Header.module.css";

const Header = ({ user, myCart }) => {
  const {
    header,
    logoContainer,
    buttonOpenMenu,
    linebutton,
    searchAndButtonContainer,
    buttonShoppingCart,
    counter,
    sectionLogin,
    logInText,
    loginLink,
  } = styles;

  const router = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  useEffect(() => {
    window.innerWidth < 1000 && setMenuIsOpen(false);
  }, [router.query]);

  useEffect(() => {
    if (router.pathname !== "/perfil" && user.email !== null) {
      setShowProfile(true);
    } else {
      setShowProfile(false);
    }
  }, [router, user]);

  return (
    <header className={header}>
      <div className={searchAndButtonContainer}>
        <button
          type="button"
          className={buttonOpenMenu}
          onClick={handleOpen}
          aria-label="Botón para abrir el menú lateral"
        >
          <div className={linebutton} />
          <div className={linebutton} />
          <div className={linebutton} />
        </button>

        <SearchBar />
      </div>
      <Link href="/" aria-label="Inicio">
        <a className={logoContainer} aria-label="Inicio">
          <Logo />
        </a>
      </Link>

      <Link
        href="/carrito-de-compras"
        aria-label="Botón para ir al perfil del usuario"
      >
        <a className={buttonShoppingCart} aria-label="Inicio">
          {myCart.length > 0 && (
            <span className={counter}>{myCart.length}</span>
          )}
          <ShoppingBag />
        </a>
      </Link>
      {!user.email && (
        <div className={sectionLogin}>
          <p className={logInText}>
            Inicia sesión y comienza a agregar tus artículos favoritos
          </p>
          <Link href="/auth">
            <a className={loginLink}>Registrarse</a>
          </Link>
        </div>
      )}
      <MainMenu isOpen={menuIsOpen} handleOpen={handleOpen} user={user} />
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    myCart: state.myCart,
  };
};

export default connect(mapStateToProps, null)(Header);
