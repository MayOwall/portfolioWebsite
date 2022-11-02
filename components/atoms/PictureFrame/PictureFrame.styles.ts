import styled from "@emotion/styled";

interface IContainerProps {
    width: string;
    height: string;
}

export const Container = styled.div<IContainerProps>`
    position: relative;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
`;
