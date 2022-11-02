import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProjectFrame } from "./ProjectFrame";

export default {
    title: "Components/Features/ProjectFrame",
    component: ProjectFrame,
    argTypes: {
        title: {
            defaultValue: "WooriMap",
            control: "text",
        },
        date: {
            defaultValue: "2022.11.01",
            control: "text",
        },
        width: {
            defaultValue: "25rem",
            control: "text",
        },
        height: {
            defaultValue: "15rem",
            control: "text",
        },
        direction: {
            defaultValue: "vertical",
            control: "radio",
            options: ["vertical", "horizontal"],
        },
    },
} as ComponentMeta<typeof ProjectFrame>;

export const Default: ComponentStory<typeof ProjectFrame> = (args) => {
    return <ProjectFrame {...args} />;
};
