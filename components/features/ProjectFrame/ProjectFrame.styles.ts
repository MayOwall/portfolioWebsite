import styled from "@emotion/styled";

interface IContainerProps {
    width: string;
    height: string;
}

export const Container = styled.div<IContainerProps>`
    position: relative;
    width: ${({ width }) => width};
    min-width: fit-content;
    height: ${({ height }) => height};
    min-height: fit-content;
    padding: 1rem;

    border: 1px solid;
    border-radius: 0.5rem;

    color: ${({ theme }) => theme.colors.darkSlateGreen};

    > div {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 0.4rem;
        background-color: ${({ theme }) => theme.colors.darkSlateGreen};
        transition: 0.3s ease-in-out all;
        z-index: -1;
    }

    :hover > h2 {
        -webkit-text-stroke: none;
    }
    :hover > div {
        width: 100%;
        height: 100%;
    }
`;

export const Title = styled.h2`
    font-size: 3rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.white};
    -webkit-text-stroke: 1px ${({ theme }) => theme.colors.darkSlateGreen};

    z-index: 1000;
    transition: 0.2s ease-in all;
`;

export const Date = styled.p`
    margin-top: 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
`;

export const BackgroundV = styled.div`
    width: 100%;
    height: 0;
`;

export const BackgroundH = styled.div`
    width: 0;
    height: 100%;
`;
