import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0 20 76 / 70%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000000;
`;

export const ModalContainer = styled.div`
  width: 95vw;
  min-height: 30rem;
  display: grid;
  grid-template-rows: auto 1fr auto;
  border-radius: 2rem;
  background-color: var(--background);
  overflow: hidden;
  box-shadow: 4px 4px 15px 2px var(--blue);
  @media (min-width: 1200px) {
    min-width: 50rem;
    max-width: 50vw;
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const ModalFooter = styled(ModalHeader)`
  justify-content: center;
  align-items: center;
`;

export const ModalMain = styled.div`
  width: 100%;
  padding: 1rem 2rem;
`;

export const CloseButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  position: relative;
  &:after {
    content: "\\2715";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 2.5rem;
    color: var(--red);
    line-height: 2.5rem;
    text-align: center;
    transition: 0.3s ease-in-out all;
  }
  &:hover {
    &:after {
      transform: rotate(16deg);
    }
  }
`;

export const AcceptButton = styled.a`
  width: 100%;
  padding: 0.5rem;
  color: var(--blue);
  font-size: 1.6rem;
  font-weight: 500;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 0.5rem;
  background: #25d366;
  border: 0.1rem solid #25d366;
  outline: none;
  border: none;
  cursor: pointer;
  @media (min-width: 750px) {
    width: 50%;
  }
`;
