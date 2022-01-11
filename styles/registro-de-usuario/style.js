import styled from "styled-components";

export const SectionStyled = styled.section`
  width: 100%;
  padding: 1rem;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  border-radius: 1rem;
  @media (min-width: 750px) {
    width: 80%;
  }
  @media (min-width: 750px) and (orientation: portrait) {
    min-height: 50vh;
    padding: 15% 1rem;
  }
  @media (min-width: 1000px) and (orientation: portrait) {
    min-height: 60vh;
    padding: 20% 1rem;
  }
  @media (min-width: 1000px) and (orientation: landscape) {
    width: 50%;
  }
`;

export const Text = styled.p`
  width: 90%;
  margin: 1rem auto;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 0 20% 0;
  text-align: center;
  @media (min-width: 1000px) and (orientation: landscape) {
    margin: 0 0 5% 0;
  }
`;

export const ButtonLogIn = styled.button`
  width: 90%;
  padding: 1rem;
  margin: 1rem auto;
  font-size: 1.6rem;
  text-align: center;
  color: var(--white);
  border: none;
  ${(props) => props.color && `background-color: ${props.color};`}
  border-radius: 0.5rem;
  outline: none;
  cursor: pointer;
  transition: 0.3s ease-in-out all;
  box-shadow: 5px 5px 8px -1px rgba(102, 102, 102, 0.6);
  &:hover {
    box-shadow: 5px 5px 10px -1px rgba(102, 102, 102, 0.9);
  }
  @media (min-width: 750px) {
    width: 70%;
  }
  @media (min-width: 1000px) {
    width: 50%;
  }
`;

export const SpanStyles = styled.span`
  font-weight: 700;
`;

export const ViewProfileButton = styled.a`
  width: 80%;
  padding: 0.5rem;
  margin: 6rem auto;
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
    background-color: #ffb910;
  }
  @media (min-width: 750px) {
    width: 50%;
    margin: 5rem auto 2rem;
  }
`;
