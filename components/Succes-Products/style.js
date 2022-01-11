import styled from "styled-components";

export const Products = styled.div`
  width: 100%;
  min-height: 10rem;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;
  justify-items: center;
  align-items: center;
  @media (min-width: 750px) {
    grid-template-columns: 3fr 1fr 1fr;
  }
`;

export const Name = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--light-blue);
  span {
    font-weight: 400;
  }
  @media (min-width: 750px) {
    padding: 1rem;
    text-align: left;
  }
`;

export const Price = styled.p`
  font-size: 1.6rem;
`;

export const ImageContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  aspect-ratio: 1 / 1;
  border-radius: 0.5rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (min-width: 750px) {
    width: 100%;
  }
`;
