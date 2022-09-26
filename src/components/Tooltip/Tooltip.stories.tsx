import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Box from "../Box";
import Button from "../Button";
import Tooltip from "./Tooltip";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Controls/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tooltip> = () => (
  <Box padding="md" direction="row">
    <Tooltip content="The cake is a lie">
      <Button>Hover me</Button>
    </Tooltip>
    <Tooltip content="...to the knee" arrow>
      <Button>An arrow</Button>
    </Tooltip>
  </Box>
);

export const Primary = Template.bind({});
