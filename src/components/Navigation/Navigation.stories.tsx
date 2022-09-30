import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Navigation from "./Navigation";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Controls/Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navigation> = () => (
  <Navigation>
    <Navigation.List>
      <Navigation.Item>
        <Navigation.Link href="#">Learn</Navigation.Link>
      </Navigation.Item>

      <Navigation.Item>
        <Navigation.Link href="#">Overview</Navigation.Link>
      </Navigation.Item>

      <Navigation.Item>
        <Navigation.Link href="#">Github</Navigation.Link>
      </Navigation.Item>
    </Navigation.List>
  </Navigation>
);

export const Primary = Template.bind({});
