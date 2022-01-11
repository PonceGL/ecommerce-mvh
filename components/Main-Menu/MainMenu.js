import React, { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

// Components
import MainMenuSections from "../Main-Menu-Sections/MainMenuSections";

// Styled-Components
import {
  NavStyled,
  CloseButton,
  UlStyled,
  LiStyled,
  AnchorStyled,
} from "./style";

const MainMenu = ({ isOpen, handleOpen, user }) => {
  const [allCAtegories, setallCAtegories] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);

  // Consulta las categorias
  useEffect(async () => {
    const response = await fetch(`/api/categories/all-categories`);
    const { data } = await response.json();
    setallCAtegories(data);
  }, []);

  // Filtra las categorias principales
  useEffect(() => {
    const cat = allCAtegories.map((item) => item.categorie);

    let result = cat.filter((item, index) => {
      return cat.indexOf(item) === index;
    });
    setMainCategories(result);
  }, [allCAtegories]);

  return (
    <NavStyled open={isOpen} id="Main-Menu">
      <CloseButton
        type="button"
        onClick={() => handleOpen()}
        aria-label="Botón cerrar menú"
      ></CloseButton>
      {mainCategories.length > 0 && (
        <UlStyled rows={mainCategories.length + 2}>
          <LiStyled>
            <Link href={user.email ? "/perfil" : "/auth"}>
              <AnchorStyled>
                {user.email ? "Ver mi perfil" : "Inicia sesión"}
              </AnchorStyled>
            </Link>
          </LiStyled>
          {mainCategories.map((categorie) => {
            let sub = allCAtegories.filter(
              (item) => item.categorie === categorie
            );
            return (
              <MainMenuSections
                key={categorie}
                categorie={categorie}
                sub={sub.sort()}
                isOpen={isOpen}
              />
            );
          })}
        </UlStyled>
      )}
    </NavStyled>
  );
};

export default MainMenu;
