import { PageTopper, OvalNav, GalleryWall } from "components";
import * as S from "./ProjectTemplate.styles";

export function ProjectTemplate({ ...props }) {
    return (
        <S.Background>
            <S.Container>
                <PageTopper>
                    <OvalNav content="PROJECT" link="/project" />
                </PageTopper>
                <GalleryWall />
            </S.Container>
        </S.Background>
    );
}
