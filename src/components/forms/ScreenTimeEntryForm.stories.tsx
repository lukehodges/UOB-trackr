import type { Meta, StoryObj } from "@storybook/react";
import ScreenTimeEntryForm from "./ScreenTimeEntryForm";

const meta: Meta<typeof ScreenTimeEntryForm> = {
  title: "forms/ScreenTimeEntryForm",
  component: ScreenTimeEntryForm,
  argTypes: {
    onSubmit: { action: "submitted" },
  },
};

export default meta;

type Story = StoryObj<typeof ScreenTimeEntryForm>;

export const Empty: Story = {
  args: {},
};

export const ProductiveWork: Story = {
  args: {
    initialData: {
      "date": "2026-04-07",
      "totalMins": 240,
      "category": "productivity",
      "appName": "VS Code",
      "notes": "Feature implementation for University coursework."
    },
  },
};

export const SocialMedia: Story = {
  args: {
    initialData: {
      date: new Date().toISOString().split("T")[0],
      totalMins: 45,
      category: "social",
      appName: "Instagram",
      notes: "Doomscrolling before bed.",
    },
  },
};
