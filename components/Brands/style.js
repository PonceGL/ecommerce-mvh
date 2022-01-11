import styled from "styled-components";

export const BrandsStyled = styled.section`
  width: 100%;
  height: fit-content;
  margin: 2rem auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (min-width: 750px) {
    width: 95%;
  }
  @media (min-width: 1000px) {
    width: 50%;
  }
`;
