import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../components/button";

const meta = {
  title: "Project/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
##Кнопка        
        
<img src="/src/stories/assets/button.jpg" alt="Кнопка" width="400" style="margin: 0 auto; display: block;"/>
`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Размер кнопки - описание из сторис",
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    text: {
      description: "текст кнопки - описание из сторис",
      type: "string",
      control: { type: "text" },
    },
    disabled: {
      description: "Заблокирована кнопка - описание из сторис",
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
