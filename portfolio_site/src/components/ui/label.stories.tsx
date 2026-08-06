import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const meta = {
  title: "UI/Label",
  component: Label,
  tags: ["autodocs"],
  args: {
    children: "Name",
    className:
      "font-mono text-[9px] uppercase tracking-widest text-foreground/50",
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithControl: Story = {
  render: (args) => (
    <div className="w-72 space-y-1.5">
      <Label {...args} htmlFor="story-email">
        Email
      </Label>
      <Input
        id="story-email"
        type="email"
        placeholder="you@company.com"
        className="rounded bg-muted h-10"
      />
    </div>
  ),
};
