import styled from "@emotion/styled";

export const Container = styled.main`
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    padding: 2rem 2rem;

    color: ${({ theme }) => theme.colors.darkSlateGreen};
`;

export const Greeting = styled.div`
    position: absolute;
    left: 2rem;
    bottom: 3rem;

    font-size: 8rem;
    font-weight: 900;

    > div:nth-of-type(2) {
        font-size: 6rem;
        color: white;
        -webkit-text-stroke: 1px ${({ theme }) => theme.colors.darkSlateGreen};
    }
`;

export const Desc = styled.div`
    position: absolute;
    right: 4rem;
    bottom: 2rem;

    font-weight: 200;
    text-align: right;

    transform: rotate(90deg);
    transform-origin: 100% 50%;
`;
