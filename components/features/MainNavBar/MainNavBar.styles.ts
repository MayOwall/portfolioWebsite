import styled from "@emotion/styled";

export const Container = styled.nav`
    display: flex;
    flex-direction: column;

    > div:nth-of-type(2) {
        position: relative;
        top: -0.8rem;
    }

    > div:last-of-type {
        position: relative;
        top: -1.6rem;
    }
`;
