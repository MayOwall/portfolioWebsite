import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;
    padding: 5rem;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    margin: 5rem 0;
    color: ${({ theme }) => theme.colors.darkSlateGreen};
`;

export const NickName = styled.div`
    color: inherit;
    font-size: 4rem;
    font-weight: 900;
`;

export const OriginName = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.6rem;
    font-weight: 900;
    -webkit-text-stroke: 1px ${({ theme }) => theme.colors.darkSlateGreen};
`;

export const Desc1 = styled.p`
    width: 70%;

    margin: 7rem 0 2rem 0;
    text-align: center;
    line-height: 1.5rem;
`;

export const Divider = styled.div`
    width: 1px;
    height: 4rem;
    border-left: 1px solid ${({ theme }) => theme.colors.lightSlateGreen};
    opacity: 70%;
`;

export const Desc2 = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    margin: 2rem 0;
    letter-spacing: 0.1rem;

    > li {
        list-style-type: circle;
        color: ${({ theme }) => theme.colors.lightSlateGreen};
    }
`;

export const AboutFeatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10rem;
    position: relative;

    width: 90%;
    margin: 20rem 0 15rem;
`;

export const AboutOvalFrameContainer = styled.div`
    position: absolute;
    top: -5rem;
    right: -20rem;
`;
