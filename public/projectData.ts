import woorimapBanner from "public/images/woorimapBanner.png";
import ttaBongBanner from "public/images/ttabongBanner.png";
import { StaticImageData } from "next/image";

interface IProjectData {
    title: string;
    date: string;
    team: string;
    repo: string;
    image: string | StaticImageData;
    desc: string;
}

interface IProjectObjectData {
    [key: string]: IProjectData;
}

const projectData: IProjectObjectData = {
    WooriMap: {
        title: "WooriMap",
        date: "2022.08.18 ~ 2022.08.18",
        team: "프론트엔드 5명, 백엔드 4명",
        repo: "#",
        image: woorimapBanner,
        desc: `
        연인들 간의 추억을 공유하고 모아볼 수 있는<br/> KakaoMap 기반 SNS 플랫폼<br/><br/>
        <h4>작업 기술</h4>
        Typescript, React, Next.js, Recoil, storybook, Github, Jira 등<br/>
        <h4>담당 업무</h4>
        <ul>
            <li>Typescript 및 React를 활용하여 컴포넌트, props 기반의 웹 프론트엔드 구현</li>
            <li>Next.js를 활용하여 페이지 및 라우팅 구현</li>
            <li>TStorybook을 활용하여 Atomic Design 단계별 컴포넌트 구현</li>
            <li>Axios를 활용한 api fetch 구현</li>
            <li>Figma, Scss를 활용하여 전반적인 UI 디자인 및 CSS 구현</li>
        </ul>
        `,
    },
    TTaBong: {
        title: "TTaBong",
        date: "2022.08.18 ~ 2022.08.18",
        team: "프론트엔드 5명",
        repo: "#",
        image: ttaBongBanner,
        desc: `
        사용자 간 칭찬 포스트를 공유하는 SNS 서비스. <br/> 
        오늘 하루, 따봉하세요 👍 <br/><br/><br/>
        <h4>작업 기술</h4>
        React, Javascript ES6+, react-router-dom, Storybook, Github, Github Project 등 <br/><br/>
        <h4>담당 업무</h4>
        <ul>
            <li>React, Javascript ES6+를 이용하여 웹 프론트엔드 구현</li>
            <li>메인페이지에서의 무한스크롤 로직 및 라우팅 기능 구현</li>
            <li>Storybook을 활용하여 component, feature, page 3단계로 분화된 컴포넌트 구현</li>
            <li>Figma, Scss를 활용하여 전반적인 UI 디자인 및 CSS 구현</li>
        </ul>
        `,
    },
    "Portfolio Website": {
        title: "Portfolio Website",
        date: "2022.10.11 ~ 2022.08.18",
        team: "개인프로젝트",
        repo: "#",
        image: "#",
        desc: "아직 준비중입니다",
    },
};

export default projectData;
