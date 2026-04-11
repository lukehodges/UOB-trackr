import type { Meta, StoryObj } from "@storybook/react";
import DashboardPage from "./DashboardPage";

const meta: Meta<typeof DashboardPage> = {
  title: "pages/DashboardPage",
  component: DashboardPage,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof DashboardPage>;

export const PreFilled: Story = {
  args: {
    user: {
      name: "Alex Thompson",
    },
    stats: {
      sleep: {
        average: "7h 45m",
        trend: { direction: "up", percentage: 8 },
      },
      stress: {
        average: 3.5,
        trend: { direction: "down", percentage: 12 },
      },
      screentime: {
        total: "3h 20m",
        trend: { direction: "flat", percentage: 0 },
      },
    },
    recentSleepEntries: [
      {
        date: "2026-04-06",
        bedtime: "2026-04-06T22:30:00Z",
        wakeTime: "2026-04-07T07:00:00Z",
        quality: 9,
        notes: "Feeling very refreshed",
      },
      {
        date: "2026-04-05",
        bedtime: "2026-04-05T23:15:00Z",
        wakeTime: "2026-04-06T06:45:00Z",
        quality: 7,
      },
      {
        date: "2026-04-04",
        bedtime: "2026-04-04T00:30:00Z",
        wakeTime: "2026-04-04T08:00:00Z",
        quality: 6,
        notes: "A bit restless",
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    user: {
      name: "New User",
    },
    stats: {
      sleep: {
        average: "0h",
        trend: { direction: "flat", percentage: 0 },
      },
      stress: {
        average: 0,
        trend: { direction: "flat", percentage: 0 },
      },
      screentime: {
        total: "0h",
        trend: { direction: "flat", percentage: 0 },
      },
    },
    recentSleepEntries: [],
  },
};
