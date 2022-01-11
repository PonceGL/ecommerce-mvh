import { useEffect, useState } from "react";
import Link from "next/link";

//Components
import MainMenuSections from "@/components/MainMenuSections";

// CSS
import styles from "@/styles/components/MainMenu.module.css";

const MainMenu = ({ isOpen, handleOpen, user }) => {
  const { menu, menuClose, closeButton, list, itemSession, link } = styles;
  const [allCAtegories, setallCAtegories] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);

  // Consulta las categorias
  const getData = async () => {
    const response = await fetch(`/api/categories/all-categories`);
    const { data } = await response.json();
    setallCAtegories(data);
  };

  useEffect(() => {
    getData();
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
    <nav className={isOpen ? menu : `${menu} ${menuClose}`}>
      <button
        type="button"
        onClick={() => handleOpen()}
        aria-label="Botón cerrar menú"
        className={closeButton}
      />
      <ul className={list}>
        <li className={itemSession}>
          <Link href={user.email ? "/perfil" : "/auth"}>
            <a className={link}>
              {user.email ? "Ver mi perfil" : "Inicia sesión"}
            </a>
          </Link>
        </li>
        {mainCategories.length > 0 && (
          <>
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
          </>
        )}
      </ul>
    </nav>
  );
};

export default MainMenu;
