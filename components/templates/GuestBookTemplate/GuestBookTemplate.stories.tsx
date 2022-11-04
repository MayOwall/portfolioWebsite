import { ComponentStory, ComponentMeta } from "@storybook/react";

import { GuestBookTemplate } from "./GuestBookTemplate";

export default {
    title: "Components/Templates/GuestBookTemplate",
    component: GuestBookTemplate,
    argTypes: {},
} as ComponentMeta<typeof GuestBookTemplate>;

export const Default: ComponentStory<typeof GuestBookTemplate> = (args) => {
    return <GuestBookTemplate {...args} />;
};
