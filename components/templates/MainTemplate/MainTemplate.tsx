import { useState, useEffect } from "react";
import { PageTopper, MainNavBar, SplashCard } from "components";
import * as S from "./MainTemplate.styles";

export function MainTemplate({ ...props }) {
    const [isSplashCardVisible, setSplashCardVisible] = useState(false);

    useEffect(() => {
        const splashCardDate = Number(
            window.localStorage.getItem("splashCardDate")
        );

        if (!splashCardDate) {
            setSplashCardVisible(true);
            window.localStorage.setItem(
                "splashCardDate",
                String(Date.now() + 600000)
            );
        } else {
            const current = Date.now();
            if (current > splashCardDate) {
                setSplashCardVisible(true);
                window.localStorage.setItem(
                    "splashCardDate",
                    String(Date.now() + 600000)
                );
            }
        }
    }, []);
    return (
        <S.Container>
            {isSplashCardVisible ? <SplashCard /> : null}
            <PageTopper>
                <MainNavBar />
            </PageTopper>
            <S.Greeting>
                <div>Hello,</div>
                <div>this is</div>
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
