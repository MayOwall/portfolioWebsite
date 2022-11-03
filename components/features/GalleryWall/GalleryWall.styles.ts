import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const rotateImage = keyframes`
100% {
    	transform: rotateY(180deg);
      opacity: 50%;
    }
`;

export const Container = styled.div`
    position: relative;

    width: fit-content;
    min-width: 55rem;
    height: 100%;
    min-height: 40rem;

    > div {
        width: fit-content;
        height: fit-content;
        cursor: pointer;
    }
`;

export const WooriContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

export const TTaBongContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
`;

export const PlantContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 20rem;

    :hover {
        animation: ${rotateImage} 1s alternate infinite ease-in-out;
    }
`;

export const PortfolioContainer = styled.div`
    position: absolute;
    left: 30rem;
    top: 0;
`;

export const PortraitContainer = styled.div`
    position: absolute;
    left: 52rem;
    top: 0;

    filter: grayscale(100);
    transition: all ease-in 0.3s;

    :hover {
        filter: grayscale(0);
    }
`;
