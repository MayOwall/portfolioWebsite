import "@emotion/react";

declare global {
    interface IThemeProps {
        theme: Theme;
    }
}

declare module "@emotion/react" {
    export interface Theme {
        colors: Colors;
    }
}

interface IColors {
    white: string;
    black: string;
    lightSlateGreen: string;
    midSlateGreen: string;
    darkSlateGreen: string;
}
