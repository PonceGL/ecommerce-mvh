import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 10rem;
  max-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CirlceLeft = styled.div`
  width: 85%;
  height: 85%;
  border-radius: 50%;
  background-color: #ffffff;
  position: absolute;
  z-index: 2;
`;

export const CirlceRight = styled(CirlceLeft)`
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);

  animation: ${rotation} 1s ease-in-out 0s infinite alternate forwards;
  z-index: 1;
`;
