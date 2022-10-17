import { OvalNav } from "components";
import * as S from "./MainNavBar.styles";

export function MainNavBar({ ...props }) {
    return (
        <S.Container style={{ ...props }}>
            <OvalNav content="ABOUT ME" link="#" />
            <OvalNav content="PORTFOLIO" link="#" />
            <OvalNav content="GUEST BOOK" link="#" />
        </S.Container>
    );
}
