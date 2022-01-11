import styled from "styled-components";

export const MainStiled = styled.main`
  width: 100%;
  padding: 1rem;
  margin: 1rem 0 2rem;
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (min-width: 750px) {
    width: 90%;
    margin: 1rem auto;
    margin-top: 8rem;
  }
  @media (min-width: 1000px) {
    width: 80%;
    min-height: 60vh;
  }
  @media (min-width: 1200px) {
    margin: 10rem auto;
    margin-top: 19rem;
  }
`;

export const MainTitle = styled.h1`
  width: 100%;
  font-size: 2rem;
  color: var(--light-blue);
`;

export const SubTitle = styled.h3`
  width: 100%;
  margin: 1rem auto;
  font-size: 1.8rem;
`;

export const Paragraph = styled.p`
  width: 100%;
  margin: 1rem auto;
`;

export const Strong = styled.strong`
  font-weight: 500;
`;

export const ListTitle = styled.p`
  width: 100%;
  margin: 1rem auto;
  font-weight: 500;
`;

export const ListItem = styled.li`
  margin: 0.5rem 0 0 1rem;
`;

export const UnderLine = styled.span`
  text-decoration: underline;
`;

export const Anchor = styled.a`
  color: var(--blue);
`;
