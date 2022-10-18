import { LoadingCircle } from "components/atoms/LoadingCircle";
import * as S from "./SplashCard.styles";
import { useState, useEffect } from "react";

export function SplashCard({ ...props }) {
    const [isCardVisible, setCardVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => setCardVisible(false), 10000);
    }, []);

    return (
        <S.Container style={{ display: `${isCardVisible ? "flex" : "none"}` }}>
            <LoadingCircle />
            <S.TextContainer>
                <S.Desc>
                    FRONTEND DEVELOPER <br />
                    Portfolio Website
                </S.Desc>
                <S.Name>MayOwall</S.Name>
            </S.TextContainer>
        </S.Container>
    );
}
