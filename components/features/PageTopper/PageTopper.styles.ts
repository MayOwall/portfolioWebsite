import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    gap: 6rem;
    width: 100%;
`;

export const Line = styled.div`
    flex-grow: 1;
    width: 1rem;
    margin-top: 0.5rem;
    border-top: 1px solid ${({ theme }) => theme.colors.darkSlateGreen};
`;

export const ChildrenContainer = styled.div`
    flex-shrink: 0;
`;
