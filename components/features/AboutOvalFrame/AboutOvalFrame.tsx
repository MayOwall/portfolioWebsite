import Image from "next/image";
import * as S from "./AboutOvalFrame.styles";
import plant from "public/images/plant.jpeg";
import { IAboutOvalFrameProps } from "types";

export function AboutOvalFrame({ image, ...props }: IAboutOvalFrameProps) {
    return (
        <S.Container>
            <S.Frame />
            <S.Frame />
            <S.Frame>
                <Image
                    src={plant}
                    layout="fill"
                    style={{ borderRadius: "50%" }}
                />
            </S.Frame>
        </S.Container>
    );
}
