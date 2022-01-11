import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Conatiner = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.hidden &&
    `
    display: block;
    width: 1.5rem;
    height: 1.5rem;
  `}
`;

export const Cricle = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid
    ${(props) => (props.bg ? `rgb(255 201 71 / 50%)` : `var(--blue)`)};
  border-top: 0.1rem solid transparent;
  border-left: 0.1rem solid transparent;
  border-radius: 50%;
  animation: ${rotation} 1.5s ease-in-out 0s infinite alternate forwards;
`;
