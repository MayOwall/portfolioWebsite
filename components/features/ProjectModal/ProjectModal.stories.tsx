import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProjectModal } from "./ProjectModal";

const dummyOnClick = () => {
    alert("button is clicked");
};

export default {
    title: "Components/Features/ProjectModal",
    component: ProjectModal,
    argTypes: {
        dataTitle: {
            defaultValue: "WooriMap",
            control: "radio",
            options: ["WooriMap", "TTaBong", "Portfolio Website"],
        },
        onClick: {
            defaultValue: dummyOnClick,
        },
    },
} as ComponentMeta<typeof ProjectModal>;

export const Default: ComponentStory<typeof ProjectModal> = (args) => {
    return <ProjectModal {...args} />;
};
