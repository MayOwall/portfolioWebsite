import Image from "next/image";
import * as S from "./AboutOvalFrame.styles";
import plant from "public/images/plant.jpeg";

export function AboutOvalFrame({ ...props }) {
    return (
        <S.Container style={{ ...props }}>
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
