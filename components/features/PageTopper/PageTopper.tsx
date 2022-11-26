import Image from "next/image";
import * as S from "./PageTopper.styles";
import { IPageTopperProps } from "types";
import arrow from "public/images/arrow.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

export function PageTopper({ children, ...props }: IPageTopperProps) {
    const [isMain, setIsMain] = useState(true);
    useEffect(() => {
        const path = window.location.pathname;
        if (path !== "/") setIsMain(() => false);
    }, []);

    return (
        <S.Container>
            <S.Line />
            {!isMain ? (
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
            ) : null}
            <S.ChildrenContainer>{children}</S.ChildrenContainer>
        </S.Container>
    );
}
