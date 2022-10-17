import { Global, css } from "@emotion/react";
import { reset } from "./reset";
import theme from "./theme";

const globalStyles = css`
    ${reset}
    html, body {
        overflow: hidden;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
