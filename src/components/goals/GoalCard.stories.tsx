import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import GoalCard from './GoalCard';

const meta = {
  component: GoalCard,
} satisfies Meta<typeof GoalCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "entry": null,
    entry: {
      "goalDesc": "Goal description!!!!",
      "points": 50
    }
  },
};