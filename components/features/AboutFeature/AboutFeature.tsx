import { AboutAtom } from "components";
import * as S from "./AboutFeature.styles";
import { IAboutFeatureProps } from "types";

export function AboutFeature({
    title,
    contentList,
    ...props
}: IAboutFeatureProps) {
    return (
        <S.Container style={{ ...props }}>
            <S.Title>{title}</S.Title>
            <S.AboutAtomContainer>
                {contentList.map(({ title, content, date, isSkill }, idx) => (
                    <AboutAtom
                        key={idx}
                        title={title}
                        content={content}
                        date={date}
                        isSkill={isSkill}
                    />
                ))}
            </S.AboutAtomContainer>
        </S.Container>
    );
}
