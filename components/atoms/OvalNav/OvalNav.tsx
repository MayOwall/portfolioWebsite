import Link from "next/link";
import * as S from "./OvalNav.styles";

interface IOvalNavProps {
    content: string;
    link: string;
}

export function OvalNav({ content, link, ...props }: IOvalNavProps) {
    return (
        <Link href={link}>
            <S.Container>
                <S.ContentContainer>{content}</S.ContentContainer>
            </S.Container>
        </Link>
    );
}
