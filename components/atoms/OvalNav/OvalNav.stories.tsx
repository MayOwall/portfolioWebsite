import { ComponentStory, ComponentMeta } from "@storybook/react";

import { OvalNav } from "./OvalNav";

export default {
    title: "Components/Atoms/OvalNav",
    component: OvalNav,
    argTypes: {},
} as ComponentMeta<typeof OvalNav>;

export const Default: ComponentStory<typeof OvalNav> = (args) => {
    return <OvalNav {...args} />;
};
