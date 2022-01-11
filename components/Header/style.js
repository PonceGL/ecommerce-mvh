import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  /* grid-template-rows: repeat(2, 1fr); */
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const SearchAndButtonContainer = styled.div`
  grid-column: 1 / span 4;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-gap: 1rem;
  position: relative;
  @media (min-width: 1000px) {
    grid-column: 2 / span 1;
    position: initial;
  }
`;

export const LogoContainer = styled.a`
  grid-column: 5 / span 1;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease-in-out all;
  @media (min-width: 1000px) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    width: 5rem;
  }
`;
