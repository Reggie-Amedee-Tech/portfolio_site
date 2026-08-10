import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Nav } from "@/components/shared/Nav";

const meta = {
  title: "Shared/Nav",
  component: Nav,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {};

export const OnRecord: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/record",
      },
    },
  },
};

export const MenuOpen: Story = {
  decorators: [
    (Story) => (
      <div className="mx-auto w-[390px] max-w-full overflow-hidden">
        <Story />
      </div>
    ),
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/contact",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector(
      'button[aria-label="Open menu"]',
    );
    if (button instanceof HTMLButtonElement) {
      button.click();
    }
  },
};

export const MobileViewport: Story = {
  decorators: [
    (Story) => (
      <div className="mx-auto w-[390px] max-w-full overflow-hidden">
        <Story />
      </div>
    ),
  ],
};
