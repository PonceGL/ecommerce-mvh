import React from "react";

export const BrandItem = ({ name, logo }) => {
  return (
    <>
      <img src={logo} width={200} height={200} alt={`Imagen de ${name}`} />
    </>
  );
};
