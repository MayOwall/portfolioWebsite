import { PageTopper, OvalNav } from "components";
import * as S from "./GuestBookTemplate.styles";

export function GuestBookTemplate({ ...props }) {
    return (
        <S.Background>
            <S.Container>
                <PageTopper>
                    <OvalNav content="GUESTBOOK" link="/guestbook" />
                </PageTopper>
                <S.Main>
                    <div>서비스 준비중입니다 ∠( ᐛ 」∠)＿</div>
                </S.Main>
            </S.Container>
        </S.Background>
    );
}
