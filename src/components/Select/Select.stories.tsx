import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Select from "./Select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Input/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = () => (
  <Select placeholder="Select something">
    <Select.Item value="foo">Foo</Select.Item>
    <Select.Item value="bar">Bar</Select.Item>
    <Select.Item value="baz">Baz</Select.Item>
    <Select.Item value="disabled" disabled>
      Disabled
    </Select.Item>
    <Select.Item value="test">Test</Select.Item>
    <Select.Item value="hello">Hello</Select.Item>
  </Select>
);

const GroupTemplate: ComponentStory<typeof Select> = () => {
  return (
    <Select>
      <Select.Group label="Fish">
        <Select.Item value="Trout">Trout</Select.Item>
        <Select.Item value="Salmon">Salmon</Select.Item>
        <Select.Item value="Herring">Herring</Select.Item>
      </Select.Group>
      <Select.Seperator />
      <Select.Group label="Mammals">
        <Select.Item value="Fox">Fox</Select.Item>
        <Select.Item value="Panda">Panda</Select.Item>
        <Select.Item value="Koala">Herring</Select.Item>
      </Select.Group>
      <Select.Seperator />
      <Select.Group label="Insects">
        <Select.Item value="Spider">Spider</Select.Item>
        <Select.Item value="Fly">Fly</Select.Item>
        <Select.Item value="Grasshopper">Grasshopper</Select.Item>
      </Select.Group>
    </Select>
  );
};

export const Primary = Template.bind({});
export const Groups = GroupTemplate.bind({});

Primary.args = {};
