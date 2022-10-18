import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AboutOvalFrame } from "./AboutOvalFrame";

export default {
    title: "Components/Features/AboutOvalFrame",
    component: AboutOvalFrame,
    argTypes: {},
} as ComponentMeta<typeof AboutOvalFrame>;

export const Default: ComponentStory<typeof AboutOvalFrame> = (args) => {
    return <AboutOvalFrame {...args} />;
};
