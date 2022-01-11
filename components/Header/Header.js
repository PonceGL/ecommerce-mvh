import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// Components
import MainMenu from "../Main-Menu/MainMenu";
import { Logo } from "../IconsSVG/Logo";
import { ButtonMenu } from "../ButtonMenu/ButtonMenu";
import ButtonCart from "../ButtonCart/ButtonCart";
import SearchBar from "../Search-Bar/SearchBar";
import HomeUser from "../Home-User/HomeUser";

// Stiled-Components
import { HeaderStyled, SearchAndButtonContainer, LogoContainer } from "./style";

const Header = ({ user }) => {
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
    <HeaderStyled>
      <SearchAndButtonContainer>
        <ButtonMenu
          handleClick={handleOpen}
          aria-label="Botón para abrir el menú lateral"
        />
        <SearchBar user={showProfile} />
      </SearchAndButtonContainer>
      <Link href="/" passHref>
        <LogoContainer aria-label="Inicio" itemProp="logo">
          <Logo />
        </LogoContainer>
      </Link>
      <ButtonCart />
      <HomeUser user={user} />
      <MainMenu isOpen={menuIsOpen} handleOpen={handleOpen} user={user} />
    </HeaderStyled>
  );
};

export default Header;
