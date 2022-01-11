import styled from "styled-components";

export const ContainerFavorites = styled.section`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--light-blue);
  @media (min-width: 1000px) {
    font-size: 2rem;
  }
`;

export const LinkProfile = styled.a`
  padding: 0.5rem;
  margin-left: auto;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--light-blue);
  @media (min-width: 750px) {
    padding: 0.5rem 3rem;
    height: 2rem;
    line-height: 1rem;
    color: var(--white);
    background-color: var(--light-blue);
    border-radius: 0.4rem;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`;
