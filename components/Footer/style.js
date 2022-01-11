import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  padding: 2rem 1rem;
  background-color: var(--gray);
  color: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 750px) {
    padding: 3rem 2rem;
    margin: 0;
  }
  @media print {
    display: none;
  }
`;

export const LinksSyled = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, min-content);
  grid-gap: 1rem;
  @media (min-width: 750px) {
    width: 80%;
  }
`;

export const LinkGroups = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const GroupTitle = styled.h5`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--light-blue);
`;

export const Li = styled.li`
  margin: 0.5rem 0;
`;

export const Anchor = styled.a`
  padding: 0.5rem 0;
  color: var(--background);
  cursor: pointer;
  opacity: 0.8;
  transition: 0.3s ease-in-out all;
  &:hover {
    color: var(--yellow);
    opacity: 1;
  }
`;

export const UlIcons = styled.ul`
  width: 100%;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0.5rem;
  justify-items: center;
  align-content: center;
`;

export const AnchorIcon = styled.a`
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-blue);
  border-radius: 50%;
  cursor: pointer;
  svg {
    transition: 0.3s ease-in-out all;
    fill: var(--white);
    opacity: 0.8;
  }
  &:hover {
    background: none;
    svg {
      transition: 0.3s ease-in-out all;
      fill: var(--light-blue);
      opacity: 1;
    }
  }
`;

export const PaymentMethods = styled.section`
  width: 100%;
  margin: 2rem 0;
  @media (min-width: 750px) {
    width: 80%;
  }
`;

export const PaymentMethodsImageContainer = styled.div`
  width: 70%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  img {
    width: 100%;
    object-fit: contain;
  }
  @media (min-width: 750px) {
    width: 40%;
    margin: 1rem 1rem auto 1rem;
  }
  @media (min-width: 1000px) {
    width: 20%;
  }
`;

export const AllRightsReserved = styled.p`
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  color: var(--background);
`;

// export const FiservText = styled.p`
//   font-family: "Archivo Narrow", sans-serif;
//   font-size: 2rem;
//   color: #ff5600;
// `;
