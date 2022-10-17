import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 4rem;

    border: 1px solid;
    border-radius: 50%;

    color: ${({ theme }) => theme.colors.darkSlateGreen};

    transition: all ease-in 0.3s;

    :hover {
        background-color: ${({ theme }) => theme.colors.darkSlateGreen};
        color: ${({ theme }) => theme.colors.white};
        opacity: 70%;
    }
`;

export const ContentContainer = styled.div`
    padding-top: 0.2rem;
    color: inherit;
`;
