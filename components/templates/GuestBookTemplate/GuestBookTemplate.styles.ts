import styled from "@emotion/styled";

export const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 80rem;
    height: 100%;
    padding: 2rem 5rem;
`;

export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1rem;
    flex-grow: 1;

    > div {
        font-size: 0.8rem;
        color: ${({ theme }) => theme.colors.lightSlateGreen};
    }
`;
