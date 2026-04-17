import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "forms/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    onSubmit: { action: "submitted" },
  },
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    loading: false,
    error: "",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    error: "",
  }
};

export const Error: Story = {
  args: {
    loading: false,
    error: "Error: invalid email or password",
  }
}
