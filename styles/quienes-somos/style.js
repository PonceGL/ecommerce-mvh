import styled from "styled-components";

export const MainStiled = styled.main`
  width: 100%;
  padding: 1rem;
  margin: 1rem 0 2rem;
  margin-top: 4.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 750px) {
    width: 90%;
    margin: 1rem auto;
    margin-top: 8rem;
  }
  @media (min-width: 1200px) {
    width: 80%;
    margin-top: 19rem;
    ul {
      width: 90%;
      margin: 0 auto;
    }
  }
`;

export const MainTitle = styled.h1`
  width: 100%;
  margin: 1rem auto;
  font-size: 2rem;
  color: var(--light-blue);
  @media (min-width: 1200px) {
    width: 90%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 18rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  aspect-ratio: 16 / 9;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 750px) {
    width: 100%;
    height: 30rem;
    border-radius: 2rem;
  }
  @media (min-width: 1200px) {
    width: 90%;
    height: 40rem;
  }
`;

export const ImageCrop = styled.div`
  width: 100%;
`;

export const Paragraph = styled.p`
  width: 100%;
  margin: 1rem auto;
  @media (min-width: 1200px) {
    width: 90%;
  }
`;

export const Strong = styled.strong`
  font-weight: 500;
`;

export const ListItem = styled.li`
  margin: 0.5rem 0 0 1rem;
`;
