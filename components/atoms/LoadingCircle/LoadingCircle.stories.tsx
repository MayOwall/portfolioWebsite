import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoadingCircle } from "./LoadingCircle";

export default {
    title: "Components/Atoms/LoadingCircle",
    component: LoadingCircle,
    argTypes: {},
} as ComponentMeta<typeof LoadingCircle>;

export const Default: ComponentStory<typeof LoadingCircle> = (args) => {
    return <LoadingCircle {...args} />;
};
