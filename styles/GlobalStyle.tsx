import { Global, css } from "@emotion/react";
import { reset } from "./reset";
import theme from "./theme";

const globalStyles = css`
    ${reset}
    html, body {
        padding: 0;
        margin: 0;
        max-width: 1028px;
        font-family: "Noto Serif KR", serif;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
    }
`;

export default function GlobalStyle() {
    return <Global styles={globalStyles} />;
}
