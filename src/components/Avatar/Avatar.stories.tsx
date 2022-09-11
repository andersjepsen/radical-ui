import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Avatar from "./Avatar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  src: "https://i.pravatar.cc/100",
  alt: "John Doe",
};
