import Image from "next/image";
import * as S from "./PageFooter.styles";
import arrow from "public/images/arrow.svg";

export function PageFooter({ ...props }) {
    return (
        <S.Container style={{ ...props }}>
            <S.Line />
            <S.TopContainer
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                <Image src={arrow} width="12" height="12" alt="top" />
                <div>top</div>
            </S.TopContainer>
        </S.Container>
    );
}
