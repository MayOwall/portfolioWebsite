import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GalleryWall } from "./GalleryWall";

export default {
    title: "Components/Features/GalleryWall",
    component: GalleryWall,
    argTypes: {},
} as ComponentMeta<typeof GalleryWall>;

export const Default: ComponentStory<typeof GalleryWall> = (args) => {
    return <GalleryWall {...args} />;
};
