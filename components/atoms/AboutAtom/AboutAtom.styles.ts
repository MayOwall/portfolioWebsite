import styled from "@emotion/styled";

interface IContentProps {
    isSkill: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const TitleContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: flex-end;
`;

export const Title = styled.div`
    color: ${({ theme }) => theme.colors.midSlateGreen};
    font-size: 1.5rem;
    font-weight: 700;
`;

export const Date = styled.div`
    color: ${({ theme }) => theme.colors.lightSlateGreen};
`;

export const Content = styled.div<IContentProps>`
    font-size: ${({ isSkill }) => (isSkill ? "1.5rem" : "1rem")};
    line-height: 1.2rem;
`;
