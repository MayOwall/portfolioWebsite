import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PageFooter } from "./PageFooter";

export default {
    title: "Components/Features/PageFooter",
    component: PageFooter,
    argTypes: {},
} as ComponentMeta<typeof PageFooter>;

export const Default: ComponentStory<typeof PageFooter> = (args) => {
    return <PageFooter {...args} />;
};
