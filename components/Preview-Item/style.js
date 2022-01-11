import styled from "styled-components";

export const Item = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 9fr 1fr;
  grid-gap: 0.5rem;
  justify-items: center;
  align-items: center;
  background-color: #efefef;
  box-shadow: 2px 2px 5px 1px #dcdcdc;
  transition: 0.3s ease-in-out all;
  &:hover {
    box-shadow: 0.5rem 0.5rem 1rem 0.1rem #979797;
  }
`;

export const ItemLink = styled.a`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 1fr;
  grid-gap: 0.5rem;
  cursor: pointer;
  @media (min-width: 1400px) {
    grid-template-rows: 5fr 1fr;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  aspect-ratio: 1 / 1;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
`;

export const ItemInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ItemText = styled.p`
  width: 100%;
  font-size: 1.4rem;
  text-align: left;
  text-transform: capitalize;
  color: var(--blue);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const CategoryAndIconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemPrice = styled(ItemText)`
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 0.4rem;
`;

export const IconContainer = styled.button`
  width: 1.6rem;
  height: 1.6rem;
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
    transform: rotate(-10deg);
  }
  @media (min-width: 750px) {
    width: 1.8rem;
    height: 1.8rem;
  }
  @media (min-width: 1000px) {
    opacity: 0.6;
    width: 1.8rem;
    height: 1.8rem;
    margin: 0.5rem;
    margin-left: auto;
  }
`;

export const Categoryes = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Categorie = styled(ItemText)`
  font-size: 0.9rem;
  font-weight: 500;
  &:nth-child(2) {
    margin-top: 0.5rem;
  }
`;
