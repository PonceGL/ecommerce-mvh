import styled from "styled-components";

export const Item = styled.div`
  width: 100%;
  height: 9rem;
  padding: 0.5rem;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1rem;
  justify-items: center;
  align-items: start;
  background-color: #efefef;
  box-shadow: 2px 2px 5px 1px #dcdcdc;
  cursor: pointer;
  @media (min-width: 750px) {
    height: 10rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 0.5rem;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const ItemInfo = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 2fr 1fr;
  grid-gap: 1rem;
  justify-items: center;
  align-items: start;
`;

export const ItemText = styled.p`
  grid-column: 1 / span 2;
  grid-row: 1 / span 1;
  width: 100%;
  margin: 0.2rem 0;
  font-size: 1.6rem;
  text-align: left;
  text-transform: capitalize;
  color: var(--text);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const ItemPrice = styled(ItemText)`
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
  font-size: 1.6rem;
  font-weight: 500;
`;
export const ItemCategory = styled(ItemText)`
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  font-size: 1.2rem;
`;
