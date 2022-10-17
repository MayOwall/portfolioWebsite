import * as S from "./PageTopper.styles";
import { IPageTopperProps } from "types";
export function PageTopper({ children, ...props }: IPageTopperProps) {
    return (
        <S.Container>
            <S.Line />
            <S.ChildrenContainer>{children}</S.ChildrenContainer>
        </S.Container>
    );
}
