import React, { useState } from "react";
import { ProjectModal } from "components";
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
        handleModalVisible(() => true);
    };

    const handleModalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleModalVisible(() => false);
    };

    return (
        <>
            <div>
                {isModalVisible ? (
                    <div style={{ zIndex: 1000 }}>
                        <ProjectModal
                            dataTitle={title}
                            onDeleteClick={handleModalClick}
                        />
                    </div>
                ) : null}
            </div>
            <S.Container
                width={width}
                height={height}
                style={{ ...props }}
                onClick={handleClick}
            >
                <S.Title>{title}</S.Title>
                <S.Date>{date}</S.Date>
                {direction === "vertical" ? (
                    <S.BackgroundV />
                ) : (
                    <S.BackgroundH />
                )}
            </S.Container>
        </>
    );
}
