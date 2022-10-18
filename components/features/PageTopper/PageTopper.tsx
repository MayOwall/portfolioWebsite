import Image from "next/image";
import * as S from "./PageTopper.styles";
import { IPageTopperProps } from "types";
import arrow from "public/images/arrow.svg";
import Link from "next/link";

export function PageTopper({ children, ...props }: IPageTopperProps) {
    return (
        <S.Container>
            <S.Line />
            <Link href="/">
                <S.GoMain>
                    <Image
                        src={arrow}
                        width="12"
                        height="12"
                        style={{ transform: "rotate(-90deg)" }}
                        alt="go main"
                    />
                    <div>go back to main</div>
                </S.GoMain>
            </Link>
            <S.ChildrenContainer>{children}</S.ChildrenContainer>
        </S.Container>
    );
}
