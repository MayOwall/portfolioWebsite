import Link from "next/link";
import Image from "next/image";
import projectData from "public/projectData";
import deleteButton from "public/images/deleteButton.svg";
import { IProjectModalProps } from "types";
import * as S from "./ProjectModal.styles";

export function ProjectModal({ dataTitle, onClick }: IProjectModalProps) {
    const { title, date, team, repo, image, desc } = projectData[dataTitle];

    return (
        <S.Container>
            <S.ModalContainer>
                <S.DeleteButtonContainer onClick={onClick}>
                    <Image src={deleteButton} layout="fill" />
                </S.DeleteButtonContainer>
                <S.ModalContent>
                    <S.ContentLeft>
                        <S.Title>{title}</S.Title>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem",
                            }}
                        >
                            <S.Team>{team}</S.Team>
                            <S.Date>{date}</S.Date>
                            <Link href={repo}>
                                <S.Repo>깃허브 레포지토리 링크</S.Repo>
                            </Link>
                        </div>
                    </S.ContentLeft>
                    <S.ContentRight>
                        <S.ImageContainer>
                            <Image
                                src={image}
                                layout="fill"
                                alt={title}
                                objectFit="cover"
                                style={{ borderRadius: "1rem" }}
                            />
                        </S.ImageContainer>
                        <div dangerouslySetInnerHTML={{ __html: desc }} />
                    </S.ContentRight>
                </S.ModalContent>
            </S.ModalContainer>
        </S.Container>
    );
}
