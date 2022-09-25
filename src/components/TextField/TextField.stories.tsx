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
const Template: ComponentStory<typeof TextField> = () => (
  <>
    <Box padding="md">
      <TextField />
    </Box>
    <Box padding="md">
      <TextField adornment={<MagnifyingGlassIcon />} />
    </Box>
    <Box padding="md">
      <TextField adornment={<MagnifyingGlassIcon />} adornmentPosition="end" />
    </Box>
    <Box padding="md">
      <TextField adornment="kr." adornmentPosition="end" />
    </Box>
  </>
);

const ColorTemplate: ComponentStory<typeof TextField> = () => (
  <>
    <Box padding="sm">
      <TextField placeholder="Default" />
    </Box>
    <Box padding="sm">
      <TextField color="primary" placeholder="Primary" />
    </Box>
    <Box padding="sm">
      <TextField color="success" placeholder="Success" />
    </Box>
    <Box padding="sm">
      <TextField color="warning" placeholder="Warning" />
    </Box>
    <Box padding="sm">
      <TextField color="error" placeholder="Error" />
    </Box>
  </>
);

export const Primary = Template.bind({});
export const Colors = ColorTemplate.bind({});
