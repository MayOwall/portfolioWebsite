import { PageTopper, MainNavBar, SplashCard } from "components";
import * as S from "./MainTemplate.styles";

export function MainTemplate({ ...props }) {
    return (
        <S.Container>
            <SplashCard />
            <PageTopper>
                <MainNavBar />
            </PageTopper>
            <S.Greeting>
                <div>Hello,</div>
                <div>from</div>
                <div>MayOwall</div>
            </S.Greeting>
            <S.Desc>
                FRONTEND DEVELOPER
                <br />
                PORTFOLIO WEBSITE
            </S.Desc>
        </S.Container>
    );
}
