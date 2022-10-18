import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AboutMeTemplate } from "./AboutMeTemplate";

export default {
    title: "Components/Templates/AboutMeTemplate",
    component: AboutMeTemplate,
    argTypes: {},
} as ComponentMeta<typeof AboutMeTemplate>;

export const Default: ComponentStory<typeof AboutMeTemplate> = (args) => {
    return <AboutMeTemplate {...args} />;
};
