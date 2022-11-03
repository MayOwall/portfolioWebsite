import { ProjectFrame, PictureFrame } from "components";
import * as S from "./GalleryWall.styles";
import plant from "public/images/plant.jpeg";
import portrait from "public/images/portrait.png";

export function GalleryWall({ ...props }) {
    return (
        <S.Container>
            <S.WooriContainer>
                <ProjectFrame
                    title="WooriMap"
                    date="2022.11.01"
                    width="28rem"
                    height="13rem"
                    direction="horizontal"
                />
            </S.WooriContainer>
            <S.TTaBongContainer>
                <ProjectFrame
                    title="TTaBong"
                    date="2022.11.01"
                    width="18rem"
                    height="25rem"
                    direction="vertical"
                />
            </S.TTaBongContainer>
            <S.PlantContainer>
                <PictureFrame
                    image={plant}
                    width="8rem"
                    height="25rem"
                    borderRadius="4rem"
                />
            </S.PlantContainer>
            <S.PortfolioContainer>
                <ProjectFrame
                    title="Portfolio Website"
                    date="2022.11.01"
                    width="20rem"
                    height="40rem"
                    direction="vertical"
                />
            </S.PortfolioContainer>
            <S.PortraitContainer>
                <PictureFrame
                    image={portrait}
                    width="10rem"
                    height="10rem"
                    borderRadius="0.5rem"
                />
            </S.PortraitContainer>
        </S.Container>
    );
}
