import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "../components/input";

const meta = {
  title: "Project/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: `    
## Инпут

### Совершенно замечательный инпут в одну строчку с описанием в двести.`,
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: "large",
  },
};
export const Small: Story = {
  args: {
    size: "small",
  },
};
export const Medium: Story = {
  args: {
    size: "medium",
  },
};
export const Disabled: Story = {
  args: {
    size: "medium",
    disabled: true,
    value: "disabled medium Input with value",
  },
};
