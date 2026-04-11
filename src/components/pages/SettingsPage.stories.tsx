import type { Meta, StoryObj } from "@storybook/react";
import SettingsPage from "./SettingsPage";

const meta: Meta<typeof SettingsPage> = {
  title: "pages/SettingsPage",
  component: SettingsPage,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    onSave: { action: "saved" },
  },
};

export default meta;

type Story = StoryObj<typeof SettingsPage>;

export const Empty: Story = {
  args: {
    initialSettings: {
      name: "",
      email: "",
      theme: "system",
      units: "metric",
      notifications: {
        general: true,
        reminders: false,
      },
    },
  },
};

export const PreFilled: Story = {
  args: {
    initialSettings: {
      name: "Alex Thompson",
      email: "alex.t@uob.ac.uk",
      theme: "system",
      units: "metric",
      notifications: {
        general: true,
        reminders: false,
      },
    },
  },
};
