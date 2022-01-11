import styled from "styled-components";

export const MainStiled = styled.main`
  width: 100%;
  min-height: 50vh;
  padding: 1rem;
  margin: 0 auto;
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 750px) {
    margin-top: 8rem;
    min-height: 60vh;
  }
  @media (min-width: 1000px) and (orientation: landscape) {
    padding: 2rem 1rem;
    margin-top: 19rem;
    min-height: 40vh;
  }
  @media (min-width: 1000px) and (orientation: portrait) {
    background-color: red;
    min-height: 70vh;
  }
`;

export const Title = styled.h1`
  width: 100%;
  white-space: nowrap;
  text-align: center;
  font-size: 2.2rem;
  @media (min-width: 1000px) {
    font-size: 3.2rem;
  }
`;

export const IconConatiner = styled.div`
  width: 100%;
  @media (min-width: 1000px) {
    width: 80%;
  }
`;

export const ButtonLink = styled.a`
  width: 80%;
  padding: 0.5rem;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  background: var(--yellow);
  border: none;
  border-radius: 1rem;
  outline: none;
  cursor: pointer;
  transition: 0.3s ease-in-out all;
  &:hover {
    background-color: var(--blue);
    color: var(--yellow);
  }
  @media (min-width: 750px) {
    width: 50%;
  }
  @media (min-width: 1200px) {
    width: 30%;
  }
`;
