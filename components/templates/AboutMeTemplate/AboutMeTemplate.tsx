import { OvalNav, PageTopper, AboutFeature, PageFooter } from "components";
import * as S from "./AboutMeTemplate.styles";

const desc1Data =
    "안녕하세요. <br/> 사려깊음을 중시하는 프론트엔드 주니어 개발자, 이지은입니다. <br/><br/> 사용자, 개발자를 막론하고 클라이언트들에게 좋은 경험을 제공하기 위한 개발을 즐기며, 이같은 개발을 위해 사려깊게 행동하고자 노력합니다. 일을 할 때 항상 일에 대한 그 목적과 이유에 대해 짚고 넘어가며, 이를 바탕으로 학습하고, 질문하며, 행동합니다. <br/><br/>그 외에도...";

const skillContentList = [
    {
        title: "FRONT-END",
        content:
            "Javascript, TypeScript,<br/>React, NextJS, Restful API,<br/>Storybook, Figma",
        isSkill: true,
    },
    {
        title: "COOPERATION",
        content: "Git, Github, Jira, Slack",
        isSkill: true,
    },
];

const eduContentList = [
    {
        title: "프로그래머스 데브코스 프론트엔드",
        content:
            "프로그래머스에서 주최한 데브코스 프론트엔드 2기 과정 수료.<br/>바닐라 자바스크립트, 리액트, 뷰 등의 프론트엔드 스킬 학습 및 팀 프로젝트 참여.",
        date: "(2022.03. ~ 2022.08)",
        isSkill: false,
    },
    {
        title: "홍익대학교 디자인학부 시각디자인과 학사",
        content: "",
        date: "(2017.03. ~ 2022.08)",
        isSkill: false,
    },
];

const exContentList = [
    {
        title: "EXPERIENCE",
        content:
            "자바스크립트 모던 딥다이브 1회독을 목적으로 하는 스터디.<br/>스터디 기획 및 발표, 질이응답 위주의 정기적 주기의 스터디 진행",
        date: "(2022.04. ~ 2022.07)",
        isSkill: false,
    },
];

export function AboutMeTemplate({ ...props }) {
    return (
        <S.Container>
            <PageTopper>
                <OvalNav content="ABOUT ME" link="/aboutme" />
            </PageTopper>
            <S.Main>
                <S.Title>
                    <S.NickName>MayOwall</S.NickName>
                    <S.OriginName>이지은 Lee Jieun</S.OriginName>
                </S.Title>
                <S.Desc1 dangerouslySetInnerHTML={{ __html: desc1Data }} />
                <S.Divider />
                <S.Desc2>
                    <li>
                        꾸준함의 중요성을 알기에 매일 스스로의 발전을 위해
                        노력합니다.
                    </li>
                    <li>
                        급변하는 프론트엔드의 흐름에서 가장 근본적인 기본을
                        중요시합니다.
                    </li>
                    <li>새로운 시도를 두려워하지 않으며 그 과정을 즐깁니다.</li>
                    <li>
                        함께 성장하는 것의 즐거움과 가치에 대해 알고 있습니다.
                    </li>
                    <li>오월, 초록, 그림, 햇빛, 고양이를 좋아합니다.</li>
                </S.Desc2>
                <S.AboutFeatureContainer>
                    <AboutFeature
                        title="SKILLS"
                        contentList={skillContentList}
                    />
                    <AboutFeature
                        title="EDUCATIONS"
                        contentList={eduContentList}
                    />
                    <AboutFeature
                        title="EXPERIENCE"
                        contentList={exContentList}
                    />
                </S.AboutFeatureContainer>
            </S.Main>
            <PageFooter />
        </S.Container>
    );
}
