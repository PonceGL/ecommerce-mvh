import styled from "styled-components";

export const ButtonStyled = styled.a`
  grid-column: 6 / span 1;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.3rem 0.3rem 0.3rem 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  transition: 0.3s ease-in-out all;
  @media (min-width: 750px) {
    width: 3rem;
    height: 3rem;
  }
  @media (min-width: 1000px) {
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
  }
`;

export const Counter = styled.div`
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background-color: var(--red);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`;
