import { Textarea, Label } from "@/components/ui";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "UI/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    rows: { control: "number" },
  },
  args: {
    placeholder: "Team, stack, and what you need built.",
    rows: 3,
    className: "w-80 rounded bg-muted resize-none",
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled",
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="w-80 space-y-1.5">
      <Label className="font-mono text-[9px] uppercase tracking-widest text-foreground/50">
        What&apos;s the Role?
      </Label>
      <Textarea {...args} />
    </div>
  ),
};
