import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: var(--blue);
`;

export const Report = styled.p`
  font-size: 1rem;
  color: var(--gray);
`;

export const DetailsSection = styled.section`
  width: 100%;
  padding: 0 1rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 750px) {
    width: 80%;
  }
  @media (min-width: 1000px) {
    width: 50%;
  }
`;

export const Details = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 750px) {
    margin: 2rem 0;
  }
`;

export const Totals = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--light-blue);
`;
