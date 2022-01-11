import React, { useEffect, useState } from "react";
import Link from "next/link";

// Components

// Styled-Components
import {
  LiStyled,
  AnchorStyled,
  ButtonSub,
  LineLink,
  ConatinerSubMenu,
  CloseButton,
  CatName,
  UlStyled,
  SubLiStyled,
  SubAnchorStyled,
  SocialIconsConatiner,
  LinkIcon,
} from "./style";

const MainMenuSections = ({ categorie, sub, isOpen }) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handleOpenSubMenu = () => {
    setOpenSubMenu(!openSubMenu);
  };

  return (
    <LiStyled>
      <Link href={`/categoria/${categorie.replace(/ /g, "-")}`} passHref>
        <AnchorStyled>{categorie.toLocaleLowerCase()}</AnchorStyled>
      </Link>
      {sub.length > 0 && (
        <>
          <ButtonSub type="button" onClick={handleOpenSubMenu}>
            +
          </ButtonSub>
        </>
      )}
      {sub.length > 0 && (
        <ConatinerSubMenu show={openSubMenu} mainmenu={isOpen}>
          <CloseButton
            show={openSubMenu}
            type="button"
            onClick={() => {
              handleOpenSubMenu();
            }}
          />
          <CatName show={openSubMenu}>{sub[0].categorie}</CatName>
          <UlStyled
            show={openSubMenu}
            columns={Math.floor(sub.length / 10) - 1}
          >
            {sub.map(({ id, categorie, subcategorie }) => (
              <SubLiStyled key={id}>
                <Link
                  href={`/categoria/${categorie.replace(
                    / /g,
                    "-"
                  )}/${subcategorie.replace(/ /g, "-")}`}
                  passHref
                >
                  <SubAnchorStyled>
                    {subcategorie.toLocaleLowerCase()}
                  </SubAnchorStyled>
                </Link>
              </SubLiStyled>
            ))}
          </UlStyled>
        </ConatinerSubMenu>
      )}
    </LiStyled>
  );
};

export default MainMenuSections;
