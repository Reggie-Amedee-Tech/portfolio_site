import { Badge } from "@/components/ui";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
    },
    children: { control: "text" },
  },
  args: {
    children: "Badge",
    variant: "default",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Full-Stack" },
};

export const Outline: Story = {
  args: { variant: "outline", children: "TypeScript" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "LIVE" },
};

export const Destructive: Story = {
  args: { variant: "destructive", children: "Alert" },
};

export const TerminalChips: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge className="h-auto rounded-[3px] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest">
        Full-Stack
      </Badge>
      <Badge
        variant="outline"
        className="h-auto rounded-[3px] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-foreground/60"
      >
        TypeScript
      </Badge>
      <Badge
        variant="outline"
        className="h-auto rounded-[3px] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-foreground/60"
      >
        Python
      </Badge>
      <Badge className="h-auto rounded-[2px] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest font-semibold bg-muted text-foreground">
        LIVE
      </Badge>
      <Badge className="h-auto rounded-[2px] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest font-semibold">
        SCALE
      </Badge>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  ),
};
