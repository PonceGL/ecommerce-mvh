import styled from "styled-components";

export const Item = styled.article`
  width: 90%;
  padding: 0.5rem;
  margin: 0.5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: 0.3s ease-in-out all;
  @media (min-width: 750px) {
  }
  @media (min-width: 1000px) {
  }
`;

export const ImageContainer = styled.div`
  width: 70%;
  margin: 0.5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  aspect-ratio: 1 / 1;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
`;

export const Name = styled.a`
  width: 100%;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: left;
  color: var(--blue);
  cursor: pointer;
`;

export const PriceAndQuantit = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Price = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--blue);
`;

export const PriceOrigin = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
`;

export const Select = styled.select`
  margin-left: auto;
  border-radius: 0.4rem;
  border: 0.1rem solid var(--blue);
  color: var(--light-blue);
  outline: var(--light-blue);
`;

export const DeleteButton = styled.button`
  margin: 0.2rem auto 0.2rem 0;
  font-size: 1.2rem;
  color: var(--light-blue);
  background: none;
  cursor: pointer;
  outline: none;
  border: none;
`;

export const Separator = styled.hr`
  width: 100%;
  margin: 0.5rem 0;
  border-top: 0.1rem solid var(--blue);
  opacity: 0.3;
  @media (min-width: 750px) {
    display: none;
  }
`;
