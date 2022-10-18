import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SplashCard } from "./SplashCard";

export default {
    title: "Components/Features/SplashCard",
    component: SplashCard,
    argTypes: {},
} as ComponentMeta<typeof SplashCard>;

export const Default: ComponentStory<typeof SplashCard> = (args) => {
    return <SplashCard {...args} />;
};
