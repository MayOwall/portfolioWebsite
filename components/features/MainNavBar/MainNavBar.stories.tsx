import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MainNavBar } from "./MainNavBar";

export default {
    title: "Components/Features/MainNavBar",
    component: MainNavBar,
    argTypes: {},
} as ComponentMeta<typeof MainNavBar>;

export const Default: ComponentStory<typeof MainNavBar> = (args) => {
    return <MainNavBar {...args} />;
};
