import styled from "styled-components";

// SubMenu -------------

export const ConatinerSubMenu = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 4rem 1rem 8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--background);
  position: absolute;
  top: 0;
  left: ${(props) => (props.show ? "0" : "200%")};
  ${(props) => !props.mainmenu && "left: 200%"};
  ${(props) => props.show && `box-shadow: 0.5rem 0.5rem 1rem 0.5rem #434343;`}
  z-index: 1000;
  transition: 0.3s ease-in-out all;
  @media (min-width: 1000px) {
    display: none;
    width: fit-content;
    min-width: 100%;
    height: 0;
    padding: 0;
    top: 100%;
    left: 0;
    box-shadow: 0.5rem 0.5rem 1rem 0.1rem #434343;
  }
`;

export const CatName = styled.p`
  width: 100%;
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: 500;
  color: var(--blue);
  text-align: center;
  @media (min-width: 1000px) {
    display: none;
  }
`;

export const UlStyled = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  transition: 0.3s ease-in-out all;

  @media (min-width: 750px) {
    width: 60%;
    min-height: 100%;
    margin-top: 2rem;
    padding: 1rem;
    justify-content: space-between;
    background-color: var(--background);
    border-radius: 2rem;
    ${(props) =>
      props.columns > 1 &&
      `
        width: 80%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
    `}
  }

  @media (min-width: 1000px) {
    width: 100%;
    min-width: fit-content;
    height: 100%;
    max-height: 80vh;
    margin-top: 0;
    grid-template-columns: ${(props) =>
      props.columns && `repeat(${props.columns}, 1fr)`};
  }
`;

export const CloseButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  top: 2rem;
  left: 2rem;
  &:after {
    content: "\\2190";

    font-size: 2rem;
    color: var(--blue);
    text-align: center;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;

export const SubLiStyled = styled.li`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1000px) {
    margin: 0;
    justify-content: center;
    overflow: visible;
  }
`;

export const SubAnchorStyled = styled.a`
  width: 100%;
  height: 100%;
  padding: 1rem;
  margin-left: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 400;
  text-transform: capitalize;
  color: var(--blue);
  background: none;
  cursor: pointer;
  transition: 0.3s ease-in-out all;
  @media (min-width: 1000px) {
    margin: 0;
    padding: 0.5rem 1rem;
    color: var(--blue);
    white-space: nowrap;
    font-size: 1.4rem;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
`;

// Main Menu

export const LineLink = styled.div`
  display: none;
  width: 0;
  height: 0.1rem;
  background-color: var(--blue);
  position: absolute;
  bottom: 0;
  left: 0;
  transition: 0.3s ease-in-out all;
  @media (min-width: 1000px) {
    display: block;
    background-color: var(--yellow);
  }
`;

export const AnchorStyled = styled.a`
  width: 100%;
  height: 100%;
  padding: 1rem 0 1rem 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  font-weight: 400;
  text-transform: capitalize;
  color: var(--blue);
  background: none;
  cursor: pointer;
  transition: 0.3s ease-in-out all;
  @media (min-width: 1000px) {
    width: 100%;
    padding: 0.5rem 1rem;
    color: var(--background);
    white-space: nowrap;
    font-size: 1.4rem;
    justify-content: center;
  }
`;

export const LiStyled = styled.li`
  width: 100%;
  height: 4rem;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 9fr 1fr;
  grid-gap: 0.5rem;
  justify-content: center;
  align-items: center;
  &:hover {
    ${LineLink} {
      width: 90%;
    }
  }
  @media (min-width: 1000px) {
    margin: 0.2rem 0;
    grid-template-columns: 1fr;
    grid-gap: 0;
    position: relative;
    &:hover {
      ${ConatinerSubMenu} {
        display: flex;
        height: auto;
        min-height: 20vh;
      }
      ${AnchorStyled} {
        color: var(--yellow);
      }
    }
    &:last-child {
      div ul li a {
        white-space: normal;
      }
    }
  }
`;

export const ButtonSub = styled.button`
  width: 100%;
  height: 100%;
  color: var(--blue);
  font-size: 1.8rem;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  @media (min-width: 1000px) {
    display: none;
  }
`;

export const SocialIconsConatiner = styled.li`
  width: 60%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1000px) {
    width: 10%;
    height: fit-content;
    flex-direction: row;
    right: 7%;
    top: -6.5rem;
  }
`;

export const LinkIcon = styled.a`
  width: 3.5rem;
  height: 3.5rem;
  padding: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.bg ? `${props.bg}` : "var(--yellow)")};
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s ease-in-out all;
  svg {
    transition: 0.3s ease-in-out all;
    fill: var(--background);
  }
  @media (min-width: 1000px) {
    width: 3.5rem;
    height: 3.5rem;
    background: transparent;
    svg {
      fill: var(--blue);
    }
    &:hover {
      background: ${(props) => (props.bg ? `${props.bg}` : "var(--blue)")};
      svg {
        fill: var(--background);
      }
    }
  }
`;
