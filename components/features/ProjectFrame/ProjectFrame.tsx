import { useState } from "react";
import { IProjectFrameProps } from "types";
import * as S from "./ProjectFrame.styles";

export function ProjectFrame({
    title,
    date,
    width,
    height,
    direction,
    ...props
}: IProjectFrameProps) {
    const [isModalVisible, handleModalVisible] = useState(false);

    const handleClick = () => {
        handleModalVisible(true);
        console.log("is Clicked", isModalVisible);
    };

    return (
        <S.Container
            width={width}
            height={height}
            style={{ ...props }}
            onClick={handleClick}
        >
            <S.Title>{title}</S.Title>
            <S.Date>{date}</S.Date>
            {direction === "vertical" ? <S.BackgroundV /> : <S.BackgroundH />}
            {/* 모달 컴포넌트 자리 */}
        </S.Container>
    );
}
