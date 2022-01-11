import styled from "styled-components";

export const ProfileData = styled.section`
  width: 100%;
  padding: 1rem;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  @media (min-width: 750px) {
    width: 90%;
    margin: 2rem auto;
  }
`;

export const ImageContainer = styled.div`
  width: 5rem;
  height: 5rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--blue);
  border-radius: 50%;
  border: 0.2rem solid var(--blue);
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Unnamed = styled.p`
  font-size: 4rem;
  text-align: center;
  color: var(--white);
  opacity: 0.5;
`;

export const LogoutButton = styled.button`
  padding: 0.2rem;
  background-color: var(--red);
  color: var(--white);
  font-size: 0.8rem;
  border: 0.1rem solid transparent;
  outline: none;
  border-radius: 0.5rem;
  cursor: pointer;
  opacity: 0.5;
  transition: 0.3s ease-in-out all;
  &:hover {
    opacity: 0.9;
    border: 0.1rem solid red;
  }
`;

export const EmailText = styled.p`
  font-size: 1rem;
`;
