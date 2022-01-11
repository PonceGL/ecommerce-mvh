import styled, { keyframes } from "styled-components";

const pulse = keyframes`
   0% {
    animation-timing-function: ease-out;
    transform: scale(1);
    transform-origin: center center;
  }

  10% {
    animation-timing-function: ease-in;
    transform: scale(0.91);
  }

  17% {
    animation-timing-function: ease-out;
    transform: scale(0.98);
  }

  33% {
    animation-timing-function: ease-in;
    transform: scale(0.87);
  }

  45% {
    animation-timing-function: ease-out;
    transform: scale(1);
  }
`;

export const SuccessContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  background-color: var(--white);
  border-radius: 1.5rem 1.5rem 0 0;
  @media (min-width: 750px) {
    width: 90%;
  }
  @media (min-width: 1000px) {
    width: 70%;
  }
  @media print {
    width: 90%;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content;
    grid-gap: 1rem;
    justify-items: center;
    align-items: center;
    background-color: var(--background);
  }
`;

export const SuccessIconContainer = styled.div`
  width: 20%;
  padding: 0.2rem;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid var(--blue);
  border-radius: 50%;
  animation: ${pulse} 2s ease 1s 2 normal forwards;
  @media (min-width: 750px) {
    width: 15%;
  }

  @media (min-width: 1000px) {
    width: 10%;
  }
  @media print {
    display: none;
  }
`;

export const SuccessText = styled.p`
  @media print {
    display: none;
  }
`;

export const InfoPrintContainer = styled.div`
  display: none;
  @media print {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      margin: 1rem 0;
    }
  }
`;

export const LogoContainer = styled.div`
  display: none;
  @media print {
    width: 10rem;
    display: block;
  }
`;

export const PurchaseInfoContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--white);
  @media (min-width: 750px) {
    width: 90%;
  }
  @media (min-width: 1000px) {
    width: 70%;
  }
  @media print {
    width: 92%;
  }
`;

export const TotalContainer = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 1rem auto;
  text-align: center;
  background-color: var(--background);
  border-radius: 0;
  h2 {
    color: var(--light-blue);
  }
  p {
    width: 100%;
    margin: 1rem 0;
    font-size: 1rem;
  }
  @media print {
    width: 100%;
    margin: 0 auto;
    background: none;
    h2 {
      font-size: 3rem;
    }
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  font-size: 1.2rem;
`;

export const Products = styled.div`
  width: 100%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  grid-template-rows: 6rem;
  grid-gap: 0.5rem;
  justify-items: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const InfoContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  justify-items: center;
  align-items: start;
  background-color: var(--white);
  @media (min-width: 750px) {
    width: 90%;
  }
  @media (min-width: 1000px) {
    width: 70%;
  }
  @media print {
    width: 90%;
    background-color: var(--background);
    border-radius: 0 0 1.5rem 1.5rem;
    position: relative;
  }
`;

export const ShippingDetails = styled.div`
  width: 100%;
  max-width: 50vw;
  padding: 1rem;
  font-size: 1.2rem;
  text-align: left;
`;

export const Gratitude = styled.div`
  display: none;
  @media print {
    display: block;
    grid-column: 1 / span 2;
    padding: 1rem;
    margin: 1rem auto;
    text-align: center;
    font-size: 2rem;
  }
`;

export const FiscalComprobant = styled.p`
  display: none;
  @media print {
    display: block;
    text-align: center;
    font-size: 1rem;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }
`;

export const QRContainer = styled.div`
  display: none;
  @media print {
    width: 10rem;
    display: block;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`;

export const ButtonsInfoContainer = styled.section`
  width: 100%;
  margin: 0 auto 2rem;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--white);
  border-radius: 0 0 1.5rem 1.5rem;
  p {
    font-size: 1.2rem;
    text-align: center;
  }
  span {
    color: var(--yellow);
  }
  @media (min-width: 750px) {
    width: 90%;
  }
  @media (min-width: 1000px) {
    width: 70%;
  }
  @media print {
    display: none;
  }
`;

export const PrintButton = styled.button`
  width: 80%;
  padding: 1rem;
  margin: 1rem auto;
  background-color: var(--yellow);
  color: var(--blue);
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  border-radius: 2rem;
  outline: none;
  border: none;
  cursor: pointer;
`;
