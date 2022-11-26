import Image from "next/image";
import { IPictureFrameProps } from "types";
import * as S from "./PictureFrame.styles";

export function PictureFrame({
    image,
    width,
    height,
    borderRadius,
    ...props
}: IPictureFrameProps) {
    return (
        <S.Container width={width} height={height} style={{ ...props }}>
            <Image
                src={image}
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: `${borderRadius}` }}
            />
        </S.Container>
    );
}
