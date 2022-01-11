import styled, { keyframes } from "styled-components";

const slide = keyframes`
   0% {
    transform: translateX(-90%);
  }

  100% {
    transform: translateX(150%);
  }
`;

export const Container = styled.div`
  width: 50%;
  height: 100%;
  min-height: 1.4rem;
  max-height: 2rem;
  margin-right: auto;
  overflow: hidden;
  position: relative;
`;

export const Element = styled.div`
  width: 10rem;
  height: 10rem;
  background-image: linear-gradient(to right, #accbee 0%, #e7f0fd 100%);
  animation: ${slide} 2s ease-in-out 0s infinite alternate-reverse forwards;
  opacity: 0.5;
`;
