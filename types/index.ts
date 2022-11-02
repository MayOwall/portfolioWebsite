export interface IColors {
    white: string;
    black: string;
    lightSlateGreen: string;
    midSlateGreen: string;
    darkSlateGreen: string;
}
export interface IPictureFrameProps {
    image: string;
    width: string;
    height: string;
    borderRadius: number | string;
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

export interface IProjectFrameProps {
    title: string;
    date: string;
    width: string;
    height: string;
    direction: "vertical" | "horizontal";
}
