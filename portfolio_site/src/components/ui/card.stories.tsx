import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from "@/components/ui";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[360px] rounded ring-border">
      <CardHeader>
        <CardTitle>Send a note</CardTitle>
        <CardDescription>
          Three fields. Nothing gated behind it.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Card content goes here — forms, metrics, or project details.
        </p>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button size="sm">Send →</Button>
      </CardFooter>
    </Card>
  ),
};

export const ImpactPanel: Story = {
  render: () => (
    <Card className="w-[420px] rounded gap-0 py-0 ring-border">
      <CardHeader className="border-b border-border px-6 py-4">
        <div className="flex justify-between items-center">
          <CardDescription className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
            Impact — Sourced
          </CardDescription>
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
            Sources Below
          </span>
        </div>
      </CardHeader>
      <CardContent className="px-6 py-5 space-y-5">
        <div>
          <div className="flex items-start gap-4">
            <span className="text-3xl font-bold leading-none">$100K</span>
            <span className="text-sm text-muted-foreground leading-snug">
              new revenue from a multi-provider SIP layer
            </span>
          </div>
          <div className="mt-1.5 flex items-start gap-2">
            <span className="inline-block w-3 h-px mt-2.5 shrink-0 bg-primary" />
            <span className="font-mono text-[10px] text-foreground/40 tracking-wide">
              Goodcall — raised enterprise contracts, 100+ ↗ carriers
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-border bg-transparent px-6 py-4">
        <span className="font-mono text-[10px] text-foreground/40">
          Currently apprenticing at 718 Digital Labs
        </span>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card className="w-[360px] rounded ring-border">
      <CardHeader>
        <CardTitle>Project file</CardTitle>
        <CardDescription>Provider-agnostic voice</CardDescription>
        <CardAction>
          <Button variant="ghost" size="xs">
            Open →
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Goodcall off a single carrier and onto a multi-provider SIP layer.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Small: Story = {
  render: () => (
    <Card className="w-[320px] rounded ring-border" size="sm">
      <CardContent className="px-4 py-3 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-widest text-foreground/40 mb-0.5">
            Email
          </p>
          <p className="text-sm font-medium">jeantechnical1992@gmail.com</p>
        </div>
        <Button
          variant="link"
          size="sm"
          className="h-auto p-0 text-[10px] uppercase tracking-widest"
        >
          Copy
        </Button>
      </CardContent>
    </Card>
  ),
};
