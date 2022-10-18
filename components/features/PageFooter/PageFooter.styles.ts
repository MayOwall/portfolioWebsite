import styled from "@emotion/styled";

export const Container = styled.div`
    color: ${({ theme }) => theme.colors.darkSlateGreen};
`;

export const Line = styled.div`
    width: 100%;
    height: 1.5rem;
    border-top: 1px solid;
`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: right;
    align-items: flex-end;
    gap: 0.3rem;

    margin-right: 0.5rem;

    opacity: 50%;
    cursor: pointer;
    transition: all 0.3s ease-in;

    :hover {
        opacity: 100%;
    }
`;
