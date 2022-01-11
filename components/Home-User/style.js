import styled from "styled-components";

export const Section = styled.section`
  grid-column: 1 / span 6;
  grid-row: 2 / span 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 750px) {
    justify-content: flex-end;
  }
  @media (min-width: 1000px) {
    grid-row: 3 / span 1;
    justify-content: center;
  }
`;

export const Text = styled.p`
  font-size: 0.9rem;
  @media (min-width: 1000px) {
    font-size: 1.2rem;
  }
`;

export const LoginLink = styled.a`
  padding: 0.1rem;
  font-size: 0.8rem;
  color: var(--light-blue);
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.2rem;
  @media (min-width: 750px) {
    margin-left: 1rem;
  }
  @media (min-width: 1000px) {
    font-size: 1.2rem;
  }
`;
