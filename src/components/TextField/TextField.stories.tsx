import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Box from "../Box";
import TextField from "./TextField";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Input/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = (args) => (
  <>
    <Box padding="md">
      <TextField {...args} />
    </Box>
    <Box padding="md">
      <TextField {...args} adornment={<MagnifyingGlassIcon />} />
    </Box>
    <Box padding="md">
      <TextField
        {...args}
        adornment={<MagnifyingGlassIcon />}
        adornmentPosition="end"
      />
    </Box>
    <Box padding="md">
      <TextField {...args} adornment={"kr."} adornmentPosition="end" />
    </Box>
  </>
);

export const Primary = Template.bind({});

Primary.args = {};
