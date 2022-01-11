import styled from "styled-components";

export const ContainerFavorites = styled.section`
  width: 100%;
  min-height: 40vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 750px) {
    min-height: 50vh;
  }
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  text-align: center;
`;

export const ListLink = styled.a`
  width: 100%;
  padding: 0.5rem;
  margin: 1rem auto;
  font-size: 1.6rem;
  font-weight: 400;
  text-transform: capitalize;
  text-align: center;
  white-space: nowrap;
  color: var(--white);
  background-color: var(--light-blue);
  border-radius: 0.5rem;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  @media (min-width: 750px) {
    width: 50%;
  }
`;
