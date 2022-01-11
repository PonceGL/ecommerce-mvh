import styled from "styled-components";

export const Line = styled.div`
  width: 2rem;
  height: 0.2rem;
  background-color: var(--blue);
  border-radius: 0.1rem;
  transition: 0.3s ease-in-out all;
`;

export const ButtonStyled = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.3rem 0.3rem 0.3rem 0;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s ease-in-out all;
  @media (min-width: 750px) {
    width: 3rem;
    height: 3rem;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;
