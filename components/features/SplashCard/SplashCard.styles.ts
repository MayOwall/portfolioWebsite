import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    color: white;

    z-index: 1000;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
    padding: 5rem;
`;

export const Desc = styled.div`
    font-size: 0.75rem;
    font-weight: 200;
    text-align: center;
`;

export const Name = styled.div`
    font-size: 10rem;
    font-weight: 900;
    text-align: center;
`;
