import type { Meta, StoryObj } from "@storybook/react";
import { RegisterForm } from "./RegisterForm";

const meta: Meta<typeof RegisterForm> = {
  title: "forms/RegisterForm",
  component: RegisterForm,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    onSubmit: { action: "submitted" },
  },
};

export default meta;

type Story = StoryObj<typeof RegisterForm>;

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