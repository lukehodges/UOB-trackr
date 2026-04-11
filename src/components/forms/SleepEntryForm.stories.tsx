import type { Meta, StoryObj } from "@storybook/react";
import SleepEntryForm from "./SleepEntryForm";

const meta: Meta<typeof SleepEntryForm> = {
  title: "forms/SleepEntryForm",
  component: SleepEntryForm,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onSubmit: { action: "submitted" },
  },
};

export default meta;

type Story = StoryObj<typeof SleepEntryForm>;

export const Empty: Story = {
  args: {},
};

export const GoodSleep: Story = {
  args: {
    initialData: {
      date: "2024-03-20",
      bedtime: "23:30",
      wakeTime: "08:15",
      quality: 4,
      notes: "Felt very refreshed today!",
    },
    onSubmit: (data) => console.log("Form Submitted (Pre-filled):", data),
  },
};

export const BadSleep: Story = {
  args: {
    initialData: {
      date: "2024-03-20",
      bedtime: "02:00",
      wakeTime: "10:00",
      quality: 1,
      notes: "Woke up late, feeling groggy.",
    },
  },
};

