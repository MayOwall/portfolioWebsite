import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const secondAnimation = keyframes`
    0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(0);
  }
  55% {
    transform: translateX(3rem);
  }
  75% {
    transform: translateX(3rem);
  }
  100% {
    transform: translateX(0);
  }
`;

const thirdAnimation = keyframes`
    0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(6rem);
  }
  70% {
    transform: translateX(6rem);
  }
  100% {
    transform: translateX(0);
  }
`;

export const Container = styled.div`
    display: flex;
    opacity: 80%;

    > div:nth-of-type(2) {
        position: relative;
        right: 15.5rem;
        z-index: 10;
        animation: 6s ease-in-out ${secondAnimation} infinite alternate forwards;
    }
    > div:last-of-type {
        position: relative;
        right: 31rem;
        z-index: 9;
        animation: 6s ease-in-out ${thirdAnimation} infinite alternate forwards;
    }
`;

export const Frame = styled.div`
    width: 15.5rem;
    height: 21.5rem;
    border-radius: 50%;
    z-index: 11;

    border: 1px solid ${({ theme }) => theme.colors.darkSlateGreen};
`;
