export interface IColors {
    white: string;
    black: string;
    lightSlateGreen: string;
    midSlateGreen: string;
    darkSlateGreen: string;
}

export interface IPageTopperProps {
    children: JSX.Element;
}

export interface IAboutAtomProps {
    title: string;
    content: string;
    date?: string;
    isSkill: boolean;
}
