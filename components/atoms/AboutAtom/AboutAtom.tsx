import * as S from "./AboutAtom.styles";
import { IAboutAtomProps } from "types";

export function AboutAtom({
    title,
    content,
    date,
    isSkill,
    ...props
}: IAboutAtomProps) {
    return (
        <S.Container style={{ ...props }}>
            <S.TitleContainer>
                <S.Title>{title}</S.Title>
                <S.Date>{date}</S.Date>
            </S.TitleContainer>
            <S.Content
                isSkill={isSkill}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </S.Container>
    );
}
