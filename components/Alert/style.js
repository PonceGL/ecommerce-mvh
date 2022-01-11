import styled from "styled-components";

export const SectionText = styled.section`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 2rem;
  border-radius: 0;
  border-bottom: 0.1rem solid var(--blue);
  p {
    margin: 0.5rem 0;
    font-size: 1.6rem;
    text-align: center;
  }
  @media (min-width: 1200px) {
    p {
      font-size: 1.8rem;
    }
  }
`;

export const SectionItems = styled.section`
  width: 100%;
  max-height: 55vh;
  padding: 0.5rem;
  margin: 1rem 0;
  overflow-y: scroll;
`;
