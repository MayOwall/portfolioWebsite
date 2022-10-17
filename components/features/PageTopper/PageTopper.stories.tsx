import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PageTopper } from "./PageTopper";
import { MainNavBar } from "../MainNavBar";

export default {
    title: "Components/Features/PageTopper",
    component: PageTopper,
    argTypes: {},
} as ComponentMeta<typeof PageTopper>;

export const Default: ComponentStory<typeof PageTopper> = (args) => {
    return (
        <PageTopper {...args}>
            <MainNavBar />
        </PageTopper>
    );
};
