import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    backgrounds: {
      default: "terminal-ledger",
      values: [
        { name: "terminal-ledger", value: "#303438" },
        { name: "card", value: "#383d41" },
      ],
    },
    a11y: {
      test: "todo",
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <div className="dark font-sans text-foreground antialiased">
        <Story />
      </div>
    ),
  ],
};

export default preview;
