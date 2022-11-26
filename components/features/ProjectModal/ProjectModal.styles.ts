import styled from "@emotion/styled";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
    z-index: 3000;

    background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
    position: relative;
    width: 45rem;
    height: 36rem;
    padding: 4rem 5rem 4rem 3rem;
    z-index: 4000;

    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 1rem;
`;

export const DeleteButtonContainer = styled.div`
    position: absolute;
    top: 4rem;
    right: 3rem;

    width: 1rem;
    height: 1rem;
    opacity: 50%;
    transition: 0.2s ease-in all;

    :hover {
        opacity: 100%;
    }
`;

export const ModalContent = styled.div`
    display: flex;
    gap: 7rem;

    width: 100%;
    height: 100%;
    padding-top: 1rem;

    border-top: 1.5px solid;
    color: ${({ theme }) => theme.colors.darkSlateGreen};
`;

export const ContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-shrink: 0;
    position: relative;

    width: 10rem;
    height: 100%;
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 900;
`;
export const Date = styled.p`
    margin-bottom: 1rem;
    font-size: 0.7rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.lightSlateGreen};
    word-break: keep-all;
`;

export const Repo = styled.div`
    font-size: 0.9rem;
    font-weight: 900;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.darkSlateGreen};
    cursor: pointer;
    opacity: 70%;
    transition: 0.2s ease-in all;

    :hover {
        opacity: 100%;
    }
`;

export const Team = styled.p`
    font-size: 0.7rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.midSlateGreen};
    word-break: keep-all;
`;
export const ContentRight = styled.div`
    flex-grow: 1;
    width: 10rem;
    height: 100%;
    font-family: sans-serif;
    line-height: 1rem;
    overflow: auto;

    div {
        font-size: 0.8rem;
        font-weight: 300;
    }

    h4 {
        display: block;
        margin: 0.3rem 0;
        font-weight: 700;
    }
`;
export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 10rem;
    margin-bottom: 2rem;
`;
