import styled from "styled-components";

export const MainStyled = styled.main`
  width: 100%;
  padding: 1rem;
  margin: 1rem 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 1rem 0;
  font-size: 1.8rem;
  font-weight: 500;
  text-transform: capitalize;
  @media (min-width: 1000px) {
    font-size: 2.5rem;
  }
`;

export const SectionEmpty = styled.section`
  width: 80%;
  @media (min-width: 1000px) {
    width: 50%;
  }
`;

export const TextEmpty = styled.p`
  font-size: 1.6rem;
  @media (min-width: 1000px) {
    width: 100%;
    margin-top: 2rem;
    font-size: 2rem;
    text-align: center;
  }
`;

export const LoadMoreButton = styled.button`
  margin: 1rem auto;
  padding: 1rem 4rem;
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--blue);
  background-color: var(--yellow);
  border: none;
  border-radius: 0.5rem;
  outline: none;
  opacity: 0.7;
  cursor: pointer;
  transition: 0.3s ease-in-out all;
  &:hover {
    opacity: 1;
  }
`;
