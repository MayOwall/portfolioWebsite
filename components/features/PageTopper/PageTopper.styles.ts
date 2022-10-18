import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    position: relative;
    gap: 6rem;
    width: 100%;
`;

export const Line = styled.div`
    flex-grow: 1;
    width: 1rem;
    margin-top: 0.5rem;
    border-top: 1px solid ${({ theme }) => theme.colors.darkSlateGreen};
`;

export const GoMain = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 0.3rem;
    position: absolute;
    top: 2rem;
    left: 0;

    color: ${({ theme }) => theme.colors.darkSlateGreen};
    opacity: 50%;
    transition: all 0.3s ease-in;
    cursor: pointer;

    :hover {
        opacity: 100%;
    }
`;
export const ChildrenContainer = styled.div`
    flex-shrink: 0;
`;
