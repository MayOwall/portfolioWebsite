import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AboutAtom } from "./AboutAtom";

export default {
    title: "Components/Atoms/AboutAtom",
    component: AboutAtom,
    argTypes: {
        title: {
            defaultValue: "testTitle",
            control: "text",
        },
        content: {
            defaultValue:
                "프로그래머스에서 주최한 데브코스 프론트엔드 2기 과정 수료. <br/> 바닐라 자바스크립트, 리액트, 뷰 등의 프론트엔드 스킬 학습 및 팀 프로젝트 참여.",
            control: "text",
        },
        date: {
            defaultValue: "2022. 03. 28",
            control: "text",
        },
        isSkill: {
            defaultValue: false,
            control: "boolean",
        },
    },
} as ComponentMeta<typeof AboutAtom>;

export const Default: ComponentStory<typeof AboutAtom> = (args) => {
    return <AboutAtom {...args} />;
};
