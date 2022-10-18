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

export interface IAboutFeatureProps {
    title: string;
    contentList: IAboutAtomProps[];
}

export interface IAboutOvalFrameProps {
    image: string | ImageData;
}
