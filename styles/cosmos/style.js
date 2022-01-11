import styled from "styled-components";

export const MainStyled = styled.main`
  width: 100%;
  min-height: 70vh;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 750px) {
    min-height: 50vh;
  }
`;
