import React, { useEffect, useState } from "react";

// Styled-Components
import { ButtonStyled, Line } from "./style";

export const ButtonMenu = ({ handleClick }) => {
  return (
    <ButtonStyled
      aria-label="Botón para abrir el menu principal"
      onClick={() => {
        handleClick();
      }}
    >
      <Line />
      <Line />
      <Line />
    </ButtonStyled>
  );
};
