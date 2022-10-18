import { OvalNav } from "components";
import * as S from "./MainNavBar.styles";

export function MainNavBar({ ...props }) {
    return (
        <S.Container style={{ ...props }}>
            <OvalNav content="ABOUT ME" link="/aboutme" />
            <OvalNav content="PORTFOLIO" link="/portfolio" />
            <OvalNav content="GUEST BOOK" link="/guestbook" />
        </S.Container>
    );
}
