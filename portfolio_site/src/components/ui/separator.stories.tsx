import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Separator } from "@/components/ui/separator";

const meta = {
  title: "UI/Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    orientation: "horizontal",
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: (args) => (
    <div className="w-80 space-y-4">
      <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
        TypeScript
      </p>
      <Separator {...args} />
      <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
        Next.js
      </p>
    </div>
  ),
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: (args) => (
    <div className="flex h-8 items-center gap-4">
      <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
        R.J. Amedee
      </span>
      <Separator {...args} />
      <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
        Software Engineer
      </span>
      <Separator {...args} />
      <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
        New York
      </span>
    </div>
  ),
};
