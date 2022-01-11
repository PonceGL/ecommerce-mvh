import { useEffect, useState } from "react";
import Link from "next/link";

//Components

// CSS
import styles from "@/styles/components/MainMenu.module.css";

const MainMenuSections = ({ categorie, sub, isOpen }) => {
  const {
    item,
    link,
    buttonSubMenu,
    containerSubMenu,
    subClose,
    buttonCloseSubMenu,
    catName,
    subList,
    manySubs,
    subItem,
    subLink,
  } = styles;

  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handleOpenSubMenu = () => {
    setOpenSubMenu(!openSubMenu);
  };

  return (
    <li className={item}>
      <Link href={`/categoria/${categorie.replace(/ /g, "-")}`} passHref>
        <a className={link}>{categorie.toLocaleLowerCase()}</a>
      </Link>
      {sub.length > 0 && (
        <>
          <button
            type="button"
            className={buttonSubMenu}
            onClick={handleOpenSubMenu}
          >
            +
          </button>
        </>
      )}
      {sub.length > 0 && (
        <div
          className={
            openSubMenu ? containerSubMenu : `${containerSubMenu} ${subClose}`
          }
        >
          <button
            type="button"
            className={buttonCloseSubMenu}
            onClick={handleOpenSubMenu}
          />
          <p className={catName}>{sub[0].categorie}</p>
          <ul className={sub.length > 25 ? manySubs : subList}>
            {sub.map(({ id, categorie, subcategorie }) => (
              <li key={id} className={subItem}>
                <Link
                  href={`/categoria/${categorie.replace(
                    / /g,
                    "-"
                  )}/${subcategorie.replace(/ /g, "-")}`}
                >
                  <a className={subLink}>{subcategorie.toLocaleLowerCase()}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default MainMenuSections;
