import styled from "styled-components";

export const Item = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  margin: 0.5rem 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
  justify-items: start;
  align-items: center;
  background-color: var(--white);
  border-radius: 0;
  border-bottom: 0.1rem solid var(--blue);
  p {
    width: 100%;
    text-align: center;
  }
  p:first-child {
    font-size: 1.6rem;
    grid-column: 1 / span 3;
  }

  @media (min-width: 750px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    p:first-child {
      font-size: 1.4rem;
      grid-column: 1 / auto;
    }
    p:not(:first-child) {
      text-align: center;
    }
  }
`;

export const ImageConatiner = styled.div`
  width: 5rem;
  margin: 0 auto;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (min-width: 1200px) {
    width: 100%;
  }
`;
