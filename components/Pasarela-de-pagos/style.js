import styled from "styled-components";

export const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 1rem;
`;

export const BuyButton = styled.button`
  display: none;
  /* width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  text-align: center;
  font-weight: 500;
  color: var(--white);
  background-color: var(--light-blue);
  border-radius: 0.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.3s ease-in-out all;
  &:hover {
    opacity: 1;
  }

  @media (min-width: 750px) {
    width: 80%;
    margin: 2rem auto;
  }
  @media (min-width: 1200px) {
    grid-column: 1 / span 2;
    grid-row: 5 / span 1;
    width: 50%;
  } */
`;

export const Iframe = styled.iframe`
  width: 100%;
  ${(props) => (props.show ? `height: 36.5rem;` : `height: 0;`)}
  padding: 0;
  margin: 1.5rem auto;
  ${(props) => (props.show ? `display: flex;` : `display: none;`)}
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--white);
  border-radius: 1rem;
  border: none;
  outline: none;
  @media (min-width: 750px) {
    width: 80%;
    ${(props) => (props.show ? `height: 30rem;` : `height: 0;`)}
    ${(props) => (props.show ? `display: flex;` : `display: none;`)}
  }
  @media (min-width: 1000px) {
    width: 50%;
    margin: 0 auto;
    ${(props) => (props.show ? `height: 60rem;` : `height: 0;`)}
    ${(props) => (props.show ? `display: flex;` : `display: none;`)}
    border-radius: 0 0 2rem 2rem;
  }
`;
