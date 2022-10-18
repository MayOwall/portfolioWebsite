import styled from "@emotion/styled";

export const Container = styled.div``;

export const Title = styled.h2`
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.colors.darkSlateGreen};

    font-size: 2rem;
    font-weight: 900;
`;

export const AboutAtomContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding-left: 2rem;
    border-left: 1px solid ${({ theme }) => theme.colors.lightSlateGreen};
`;
