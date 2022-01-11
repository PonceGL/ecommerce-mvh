import styled from "styled-components";

export const FirstSection = styled.section`
  width: 100%;
  padding: 0 1rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 750px) {
    width: 70%;
    margin: 2rem 0;
  }

  @media (min-width: 1000px) {
    width: 50%;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: var(--blue);
`;

export const FreeShipping = styled.p`
  font-size: 1rem;
`;

export const PaymentButton = styled.a`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  text-align: center;
  font-weight: 500;
  color: var(--white);
  background-color: var(--light-blue);
  border-radius: 0.5rem;
  opacity: 0.8;
  transition: 0.3s ease-in-out all;
  &:hover {
    opacity: 1;
  }
`;

export const ArtilcesSection = styled.section`
  width: 100%;
  padding: 0 1rem;
  margin: 1rem 0;
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; */
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
  @media (min-width: 750px) {
    width: 70%;
    margin: 2rem 0;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1000px) {
    width: 50%;
  }
`;

export const Separator = styled.hr`
  width: 100%;
  margin: 0.5rem 0;
  border-top: 0.1rem solid var(--blue);
  opacity: 0.3;
  @media (min-width: 750px) {
    display: none;
  }
`;

export const DetailsSection = styled(FirstSection)`
  margin-top: 2rem;
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
`;

export const HelpSection = styled.section`
  width: 100%;
  padding: 0 1rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 750px) {
    width: 70%;
    margin: 2rem 0;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1000px) {
    width: 50%;
  }
`;

export const LinkWhatsApp = styled.a`
  width: 100%;
  padding: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: var(--blue);
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 0.5rem;
  background: #25d366;
  border: 0.1rem solid #25d366;
  outline: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  opacity: 0.7;
  transition: 0.3s ease-in-out all;
  &:hover {
    opacity: 1;
  }
  svg {
    transition: 0.3s ease-in-out all;
    fill: var(--blue);
    margin-right: 1rem;
  }
  @media (min-width: 750px) {
    width: 50%;
    margin: 0.5rem 0 0.5rem auto;
  }
  @media (min-width: 1000px) {
    width: 100%;
    padding: 0.2rem;
    margin: 0.5rem auto;
  }
`;

export const Footnotes = styled.p`
  font-size: 0.8rem;
  text-align: center;
`;
