import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Box from "../Box";
import Text from "../Text";
import Avatar from "./Avatar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Visualizations/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => (
  <>
    <Box padding="md">
      <Text>Sizes</Text>
      <Box direction="row" alignItems="center">
        <Box padding="sm">
          <Avatar {...args} size="lg" />
        </Box>
        <Box padding="sm">
          <Avatar {...args} size="md" />
        </Box>
        <Box padding="sm">
          <Avatar {...args} size="sm" />
        </Box>
      </Box>
    </Box>
    <Box padding="md">
      <Text>Shape</Text>
      <Box direction="row" alignItems="center">
        <Box padding="sm">
          <Avatar {...args} size="lg" variant="circle" />
        </Box>
        <Box padding="sm">
          <Avatar {...args} size="lg" variant="rounded" />
        </Box>
        <Box padding="sm">
          <Avatar {...args} size="lg" variant="square" />
        </Box>
      </Box>
    </Box>
  </>
);

export const Primary = Template.bind({});

Primary.args = {
  src: "https://i.pravatar.cc/100",
  alt: "John Doe",
};
