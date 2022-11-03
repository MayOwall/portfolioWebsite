import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProjectTemplate } from "./ProjectTemplate";

export default {
    title: "Components/Templates/ProjectTemplate",
    component: ProjectTemplate,
    argTypes: {},
} as ComponentMeta<typeof ProjectTemplate>;

export const Default: ComponentStory<typeof ProjectTemplate> = (args) => {
    return <ProjectTemplate {...args} />;
};
