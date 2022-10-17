import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MainTemplate } from "./MainTemplate";

export default {
    title: "Components/Templates/MainTemplate",
    component: MainTemplate,
    argTypes: {},
} as ComponentMeta<typeof MainTemplate>;

export const Default: ComponentStory<typeof MainTemplate> = (args) => {
    return <MainTemplate {...args} />;
};
