import { ComponentStory, ComponentMeta } from "@storybook/react";
import plant from "public/images/plant.jpeg";
import { PictureFrame } from "./PictureFrame";

export default {
    title: "Components/Atoms/PictureFrame",
    component: PictureFrame,
    argTypes: {
        image: {
            defaultValue: plant,
            control: "text",
        },
        width: {
            defaultValue: "10rem",
            control: "text",
        },
        height: {
            defaultValue: "10rem",
            control: "text",
        },
        borderRadius: {
            defaultValue: "1rem",
            control: "text",
        },
    },
} as ComponentMeta<typeof PictureFrame>;

export const Default: ComponentStory<typeof PictureFrame> = (args) => {
    return <PictureFrame {...args} />;
};
