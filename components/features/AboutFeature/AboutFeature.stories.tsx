import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AboutFeature } from "./AboutFeature";

const dummyContentList1 = [
    {
        title: "FRONT-END",
        content:
            "<span style='font-weight: 700;'>Javascript, TypeScript,</span> <br/> <span style='font-weight: 700;'>React, NextJS,</span> RESTful API, <br/> Storybook, Figma",
        isSkill: true,
    },
    {
        title: "프로그래머스 데브코스 프론트엔드",
        content:
            "프로그래머스에서 주최한 데브코스 프론트엔드 2기 과정 수료. <br/> 바닐라 자바스크립트, 리액트, 뷰 등의 프론트엔드 스킬 학습 및 팀 프로젝트 참여.",
        date: "(2017.03. ~ 2022.08)",
        isSkill: false,
    },
];

export default {
    title: "Components/Features/AboutFeature",
    component: AboutFeature,
    argTypes: {
        title: {
            defaultValue: "EDUCATION",
            control: "text",
        },
        contentList: {
            defaultValue: dummyContentList1,
            control: "object",
        },
    },
} as ComponentMeta<typeof AboutFeature>;

export const Default: ComponentStory<typeof AboutFeature> = (args) => {
    return <AboutFeature {...args} />;
};
