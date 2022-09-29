import { PlusIcon } from "@radix-ui/react-icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Box from "../Box";
import Text from "../Text";
import Anchor from "./Anchor";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Controls/Anchor",
  component: Anchor,
} as ComponentMeta<typeof Anchor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Anchor> = () => (
  <Box gap="md">
    <Anchor>Click me!</Anchor>
    <Anchor disabled>Disabled</Anchor>
    <Anchor icon={<PlusIcon />}>Add</Anchor>
    <Anchor icon={<PlusIcon />} iconPosition="end">
      Add
    </Anchor>
    <Text>
      This is a <Anchor weight="bold">link</Anchor> in the middle of a sentence
    </Text>
  </Box>
);

export const Primary = Template.bind({});
