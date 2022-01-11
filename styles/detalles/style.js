import styled, { keyframes } from "styled-components";

const slide = keyframes`
   0% {
    left: -5rem;
  }

  20% {
    left: 150%;
  }
  100% {
    left: 150%;
  }
`;

export const SubDirectory = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  a {
    font-size: 1rem;
    color: var(--blue);
    transition: 0.3s ease-in-out all;
  }
  @media (min-width: 1000px) {
    width: 80%;
    margin: 2rem auto;
    a {
      font-size: 1.2rem;
    }
  }
`;

export const Product = styled.section`
  width: 100%;
  min-height: 50vh;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content;
  grid-gap: 2rem;
  justify-items: center;
  align-items: start;
  border-radius: 0.5rem;
  background-color: #efefef;
  box-shadow: 2px 2px 5px 1px #dcdcdc;
  @media (min-width: 1000px) {
    width: 80%;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    background-color: #ffffff;
    box-shadow: initial;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  background-color: #ffffff;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  @media (min-width: 750px) {
    width: 70%;
    min-height: 30vh;
    border-radius: 1rem;
  }
  @media (min-width: 1000px) {
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (min-width: 750px) {
    width: 70%;
  }
  @media (min-width: 1000px) {
    width: 80%;
    padding: 1rem;
    background-color: #efefef;
    border-radius: 0.5rem;
  }
`;

export const Title = styled.h1`
  margin: 1rem 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--light-blue);
  text-transform: capitalize;
  @media (min-width: 750px) {
    font-size: 2.2rem;
  }
  @media (min-width: 1000px) {
    font-size: 2.5rem;
  }
`;

export const PriceContainer = styled.div`
  width: 100%;
  min-height: 1.8rem;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1000px) {
  }
`;

export const Price = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  @media (min-width: 1000px) {
    font-size: 2rem;
  }
`;

export const ButtonLike = styled.button`
  width: 2rem;
  height: 2rem;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s ease-in-out all;
  &:hover {
    opacity: 1;
  }
  @media (min-width: 750px) {
    width: 2.4rem;
    height: 2.4rem;
  }
  @media (min-width: 1000px) {
    opacity: 0.6;
  }
`;

export const Stock = styled.p`
  span {
    font-size: 1.6rem;
    font-weight: 700;
  }
  @media (min-width: 1000px) {
    span {
      font-size: 1.8rem;
    }
  }
`;

export const NotAvailable = styled.p`
  font-size: 1.2rem;
  opacity: 0.6;
`;

export const Description = styled.p`
  margin: 1.5rem 0;
  font-weight: 400;
  text-transform: capitalize;
`;

export const Sku = styled.p`
  margin: 1rem 0;
  font-weight: 500;
`;

export const ContainerSelector = styled.div`
  width: 100%;
  margin: 1rem auto;
  border: 0.1rem solid var(--blue);
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  justify-items: center;
  align-items: center;
  @media (min-width: 750px) {
    width: 50%;
    margin: 0.5rem 0 0.5rem auto;
  }
  @media (min-width: 1000px) {
    width: 100%;
    margin: 0.5rem auto;
  }
`;

export const SelectorButtons = styled.button`
  width: 100%;
  padding: 0.5rem 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  color: var(--light-blue);
  font-size: 1.4rem;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  position: relative;
  opacity: 0.8;
  transition: 0.3s ease-in-out all;
  &:hover {
    opacity: 1;
  }
  @media (min-width: 1000px) {
    padding: 0.2rem;
  }
`;

export const SelectorDisplay = styled.p`
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--blue);
  font-size: 1.4rem;
  font-weight: 700;
  position: relative;
  transition: 0.3s ease-in-out all;
  @media (min-width: 1000px) {
    padding: 0.2rem;
  }
`;

export const AddToCartButton = styled.button`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: var(--yellow);
  color: var(--blue);
  font-size: 1.4rem;
  font-weight: 700;
  border-radius: 0.5rem;
  outline: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  opacity: 0.8;
  transition: 0.3s ease-in-out all;
  &:hover {
    opacity: 1;
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

export const ViewShoppingCart = styled.a`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: var(--light-blue);
  color: var(--white);
  font-size: 1.4rem;
  font-weight: 700;
  border-radius: 0.5rem;
  outline: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  opacity: 0.7;
  transition: 0.3s ease-in-out all;
  &:hover {
    opacity: 1;
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

export const MessageContainer = styled.div`
  width: 100%;
  margin: 1rem auto;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 750px) {
    width: 50%;
    margin: 0.5rem 0 0.5rem auto;
  }
  @media (min-width: 1000px) {
    width: 100%;
    margin: 0.5rem auto;
  }
`;

export const MessageIconContainer = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid var(--blue);
  border-radius: 50%;
`;

export const Message = styled.p`
  font-size: 1.2rem;
  text-align: center;
  @media (min-width: 750px) {
    font-size: 1rem;
  }
`;

export const Slide = styled.div`
  width: 4rem;
  height: 8rem;
  position: absolute;
  top: -3rem;
  left: 0;
  transform: skew(327deg, 24deg);
  background-image: linear-gradient(
    to right,
    #ffffff 0%,
    #fceabb 51%,
    #f8b500 100%
  );
  filter: blur(0.5rem);
  opacity: 0.6;
  animation: ${slide} 10s ease-in-out 0s infinite normal backwards;
`;

export const LinkWhatsApp = styled.a`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: var(--blue);
  font-size: 1.4rem;
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

export const RelatedSection = styled.section`
  width: 100%;
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  h3 {
    font-size: 1.6rem;
    text-align: center;
    margin: 1rem auto;
  }
  @media (min-width: 750px) {
    h3 {
      margin: 1rem;
    }
  }
  @media (min-width: 1000px) {
    margin: 4rem auto;
    h3 {
      font-size: 1.8rem;
      text-align: left;
    }
  }
`;
