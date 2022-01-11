import styled, { keyframes } from "styled-components";

const entrance = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.7;
  }
`;

export const InputContainer = styled.div`
  ${(props) =>
    props.columns ? `grid-column: 2 / span 1;` : `grid-column: 2 / span 2;`}
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1000px) {
    grid-column: 1 / span 2;
  }
`;

export const IconContainer = styled.div`
  width: 10%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: 0.1rem solid var(--blue);
  border-left: none;
  border-radius: 0 1rem 1rem 0;
  transition: 0.3s ease-in-out all;
  @media (min-width: 1000px) {
    height: 2.2rem;
  }
`;

export const InputSearch = styled.input`
  width: 90%;
  height: 2rem;
  padding: 0.2rem 0 0.2rem 1rem;
  font-size: 1.4rem;
  color: var(--text);
  background: none;
  border: 0.1rem solid var(--blue);
  border-right: none;
  border-radius: 1rem 0 0 1rem;
  outline: none;
  transition: 0.3s ease-in-out all;
  ::placeholder {
    color: var(--light-blue);
    font-size: 1.4rem;
    opacity: 0.8;
  }
  @media (min-width: 1000px) {
    height: 2.2rem;
    padding: 0.5rem 1.5rem;
  }
`;

// Results

export const ResultsContainer = styled.div`
  width: 100vw;
  height: fit-content;
  min-height: 10rem;
  padding: 2rem 0.5rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--background);
  box-shadow: 0.5rem 0.5rem 1rem 0.1rem #434343;
  position: absolute;
  top: 150%;
  left: -1rem;
  z-index: 1000;
  @media (min-width: 750px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    justify-items: center;
    align-items: center;
  }
  @media (min-width: 1000px) {
    width: 70vw;
    grid-template-columns: repeat(3, 1fr);
    top: 6rem;
    left: calc(50% - 35vw);
  }
`;

export const TitleEmty = styled.p`
  font-size: 1.6rem;
  margin: auto;
  text-align: center;
  @media (min-width: 750px) {
    grid-column: 1 / span 2;
  }
  @media (min-width: 1000px) {
    grid-column: 1 / span 3;
  }
`;

export const TitleMatch = styled.h5`
  font-size: 1.6rem;
  margin: 0.5rem 0;
  text-align: center;
  @media (min-width: 750px) {
    grid-column: 1 / span 2;
  }
  @media (min-width: 1000px) {
    grid-column: 1 / span 3;
  }
`;

export const NavegateTo = styled.a`
  margin: 0 auto;
  padding: 1rem 4rem;
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--blue);
  background-color: var(--yellow);
  border: none;
  border-radius: 0.5rem;
  outline: none;
  opacity: 0;
  cursor: pointer;
  animation: ${entrance} 1s ease-in-out 1s 1 normal forwards;
  transition: 0.3s ease-in-out all;
  &:hover {
    opacity: 1;
  }
  @media (min-width: 750px) {
    grid-column: 1 / span 2;
  }
  @media (min-width: 1000px) {
    grid-column: 1 / span 3;
  }
`;
