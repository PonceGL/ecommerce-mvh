import styled from "styled-components";

export const MainStiled = styled.main`
  width: 100%;
  padding: 1rem;
  margin-top: 4.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 750px) {
    width: 90%;
    margin: 2rem auto;
    margin-top: 8rem;
  }
  @media (min-width: 1200px) {
    width: 80%;
    margin: 2rem auto 8rem;
    margin-top: 19rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: repeat(2, min-content);
    grid-gap: 2rem;
    align-items: start;
  }
`;

export const MainTitle = styled.h1`
  width: 100%;
  padding: 1rem;
  font-size: 2rem;
  color: var(--light-blue);
  @media (min-width: 1200px) {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;
    margin-left: 2rem;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  padding: 1rem;
  @media (min-width: 1200px) {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
  }
`;

export const Text = styled.p`
  width: 100%;
  margin: 1rem auto;
  text-align: justify;
  @media (min-width: 750px) {
    width: 95%;
  }
`;

export const Notification = styled.p`
  width: 100%;
  margin: 1rem auto;
  font-size: 1rem;
  @media (min-width: 750px) {
    width: 95%;
  }
`;

export const Form = styled.form`
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: var(--white);
  border-radius: 1rem;
  @media (min-width: 750px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
  @media (min-width: 1200px) {
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
  }
`;

export const InputBase = styled.input`
  width: 100%;
  height: initial;
  padding-left: 0.5rem;
  margin: 1rem auto;
  font-size: 1.4rem;
  text-align: start;
  color: var(--blue);
  background: none;
  border: none;
  border-bottom: 0.1rem solid var(--blue);
  border-radius: 0;
  outline: none;
  transition: 0.3s ease-in-out all;
  ::placeholder {
    color: var(--blue);
    font-size: 1.2rem;
    text-transform: initial;
  }
  @media (min-width: 750px) {
    width: 45%;
    margin: 1.5rem auto;
  }
`;

export const Span = styled.span`
  font-size: 1rem;
`;

export const Experience = styled.textarea`
  width: 100%;
  min-height: 10rem;
  max-height: 12rem;
  padding: 0.5rem;
  margin: 0.5rem auto;
  font-size: 1.4rem;
  text-align: start;
  color: var(--blue);
  background: none;
  border: 0.1rem solid var(--blue);
  border-radius: 1rem;
  outline: none;
  resize: vertical;
  ::placeholder {
    color: var(--blue);
    font-size: 1.2rem;
  }
  @media (min-width: 750px) {
    width: 95%;
    margin: 1.5rem auto;
    min-height: 8rem;
  }
`;

export const Send = styled.button`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  background-color: var(--yellow);
  color: var(--blue);
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
  border-radius: 2rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out all;
  :hover {
    color: var(--yellow);
    background-color: var(--blue);
  }
  @media (min-width: 750px) {
    width: 50%;
  }
`;
