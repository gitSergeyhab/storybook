import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../components/button";

const meta = {
  title: "Project/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    text: {
      type: "string",
      control: { type: "text" },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: "large",
    text: "large Button",
  },
};
export const Small: Story = {
  args: {
    size: "small",
    text: "small Button",
  },
};
export const Medium: Story = {
  args: {
    size: "medium",
    text: "medium Button",
  },
};
export const Disabled: Story = {
  args: {
    size: "medium",
    text: "Disabled medium Button",
    disabled: true,
  },
};
