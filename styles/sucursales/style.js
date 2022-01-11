import styled from "styled-components";

export const Title = styled.h1`
  margin: 1rem auto;
  font-size: 2rem;
  text-align: center;
  color: var(--light-blue);
`;

export const Conatiner = styled.section`
  width: 100%;
  padding: 1rem;
  @media (min-width: 750px) {
    width: 80%;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem 4rem;
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const Branch = styled.div`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 2px 2px 5px 1px #dcdcdc;
  transition: 0.3s ease-in-out all;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  /* @media (min-width: 750px) {
    img {
      object-fit: cover;
    }
  } */
`;

export const Name = styled.h3`
  margin: 1rem auto;
  font-size: 1.6rem;
  text-align: center;
  color: var(--light-blue);
`;

export const HoursContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  span {
    font-size: 1.5;
    font-weight: 700;
  }
`;

export const ContactContainer = styled(HoursContainer)``;

export const Address = styled.p`
  margin: 0.5rem auto;
  text-align: center;
`;

export const PhoneContainer = styled.div`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--light-blue);
    cursor: pointer;
  }
`;

export const ExtensionsContainer = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p:last-child {
    margin-left: 0.5rem;
    color: var(--light-blue);
  }
`;

export const Email = styled.p`
  width: 100%;
  margin: 1rem auto;
  text-align: center;
`;

export const LinkToMap = styled.a`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  text-align: center;
  font-weight: 500;
  color: var(--white);
  background-color: var(--light-blue);
  border-radius: 0.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.3s ease-in-out all;
  &:hover {
    opacity: 1;
  }
`;
