import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const circleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  5% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(3);
  }
  65% {
    transform: scale(3);
  }
  70% {
    transform: scale(2.8);
  }
  100% {
    transform: scale(50);
  }
`;

const percentAnimation = keyframes`
    0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.6);
    opacity: 100%;
  }
  70% {
    transform: scale(0.6);
    opacity: 0%;
  }
`;

export const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 3rem;
    height: 3rem;

    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.darkSlateGreen};

    animation: 6s ease-in-out ${circleAnimation};
    animation-fill-mode: forwards;
`;

export const Percentage = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.5rem;

    animation: 6s ease-in-out ${percentAnimation};
    animation-fill-mode: forwards;
`;
