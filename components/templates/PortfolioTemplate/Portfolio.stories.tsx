import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PortfolioTemplate } from "./PortfolioTemplate";

export default {
    title: "Components/Templates/ProjectTemplate",
    component: PortfolioTemplate,
    argTypes: {},
} as ComponentMeta<typeof PortfolioTemplate>;

export const Default: ComponentStory<typeof PortfolioTemplate> = (args) => {
    return <PortfolioTemplate {...args} />;
};
