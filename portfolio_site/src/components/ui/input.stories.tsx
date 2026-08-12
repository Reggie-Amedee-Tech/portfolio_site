import { Input, Label } from "@/components/ui";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "search", "url"],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    type: "text",
    placeholder: "Your name",
    className: "w-72 rounded bg-muted h-10",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "you@company.com",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled",
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="w-72 space-y-1.5">
      <Label
        htmlFor="story-input-name"
        className="font-mono text-[9px] uppercase tracking-widest text-foreground/60"
      >
        Name
      </Label>
      <Input {...args} id="story-input-name" />
    </div>
  ),
};
