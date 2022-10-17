import { ComponentStory, ComponentMeta } from "@storybook/react";

import { OvalNav } from "./OvalNav";

export default {
    title: "Components/Atoms/OvalNav",
    component: OvalNav,
    argTypes: {
        content: {
            defaultValue: "ABOUT ME",
            control: "text",
        },
        link: {
            defaultValue: "#",
            control: "text",
        },
    },
} as ComponentMeta<typeof OvalNav>;

export const Default: ComponentStory<typeof OvalNav> = (args) => {
    return <OvalNav {...args} />;
};
